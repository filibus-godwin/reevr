import React from 'react';
import {PostCard} from '../components/feed_card/index';
import {VoidFunction} from '../types';

export type ProfileData = React.ComponentProps<typeof PostCard> & {
  author: {profilePictureUrl: string; username: string};
};

type Actions = Pick<
  React.ComponentProps<typeof PostCard>,
  | 'onPressBookmark'
  | 'onPressComment'
  | 'onPressImage'
  | 'onPressLike'
  | 'onPressMenu'
  | 'onPressName'
  | 'onPressShare'
>;

export const getProfileData = (actions: Actions): ProfileData[] => {
  return [
    {
      author: {
        profilePictureUrl: 'https://source.unsplash.com/random/20',
        username: 'X',
      },
      avatarUri: 'https://source.unsplash.com/random/2',
      comments: '12',
      likes: '23',
      name: 'Mr. Sam',
      views: '22',
      liked: true,
      mediaAspectRatio: 5 / 4,
      timestamp: '2 hrs ago',
      text: 'Reach for the clouds',
      id: '1',
      location: 'profile',
      ...actions,
    },
    {
      author: {
        profilePictureUrl: 'https://source.unsplash.com/random/20',
        username: 'X',
      },
      avatarUri: 'https://source.unsplash.com/random/6',
      comments: '12',
      likes: '23',
      name: 'Andrew Haul',
      views: '22',
      liked: true,
      mediaAspectRatio: 4 / 2,
      timestamp: '2 hrs ago',
      text: 'Reach for the clouds',
      id: '2',
      location: 'profile',
      media: [
        {uri: 'https://source.unsplash.com/random/23', type: 'image/png'},
        {uri: 'https://source.unsplash.com/random/24', type: 'image/png'},
      ],
      ...actions,
    },
    {
      author: {
        profilePictureUrl: 'https://source.unsplash.com/random/20',
        username: 'X',
      },
      avatarUri: 'https://source.unsplash.com/random/50',
      comments: '12',
      likes: '23',
      name: 'Andrew Haul',
      views: '22',
      liked: true,
      mediaAspectRatio: 3 / 2,
      timestamp: '2 hrs ago',
      id: '3',
      location: 'profile',
      media: [
        {uri: 'https://source.unsplash.com/random/26', type: 'image/png'},
        {uri: 'https://source.unsplash.com/random/27', type: 'image/png'},
      ],
      ...actions,
    },
    {
      author: {
        profilePictureUrl: 'https://source.unsplash.com/random/20',
        username: 'X',
      },
      avatarUri: 'https://source.unsplash.com/random/20',
      comments: '120',
      likes: '222k',
      name: 'Nathaniel Ross',
      views: '22k',
      liked: true,
      mediaAspectRatio: 5 / 3,
      timestamp: '2 hrs ago',
      text: 'Reach for the clouds',
      bookmarked: true,
      id: '4',
      location: 'profile',
      media: [
        {uri: 'https://source.unsplash.com/random/15', type: 'image/png'},
        {uri: 'https://source.unsplash.com/random/16', type: 'image/png'},
        {uri: 'https://source.unsplash.com/random/17', type: 'image/png'},
      ],
      ...actions,
    },
    {
      author: {
        profilePictureUrl: 'https://source.unsplash.com/random/20',
        username: 'X',
      },
      id: '5s',
      location: 'profile',
      avatarUri: 'https://source.unsplash.com/random/1',
      comments: '12',
      likes: '23',
      name: 'Mr. Sam',
      views: '22',
      liked: true,
      mediaAspectRatio: 1,
      timestamp: '2 hrs ago',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus non orci vitae vulputate. Mauris et posuere est. Nullam sed nibh ut mi eleifend ultricies. Cras a finibus odio. Fusce euismod nibh mauris, nec condimentum tortor pharetra nec. Etiam faucibus molestie finibus. Suspendisse vulputate venenatis pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pretium vitae ante condimentum fermentum. Nunc lobortis tortor in nibh accumsan ornare. Nunc blandit euismod mauris, sed cursus lectus vehicula a. Maecenas elementum auctor augue ut semper. Sed eget varius magna, sit amet porttitor massa. Suspendisse potenti. Sed dignissim volutpat nulla, vitae mollis nisl molestie non. Aenean eu massa leo. Vestibulum metus nisl, dictum faucibus convallis vel, condimentum et enim. Curabitur sit amet dui sit amet diam volutpat mollis at id mi. Curabitur faucibus massa a elit congue, id pulvinar diam cursus. Integer nec odio ipsum. Etiam enim velit, elementum eu aliquam vitae, sollicitudin et nunc. Nulla porttitor, erat euismod bibendum faucibus, velit erat tristique dui, in sagittis sem velit vitae arcu. Donec convallis nulla nibh, ut condimentum nisl cursus ac. Sed ac pretium mauris. Sed vitae bibendum quam, ac pellentesque libero. Curabitur in commodo nunc. Maecenas viverra sem nibh, sodales volutpat erat interdum at. Curabitur a nulla et libero condimentum condimentum. Maecenas auctor, ex vel pharetra euismod, tellus odio accumsan erat, et ornare nisl metus eu erat. Morbi posuere eleifend facilisis. Vivamus condimentum imperdiet velit, a lacinia dui consectetur a.',
      ...actions,
    },
  ];
};
