import {Message} from '../components/message/message';

export const ConversationData: React.ComponentProps<typeof Message>[] = [
  {
    messageId: '1',
    senderId: '1',
    name: 'Sauti',
    timestamp: Date.now(),
    left: true,
    content: {
      text: 'This is the right path',
      replyText: 'Isum lipsus',
      replyMedia: {
        uri: 'https://source.unsplash.com/random/2?man,face',
        mimeType: 'image/png',
      },
    },
    replyMessageId: '1',
    isReply: true,
    recipientId: '2',
  },
  {
    messageId: '1',
    senderId: '1',
    name: 'Frederik Audi',
    timestamp: Date.now(),
    left: true,
    isReply: false,
    recipientId: '2',
    content: {
      text: '🙂🙂😃😃',
    },
  },
  {
    messageId: '1',
    senderId: '1',
    name: 'Frederik Audi',
    timestamp: Date.now(),
    left: true,
    isReply: false,
    recipientId: '2',
    content: {text: 'Vivamus sed 🙂🙂'},
  },
  {
    messageId: '1',
    senderId: '1',
    name: 'Frederik Audi',
    timestamp: Date.now(),
    left: true,
    isReply: false,
    recipientId: '2',
    content: {text: '🙂'},
  },
  {
    messageId: '1',
    senderId: '1',
    name: 'Frederik Audi',
    timestamp: Date.now(),
    recipientId: '2',
    left: true,
    isReply: false,
    content: {
      text: 'Lorem ipsum dolor 🙂',
      media: [
        {
          uri: 'https://source.unsplash.com/random/8?woman,face',
          mimeType: 'image/png',
        },
        {
          uri: 'https://source.unsplash.com/random/7?woman,face',
          mimeType: 'image/png',
        },
        {
          uri: 'https://source.unsplash.com/random/9?man,face',
          mimeType: 'image/png',
        },
        {
          uri: 'https://source.unsplash.com/random/5?man,face',
          mimeType: 'image/png',
        },
      ],
    },
  },
  {
    messageId: '1',
    senderId: '2',
    name: 'Frederik Audi',
    timestamp: Date.now(),
    recipientId: '2',
    isReply: false,
    content: {
      text: 'Lorem ipsum dolor 🙂',
      media: [
        {
          uri: 'https://source.unsplash.com/random/2?man,face',
          mimeType: 'image/png',
        },
      ],
    },
  },
  {
    messageId: '1',
    senderId: '2',
    name: 'Frederik Audi',
    timestamp: Date.now(),
    recipientId: '2',
    isReply: false,
    content: {
      text: 'Lorem ipsum dolor 🙂',
      media: [
        {
          uri: 'https://source.unsplash.com/random/8?man,face',
          mimeType: 'image/png',
        },
        {
          uri: 'https://source.unsplash.com/random/4?man,face',
          mimeType: 'image/png',
        },
      ],
    },
  },
  {
    messageId: '1',
    senderId: '1',
    name: 'Frederik Audi',
    timestamp: Date.now(),
    recipientId: '2',
    left: true,
    isReply: false,
    content: {
      text: 'Lorem ipsum dolor 🙂',
      media: [
        {
          uri: 'https://source.unsplash.com/random/7?woman,face',
          mimeType: 'image/png',
        },
        {
          uri: 'https://source.unsplash.com/random/2?man,face',
          mimeType: 'image/png',
        },
        {
          uri: 'https://source.unsplash.com/random/5?man,face',
          mimeType: 'image/png',
        },
      ],
    },
  },
  {
    messageId: '1',
    senderId: '1',
    name: 'Sauti',
    timestamp: Date.now(),
    left: true,
    recipientId: '',
    isReply: true,
    content: {
      text: 'This is the right path🙂',
      replyText: 'Isum lipsus',
      replyMedia: {
        uri: 'https://source.unsplash.com/random/2?man,face',
        mimeType: 'image/png',
      },
    },
  },
  {
    messageId: '1',
    senderId: '1',
    name: 'Sauti',
    timestamp: Date.now(),
    left: true,
    recipientId: '',
    isReply: false,
    content: {
      text: 'Aliquam pulvinar massa lectus, vitae ultricies ligula sodales aliquet. egestas in augue. Phasellus elit ante, vestibulum vel sollicitudin eu, porttitor ac elit. Aenean luctus nisl a ex scelerisque, eget ultrices nisl eleifend. Praesent lobortis lorem vitae feugiat laoreet. Donec sit amet quam interdum, ullamcorper neque in, sagittis arcu. Vestibulum sed eros ac est tincidunt luctus. Nunc euismod elementum gravida.',
    },
  },
  {
    messageId: '1',
    senderId: '2',
    name: 'Sauti',
    left: false,
    recipientId: '',
    timestamp: Date.now(),
    isReply: false,
    content: {
      text: 'Aliquam pulvinar massa lectus, vitae ultricies ligula sodales aliquet. egestas in augue. Phasellus elit ante, vestibulum vel sollicitudin eu, porttitor ac elit. Aenean luctus nisl a ex scelerisque, eget ultrices nisl eleifend. Praesent lobortis lorem vitae feugiat laoreet. Donec sit amet quam interdum, ullamcorper neque in, sagittis arcu. Vestibulum sed eros ac est tincidunt luctus. Nunc euismod elementum gravida.',
    },
  },
  // {
  //   messageId: '1',
  //   senderId: '2',
  //   name: 'Sauti',
  //   timestamp: '09:00',
  //   left: false,
  //   text: 'Aliquam pulvinar massa lectus, vitae ultricies ligula sodales aliquet. egestas in augue. Phasellus elit ante, vestibulum vel sollicitudin eu, porttitor ac elit. Aenean luctus nisl a ex scelerisque, eget ultrices nisl eleifend. Praesent lobortis lorem vitae feugiat laoreet. Donec sit amet quam interdum, ullamcorper neque in, sagittis arcu. Vestibulum sed eros ac est tincidunt luctus. Nunc euismod elementum gravida.',
  // },
];
