import create from 'zustand';
import {PostResponseType} from '../client/types';

type Posts = {[id: string]: PostResponseType[]};

type Store = {
  posts: Posts;
  addPosts: (id: string, posts: PostResponseType[]) => void;
  removePost: (authorId: string, postId: string) => void;
  fetchPosts: (
    authorId: string,
    // start: number,
    // stop: number,
  ) => PostResponseType[];
  toggleLiked: (authorId: string, postId: string) => void;
};

export const usePostStore = create<Store>((set, get) => {
  return {
    posts: {},
    addPosts: (id: string, posts: PostResponseType[]) =>
      set({posts: {[id]: [...posts]}}),
    removePost: (authorId: string, postId: string) =>
      set({posts: removePost(authorId, postId, get().posts)}),
    fetchPosts: (authorId: string) => {
      return fetchPosts(authorId, get().posts);
    },
    toggleLiked: (authorId: string, postId: string) =>
      set({
        posts: {
          ...get().posts,
          [authorId]: toggleLiked(authorId, postId, get().posts[authorId]),
        },
      }),
  };
});

const removePost = (authorId: string, postId: string, posts: Posts) => {
  const userPosts = posts[authorId];
  const filteredPosts = userPosts.filter(value => {
    return value.id !== postId;
  });
  return {...posts, [authorId]: filteredPosts};
};

const fetchPosts = (authorId: string, posts: Posts) => {
  return posts[authorId];
};

const toggleLiked = (
  authorId: string,
  postId: string,
  posts: PostResponseType[],
) => {
  // console.log(authorId, );
  return posts.map(post => {
    if (post.id == postId) {
      return {
        ...post,
        liked: !post.liked,
        numberOfLikes: !post.liked
          ? post.numberOfLikes + 1
          : post.numberOfLikes - 1,
      };
    }
    return post;
  });
};
const toggleBookmarked = (authorId: string, postId: string, posts: Posts) => {};
/**
 * posts : {id: []}
 * addPosts : (id: string, posts: post[]) => void
 * createPost : (id: string, post: post) => void
 * removePost : (id : string) => void
 * likePost: (id ; string) => void
 * unlikePost : (postId : string, authorId : string) => void
 * boomarkPost : (postId : string, authorId : string) => void
 */
