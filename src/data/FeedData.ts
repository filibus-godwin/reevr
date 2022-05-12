import React from 'react';
import {PostCard} from '../components/feed_card/index';
import {Listing} from '../components/Listing';
import {User} from '../components/User';

export type FeedDataType = (
  | {
      listings: React.ComponentProps<typeof Listing>[];
      userSuggestions: React.ComponentProps<typeof User>[];
    }
  | (React.ComponentProps<typeof PostCard> & any)
)[];

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

export const getFeedData = (actions: Actions): FeedDataType => {
  return [
    {
      listings: [
        {
          description:
            'Mauris et posuere est. Finibus non orci vitae vulputate. Mauris et posuere est. Nullam sed nibh ut mi eleifend ultricies. Cras a finibus odio.',
          title: 'Painter',
          type: 'Ad',
          onPressMoreInfo: () => {},
          amount: 'USD 350',
        },
        {
          description:
            'Donec finibus non orci vitae vulputate. Mauris et posuere est. Nullam sed nibh ut mi eleifend ultricies. Cras a finibus odio.',
          title: 'Battle Royale 01',
          type: 'Contest',
          onPressMoreInfo: () => {},
          amount: 'USD 150',
        },
        {
          description:
            'Donec finibus non orci vitae vulputate. Mauris et posuere est. Nullam sed nibh ut mi eleifend ultricies. Cras a finibus odio.',
          title: 'Battle Royale 02',
          type: 'Contest',
          onPressMoreInfo: () => {},
          amount: 'USD 250',
        },
      ],
    },
    {
      author: {
        profilePictureUrl: 'https://source.unsplash.com/random/1',
        username: 'Sammy X',
      },
      comments: '12',
      likes: '23',
      name: 'Mr. Sam',
      views: '22',
      liked: false,
      mediaAspectRatio: 1,
      timestamp: '2 hrs ago',
      text: '@mrsam Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec #finibus non orci vitae vulputate. Mauris et posuere est. Nullam sed nibh ut mi eleifend ultricies. Cras a finibus odio. Fusce euismod nibh mauris, nec condimentum tortor pharetra nec. Etiam faucibus molestie finibus. Suspendisse vulputate venenatis pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pretium vitae ante condimentum fermentum. Nunc lobortis tortor in nibh accumsan ornare. Nunc blandit euismod mauris, sed cursus lectus vehicula a. Maecenas elementum auctor augue ut semper. Sed eget varius magna, sit amet porttitor massa. Suspendisse potenti. Sed dignissim volutpat nulla, vitae mollis nisl molestie non. Aenean eu massa leo. Vestibulum metus nisl, dictum faucibus convallis vel, condimentum et enim. Curabitur sit amet dui sit amet diam volutpat mollis at id mi. Curabitur faucibus massa a elit congue, id pulvinar diam cursus. Integer nec odio ipsum. Etiam enim velit, elementum eu aliquam vitae, sollicitudin et nunc. Nulla porttitor, erat euismod bibendum faucibus, velit erat tristique dui, in sagittis sem velit vitae arcu. Donec convallis nulla nibh, ut condimentum nisl cursus ac. Sed ac pretium mauris. Sed vitae bibendum quam, ac pellentesque libero. Curabitur in commodo nunc. Maecenas viverra sem nibh, sodales volutpat erat interdum at. Curabitur a nulla et libero condimentum condimentum. Maecenas auctor, ex vel pharetra euismod, tellus odio accumsan erat, et ornare nisl metus eu erat. Morbi posuere eleifend facilisis. Vivamus condimentum imperdiet velit, a lacinia dui consectetur a.',
      sponsored: true,
      ...actions,
    },
    {
      author: {
        profilePictureUrl: 'https://source.unsplash.com/random/2',
        username: 'Benji X',
      },
      avatarUri: 'https://source.unsplash.com/random/2',
      comments: '12',
      likes: '23',
      name: 'Mr. Sam',
      views: '22',
      liked: true,
      mediaAspectRatio: 5 / 4,
      timestamp: '2 hrs ago',
      text: '@mrsam Donec @finibus non orci vitae vulputate. Mauris et posuere est. #Nullam sed nibh ut mi #eleifend ultricies. Cras a finibus odio. #Fusce euismod nibh mauris, nec condimentum tortor pharetra nec.',
      media: [
        {
          type: 'image/png',
          uri: 'https://source.unsplash.com/random/2?bay',
        },
        {
          type: 'image/png',
          uri: 'https://source.unsplash.com/random/2?beach',
        },
      ],
      ...actions,
    },

    {
      userSuggestions: [
        {name: 'Damian Newt', uri: 'https://source.unsplash.com/random/2'},
        {
          name: 'Viceroy Gunray',
          uri: 'https://source.unsplash.com/random/3?man,face',
        },
        {
          name: 'Anakin Skywalker',
          uri: 'https://source.unsplash.com/random/6?man,face',
        },
        {
          name: 'Trybe Larry',
          uri: 'https://source.unsplash.com/random/0?man,face',
        },
      ],
    },
    {
      author: {
        profilePictureUrl: 'https://source.unsplash.com/random/4',
        username: 'Kenny X',
      },
      avatarUri: 'https://source.unsplash.com/random/4',
      comments: '12',
      likes: '23',
      name: 'Mr. Sam',
      views: '22',
      liked: false,
      mediaAspectRatio: 5 / 4,
      timestamp: '2 hrs ago',
      text: 'Donec finibus non orci vitae vulputate. Mauris et posuere est. Nullam sed nibh ut mi eleifend ultricies. Cras a finibus odio. Fusce euismod nibh mauris.',
      media: [
        {type: 'image/png', uri: 'https://source.unsplash.com/random/21'},
      ],
      ...actions,
    },
    {
      author: {
        profilePictureUrl: 'https://source.unsplash.com/random/6',
        username: 'Linus X',
      },
      avatarUri: 'https://source.unsplash.com/random/6',
      comments: '12',
      likes: '23',
      name: 'Andrew Haul',
      views: '22',
      liked: true,
      mediaAspectRatio: 4 / 2,
      timestamp: '2 hrs ago',
      text: '#ReachForTheClouds',
      media: [
        {type: 'image/png', uri: 'https://source.unsplash.com/random/3'},
        {type: 'image/png', uri: 'https://source.unsplash.com/random/4'},
      ],
      ...actions,
    },
    {
      author: {
        profilePictureUrl: 'https://source.unsplash.com/random/50',
        username: 'Torvalds X',
      },
      avatarUri: 'https://source.unsplash.com/random/50',
      comments: '12',
      likes: '23',
      name: 'Andrew Haul',
      views: '22',
      liked: true,
      mediaAspectRatio: 3 / 2,
      timestamp: '2 hrs ago',
      media: [
        {type: 'image/png', uri: 'https://source.unsplash.com/random/6'},
        {type: 'image/png', uri: 'https://source.unsplash.com/random/7'},
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
      mediaAspectRatio: 5 / 4,
      timestamp: '2 hrs ago',
      text: '@lorem12 dolor, sit #amet consecteteur',
      bookmarked: true,
      media: [
        {type: 'image/png', uri: 'https://source.unsplash.com/random/5'},
        {type: 'image/png', uri: 'https://source.unsplash.com/random/8'},
        {type: 'image/png', uri: 'https://source.unsplash.com/random/9'},
      ],
      ...actions,
    },
  ];
};
