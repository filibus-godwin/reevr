import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Post} from '../../types';
import {rootstore} from '../rstore';

const initialState: {
  bookmarks: Post[];
  posts: {[id: string]: Post[]};
} = {bookmarks: [], posts: {}};

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    loadPosts: (
      state,
      {payload}: PayloadAction<{location: string; posts: Post[]}>,
    ) => {
      state.posts[payload.location] = payload.posts;
    },

    createPost: (state, {payload}: PayloadAction<{id: string; post: Post}>) => {
      const {id, post} = payload;
      const posts = state.posts[id] || [];

      const postExists =
        posts.find((p, _index, _postArr) => {
          return p.id == post.id;
        }) !== undefined;

      if (postExists) return;

      state.posts[id].unshift(post);
      state.posts['feed'].unshift(post);
    },

    likePost: (
      state,
      {payload}: PayloadAction<{location: string; postId: string}>,
    ) => {
      const {postId, location} = payload;
      const posts = state.posts[location];

      if (!posts) throw new Error('Location does not exist');

      let postIndex = -1;

      const post = posts.find((post, index, _arr) => {
        if (post.id == postId) postIndex = index;
        return post.id == postId;
      });

      if (!post) throw new Error('Post does not exist');

      const newLikeCount = !post.liked
        ? post.numberOfLikes + 1
        : post.numberOfLikes - 1;
      const newLikeStatus = !post.liked;

      state.posts['feed'].forEach(post => {
        if (post.id == postId) {
          post.liked = newLikeStatus;
          post.numberOfLikes = newLikeCount;
        }
      });
      state.posts[location].forEach(post => {
        if (post.id == postId) {
          post.liked = newLikeStatus;
          post.numberOfLikes = newLikeCount;
        }
      });
      state.posts[post.author?.id as string].forEach(post => {
        if (post.id == postId) {
          post.liked = newLikeStatus;
          post.numberOfLikes = newLikeCount;
        }
      });
      state.bookmarks.forEach(post => {
        if (post.id == postId) {
          post.liked = newLikeStatus;
          post.numberOfLikes = newLikeCount;
        }
      });
    },

    bookmarkPost: (
      state,
      {payload}: PayloadAction<{location: string; postId: string}>,
    ) => {
      const {postId, location} = payload;
      const posts = state.posts[location];

      if (!posts) throw new Error('Location does not exist');

      let postIndex = -1;

      const post = posts.find((post, index, _arr) => {
        if (post.id == postId) postIndex = index;
        return post.id == postId;
      });

      if (!post) throw new Error('Post does not exist');

      let bookmarkIndex = -1;

      state.bookmarks.find((post, index, _postArr) => {
        if (post.id == postId) bookmarkIndex = index;
        return post.id == postId;
      });

      const newBookmarkCount = post.bookmarked
        ? post.timesBookmarked - 1
        : post.timesBookmarked + 1;
      const newBookmarkStatus = !post.bookmarked;

      state.posts['feed'].forEach(post => {
        if (post.id == postId) {
          post.timesBookmarked = newBookmarkCount;
          post.bookmarked = newBookmarkStatus;
        }
      });
      state.posts[location].forEach(post => {
        if (post.id == postId) {
          post.timesBookmarked = newBookmarkCount;
          post.bookmarked = newBookmarkStatus;
        }
      });
      state.posts[post.author?.id as string].forEach(post => {
        if (post.id == postId) {
          post.timesBookmarked = newBookmarkCount;
          post.bookmarked = newBookmarkStatus;
        }
      });
      if (bookmarkIndex == -1) {
        state.bookmarks.unshift({
          ...state.posts[location][postIndex],
          timesBookmarked: newBookmarkCount,
          bookmarked: newBookmarkStatus,
        });
      } else {
        state.bookmarks = state.bookmarks.filter(post => {
          return post.id !== postId;
        });
      }
    },

    deletePost: (state, {payload}: PayloadAction<{postId: string}>) => {},

    resetPosts: state => {
      state = initialState;
    },
  },
});

export const {
  bookmarkPost,
  createPost,
  likePost,
  loadPosts,
  deletePost,
  resetPosts,
} = postSlice.actions;

export const postSliceReducers = postSlice.reducer;
