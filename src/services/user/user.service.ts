
import { IChat, IUser } from '@/types/types';
import { BaseService } from '../base.service';
import { IDislikeResponse, ILikeResponse } from './user.interface';

class UserService extends BaseService {

  constructor() {
    super('user')
  }

  async getProfile() {
    try {
      const response = await this.instance<IUser>({
        url: 'profile',
        method: 'GET'
      })
      return response.data
    } catch (error) {

    }
  }


  async getCandidates() {
    try {
      const response = await this.instance<IUser[]>({
        url: '',
        method: 'GET'
      })
      return response.data
    } catch (error) {

    }
  }

  async like(userId: string) {
    try {
      const response = await this.instance<ILikeResponse>({
        url: 'like',
        method: 'POST',
        data: {
          id: userId
        }
      })
      return response.data
    } catch (error) {

    }
  }


  async dislike(userId: string) {
    try {
      const response = await this.instance<IDislikeResponse>({
        url: 'dislike',
        method: 'POST',
        data: {
          id: userId
        }
      })
      return response.data
    } catch (error) {

    }
  }


  async getChats() {
    try {
      const response = await this.instance<IChat[]>({
        url: 'chats',
        method: 'GET',

      })
      return response.data
    } catch (error) {

    }
  }
}

export default new UserService()