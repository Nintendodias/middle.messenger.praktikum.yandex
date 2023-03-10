export interface IActiveChat {
  id: number;
  token: string;
}

export interface IMessages {
  text?: string;
  date?: string;
  isSelf?: string;
}

export interface IChats {
  id?: number;
  name: string;
  avatar: string;
  date: string;
  isUnreadCount: string;
  lastMsg: string;
  unreadMsg: number;
}

export interface IState {
  activeChat?: IActiveChat;
  messages?: Array<IMessages>;
  userId?: {
    id?: number;
  };
  chats?: Array<IChats>;
  [key: string]: any;
}
