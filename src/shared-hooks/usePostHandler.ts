import {AxiosResponse} from 'axios';
import {useAxiosInstance} from '../hooks/useAxiosInstance';
import {useAppSelector, useAppDispatch} from '../srstore/rstore';
import {
  bookmarkPost,
  createPost,
  likePost,
  loadPosts as lPosts,
} from '../srstore/slices/posts';
import {Post} from '../types';
import {Utils} from '../utils/Utils';
import {useUploadManager} from './useUploadManager';

export const usePostHandler = () => {
  const {axios, abort} = useAxiosInstance();
  const {startUploadTransaction} = useUploadManager();
  const dispatch = useAppDispatch();
  const credentials = useAppSelector(state => state.credentials);

  const loadPosts = async (location: string, authorId: string) => {
    return axios
      .get<{}, AxiosResponse<Post[]>>('/posts/' + authorId)
      .then(e => {
        if (e.status == 200) {
          dispatch(lPosts({location: location, posts: e.data}));
        }
        return e;
      });
  };
  const loadFeed = async () => {
    return axios.get<{}, AxiosResponse<Post[]>>('/feed').then(e => {
      if (e.status == 200) {
        dispatch(lPosts({location: 'feed', posts: e.data}));
      }
      return e;
    });
  };
  const like = (location: string, postId: string) => {
    dispatch(likePost({location, postId}));
    axios
      .put('/post/like/' + postId)
      .then(e => e)
      .catch(e => {
        dispatch(likePost({location, postId}));
        return e;
      });
  };
  const bookmark = (location: string, postId: string) => {
    dispatch(bookmarkPost({location, postId}));
    axios
      .put('/post/bookmark/' + postId)
      .then(e => e)
      .catch(e => {
        dispatch(bookmarkPost({location, postId}));
        return e;
      });
  };
  const createPost = (
    post: Post,
    onProgressChanged: (progress: number) => void,
    onUploadCompleted: () => void,
    onUploadFailed: () => void,
  ) => {
    const media = (post.media || []).map(post => {
      const ext =
        '.' + post.fileName?.split('.')[post.fileName?.split('.').length - 1];
      const fileName = Utils.getRandomString() + ext;
      return {
        ...post,
        fileName,
      };
    });

    startUploadTransaction({
      media,
      onProgressChanged,
      onUploadCompleted,
      onUploadFailed,
    })
      .then(async media => {
        const m = media?.map(post => {
          return {
            ...post,
            uri: `https://reevr-bucket.s3.amazonaws.com/${post.fileName}`,
          };
        });
        try {
          const response = await axios.post<Post, AxiosResponse<Post>>(
            `/post`,
            {
              postedAt: post.postedAt,
              media: m,
              text: post.text || 'asdasdasd',
              //   authorId: credentials.id,
            },
          );
          if (response.status == 201) {
          }
          onUploadCompleted();
          return response;
        } catch (e) {
          console.warn(e);
        }
      })
      .catch(e => {
        console.warn(e);
      });
  };

  const deletePost = (location: string, postId: string) => {};

  return {
    like,
    bookmark,
    deletePost,
    createPost,
    loadPosts,
    loadFeed,
  };
};
