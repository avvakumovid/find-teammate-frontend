export interface IUser {
  _id: string;
  username: string;
  pictures: string[];
  birthday: string;
  games: IGames[];
}


export interface IGames {
  _id: string;
  name: string;
  picture: string;
}

export enum LikeTypes {
  like = 'LIKE',
  match = 'MATCH',
  dislike = 'DISLIKE'
}

export interface IChat {
  _id: string;
  messages: IMessage[];
  participants: IUser[]
}

export interface IMessage {
  userId: string
  message: string
  date: string
}

export interface ISocketMessage {
  chatId: string;
  message: IMessage;
}
