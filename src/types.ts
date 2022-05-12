import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {CompositeScreenProps} from '@react-navigation/native';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {Asset} from 'react-native-image-picker';

export type RootStackParamList = {
  Root: RootTabParamList;
  UserProfile: {userId: string};
  ExpandedPost: {postId: string};
  PostCardMenu: {postId: string; authorId: string};
  Comments: {postId: string};
  SearchResult: undefined;
  PostList: undefined;
  ProfileMenu: undefined;

  Sandbox: undefined;
  Bookmarks: undefined;
  EditProfile: undefined;

  Settings: undefined;
  AdManagement: undefined;
  Create: undefined;
  CreateAd: undefined;
  CreateTextOnly: undefined;
  CreateMedia: {assets: MediaAsset[]};

  Conversation: {userId: string};
  Activities: undefined;
  OngoingContest: {contestId: string};
  AdInfo: {adId: string};
  ContestInfo: {contestId: string};
  AdAndContestList: undefined;

  UserSearch: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  Feed: {currentUploads: MediaAsset[]};
  Discover: undefined;
  ChatList: undefined;
  Profile: {id: string};
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

export type LoginStackParamList = {
  Welcome: undefined;
  Login: undefined;
  SignUp: undefined;
};

export type LoginStackScreenProps<Screen extends keyof LoginStackParamList> =
  NativeStackScreenProps<LoginStackParamList, Screen>;

export type ColorSchemeType = {
  primary: string;
  secondary: string;
  background: string;
  surface: string;
  onPrimary: string;
  onSecondary: string;
  onBackground: string;
  onSurface: string;
  warning: string;
  text: string;
};

export type Theme = {
  light: Partial<ColorSchemeType>;
  dark: Partial<ColorSchemeType>;
};

export type VoidFunction = () => void;

export type MessageStatus =
  | 'sent'
  | 'sending'
  | 'failed'
  | 'delivered'
  | 'read';

export type MediaType = {uri: string; mimeType: 'image/png' | 'video/mp4'};

export type ReplyType = {
  text?: string;
  media?: MediaType;
  messageId: string;
  senderId: string;
};

export type File = {uri: string; type: ''};

export type MessageType = {
  messageId: string;
  senderId: string;
  recipientId: string;
  timestamp: number;
  isReply: boolean;
  replyMessageId?: string;
  content: {
    text?: string;
    media?: MediaType[];
    file?: File;
    replyText?: string;
    replyMedia?: MediaType;
  };

  //
  name: string;
  left?: boolean;
  previousMessageSenderId?: string;
  nextMessageSenderId?: string;
  onPressCaption?: VoidFunction;
  onSwipeableOpen?: VoidFunction;
  selected?: boolean;
};

export interface Profile {
  id: string;
  username: string;
  bio: string;
  streamToken: string;
  profilePictureUrl: string;
  numberOfFollowers: number;
  numberOfPosts: number;
  numberOfFollowed: number;
  verified: boolean;
  interests: string[];
  accessToken: string;
  refreshToken: string;
}

export interface PostData {
  media?: MediaAsset[];
  text?: string;
  postedAt: Date;
}

export type Posts = {
  author: {id: string; username: string; avatarUri: string};
  timesBookmarked: string;
  numberOfComments: number;
  numberOfLikes: number;
} & PostData;

export type MediaAsset = Pick<
  Asset,
  'duration' | 'fileName' | 'fileSize' | 'height' | 'width' | 'uri' | 'type'
>;

export type Post = {
  id?: string;
  media?: MediaAsset[];
  text?: string;
  postedAt?: Date;
  author?: {id: string; username: string; profilePictureUrl: string};
  timesBookmarked: number;
  numberOfComments: number;
  numberOfLikes: number;
  liked?: boolean;
  bookmarked?: boolean;
};
