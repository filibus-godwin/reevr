import {MediaType} from '../types';

export type LoginResponse = {
  id: string;
  accessToken: string;
  refreshToken: string;
};
export type RegisterResponse = {
  id: string;
  accessToken: string;
  refreshToken: string;
};

export type UserResponseType = {
  _id: string;
  username: string;
  profilePictureUrl: string;
  bio: string;
  interests: string[];
  numberOfFollowers: number;
  numberOfPosts: number;
};

export type PostResponseType = {
  id: string;
  author: {
    id: string;
    username: string;
    profilePictureUrl: string;
  };
  media?: MediaType[];
  numberOfComments: number;
  numberOfLikes: number;
  text?: string;
  postedAt: Date;
  liked: boolean;
  bookmarked: boolean;
};
