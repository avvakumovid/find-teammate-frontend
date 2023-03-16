export enum EnumLocalStorage {
  USER = 'user'
}

export enum EnumSecureStore {
  ACCESS_TOKEN = 'access_token',
}

export interface ITokens {
  access_token: string
}

export interface LoginBody {
  username: string
  password: string
}

export interface SighUpBody {
  username: string
  password: string
}