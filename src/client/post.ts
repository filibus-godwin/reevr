import axios, {AxiosResponse} from 'axios';
import {UploadManager} from './upload.manager';
import {Urls} from './urls';
import {Utils} from './utils';
import {Post as PostType} from '../types';

export class Post {
  bearer!: string;
  id!: string;
  accessToken!: string;
  static instance: Post;

  static initialize = () => {
    if (!this.instance) {
      this.instance = new Post();
      return this.instance;
    }
    return this.instance;
  };

  static getInstance = () => {
    return this.instance;
  };

  setData = ({accessToken, id}: {accessToken: string; id: string}) => {
    this.accessToken = accessToken;
    this.id = id;
  };

  like = async (postId: string) => {
    return axios
      .put(
        Urls.getLikePostUrl(postId),
        {},
        {headers: {authorization: `Bearer ${this.accessToken}`}},
      )
      .then(e => e.data);
  };

  unlike = async (postId: string) => {
    return axios
      .put(
        Urls.getUnlikePostUrl(postId),
        {},
        {headers: {authorization: `Bearer ${this.accessToken}`}},
      )
      .then(e => e.data);
  };

  delete = async (postId: string) => {
    return axios
      .delete(Urls.getDeletePostUrl(postId), {
        headers: {authorization: `Bearer ${this.accessToken}`},
      })
      .then(e => e.data);
  };

  addToBookmarks = async (postId: string) => {
    return axios
      .put(
        Urls.getAddToBookmarkUrl(postId),
        {},
        {headers: {authorization: `Bearer ${this.accessToken}`}},
      )
      .then(e => e.data);
  };
  removeFromBookmarks = async (postId: string) => {
    return axios
      .put(
        Urls.getRemoveFromBookmarkUrl(postId),
        {},
        {headers: {authorization: `Bearer ${this.accessToken}`}},
      )
      .then(e => e.data);
  };

  createPost = async (
    post: PostType,
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

    const accessToken = this.accessToken;

    UploadManager.startUploadTransaction({
      media,
      onProgressChanged,
      onUploadCompleted,
      onUploadFailed,
      accessToken,
    })
      .then(async media => {
        const m = media?.map(post => {
          return {
            ...post,
            uri: `https://reevr-bucket.s3.amazonaws.com/${post.fileName}`,
          };
        });
        try {
          const response = await axios.post<PostType, AxiosResponse<PostType>>(
            Urls.getCreatePostUrl(),
            {
              postedAt: post.postedAt,
              media: m,
              text: post.text,
              authorId: this.id,
            },
            {
              headers: {
                authorization: `Bearer ${this.accessToken}`,
              },
            },
          );
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

  fetchPostsByAuthor = async (authorId: string) => {
    return axios
      .get(Urls.getPostsByAuthorUrl(authorId), {
        headers: {authorization: this.bearer},
      })
      .then(e => e.data);
  };

  comment = async () => {};
}
