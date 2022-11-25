import axios from 'axios';
import { Cookies, useCookies } from 'react-cookie';

export async function isExpired(state: any) {
  const { payload } = state;
  const { accessToken, expiredTime } = payload;
  const diffTime = new Date(Date.now()).getTime() - new Date(expiredTime).getTime();
  const refreshToken = useCookies(['refreshToken'])[0].refreshToken;
  console.log(refreshToken);

  if (true) {
    axios.defaults.headers.common['x-auth-token'] = refreshToken;
    const newAccessToken = await axios.post('https:/www.kudog.email/auth/token');
    console.log(newAccessToken);
  }
}
