
import { BaseService } from './../base.service';
import { ITokens, LoginBody, SighUpBody } from '@/services/auth/auth.interface';
import { saveToStorage } from './auth.helper';
class AuthService extends BaseService {

  constructor() {
    super('auth')
  }

  async login(data: LoginBody) {
    try {
      const response = await this.instance<ITokens>({
        url: 'login',
        method: 'POST',
        data
      })
      saveToStorage(response.data.access_token)
      return response.data
    } catch (error) {

    }
  }


  async singUp(data: SighUpBody): Promise<ITokens> {

    const response = await this.instance<ITokens>({
      url: 'singup',
      method: 'POST',
      data
    })
    return response.data
  }

}

export default new AuthService()