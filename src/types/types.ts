export interface IUser {
  _id: string;
  username: string;
  pictures: string[];
  birthday: Date;
  games: IGames[];
}


export interface IGames {
  _id: string;
  name: string;
  picture: string;
}