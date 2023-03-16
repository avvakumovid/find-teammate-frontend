
import { BaseService } from '../base.service';
import { User } from './../../context/AuthContext';

class UserService extends BaseService {

  constructor() {
    super('user')
  }

  async getProfile() {
    try {
      const response = await this.instance<User>({
        url: 'profile',
        method: 'GET'
      })
      return response.data
    } catch (error) {

    }
  }

}

export default new UserService()