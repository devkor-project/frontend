import axios from 'axios';
import { Cookies, useCookies } from 'react-cookie';
import { TokenProps } from '../constants/types';
import { SetToken } from '../reducers/auth';
import { store } from '../store';

// Use this when you call api
export async function isExpired(state: any) {
  const { payload } = state;
  const { expiredTime } = payload;
  const diffTime = new Date(Date.now()).getTime() - new Date(expiredTime).getTime();
  const refreshToken = useCookies(['refreshToken'])[0].refreshToken;

  if (diffTime < 10000000) {
    axios.defaults.headers.common['x-auth-token'] = refreshToken;
    const newAccessToken = await axios.post('https:/www.kudog.email/auth/token');

    const expiredTime = await new Date(Date.now() + 1000 * 60 * 30);
    store.dispatch({ type: SetToken, payload: { newAccessToken, expiredTime } });
  }
}

export async function refreshAccessToken(accessToken: any, refreshToken: any) {
  const diffTime = new Date(Date.now()).getTime() - new Date(accessToken.expiredTime).getTime();

  if (diffTime < 10000000 || !accessToken.payload.accessToken) {
    axios.defaults.headers.common['x-auth-token'] = refreshToken;
    const newAccessToken = await axios.post('https:/www.kudog.email/auth/token');

    const expiredTime = await new Date(Date.now() + 1000 * 60 * 30);
    store.dispatch({ type: SetToken, payload: { newAccessToken, expiredTime } });
  }
}
