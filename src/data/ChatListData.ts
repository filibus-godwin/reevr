import React from 'react';
import {Conversation} from '../components/message/Conversation';

export const ChatListData: React.ComponentProps<typeof Conversation>[] = [
  {
    name: 'Nami',
    avatarUri: 'https://source.unsplash.com/random/2',
    status: 'sent',
    preview:
      'Aenean egestas arcu ut augue tempus gravida Nam non elit pretium, venenatis diam non, condimentum ligula.',
  },
  {
    name: 'Monkey D. Luffy',
    avatarUri: 'https://source.unsplash.com/random/22?onepiece,luffy',
    status: 'delivered',
    preview: 'Pirate king',
  },
  {
    name: 'Roronoa Zorro',
    avatarUri: 'https://source.unsplash.com/random/3',
    status: 'delivered',
    preview: 'Venenatis diam non, condimentum ligula',
  },
];
