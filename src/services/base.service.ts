import axios from 'axios';
import { getAccessToken } from './auth/auth.helper';
import { toast } from 'react-toastify';

export class BaseService {

  readonly instance

  constructor(path: string) {
    this.instance = axios.create({
      baseURL: `${import.meta.env.VITE_API_URL}/${path}`,
      headers:
      {
        'Content-Type': 'application/json'
      }
    })

    this.instance.interceptors.request.use(async (config) => {
      const accessToken = await getAccessToken()

      if (config.headers && accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
      }

      return config
    })

    this.instance.interceptors.response.use(
      config => config,
      async error => {
        toast.error(error.response.data.message)
      }
    )

  }


}

