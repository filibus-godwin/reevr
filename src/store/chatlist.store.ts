import create from 'zustand';

type Chat = {
  id: string;
  username: string;
  lastMessage: string;
  lastMessageStatus: string;
  lastMessageTimestamp: Date;
};

type Store = {};
export const useChatListStore = create((set, get) => ({chats: []}));
