
import { IChat } from '@/types/types';
import { BaseService } from '../base.service';

class ChatService extends BaseService {

  constructor() {
    super('chat')
  }

  async getMessagesFormChat(chatId: string, skip?: number, limit?: number,) {
    try {
      const response = await this.instance<IChat>({
        url: `/${chatId}?${limit !== undefined ? 'limit=' + limit + '&' : ''}${skip !== undefined ? 'skip=' + skip : ''}`,
        method: 'GET',
      })
      return response.data
    } catch (error) {

    }
  }


}

export default new ChatService()