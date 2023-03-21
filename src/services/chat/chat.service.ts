
import { IChat } from '@/types/types';
import { BaseService } from '../base.service';

class ChatService extends BaseService {

  constructor() {
    super('chat')
  }

  async getMessagesFormChat(chatId: string, limit?: string, skip?: string) {
    try {
      const response = await this.instance<IChat>({
        url: `/${chatId}?${limit && 'limit=' + limit}&${skip && 'skip=' + skip}`,
        method: 'GET',
      })
      return response.data
    } catch (error) {

    }
  }


}

export default new ChatService()