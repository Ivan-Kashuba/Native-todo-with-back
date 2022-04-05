import { ConfigT } from '../types/types';
import HttpService from './http.service';

class UserService extends HttpService {
  // api/user/register(or login)
  async authorization(config: ConfigT) {
    const user = await this.post({ url: config.url, data: config.data });
    return user;
  }
}

const authService = new UserService();
export default authService;
