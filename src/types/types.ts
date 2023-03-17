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