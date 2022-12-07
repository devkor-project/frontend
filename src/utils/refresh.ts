import axios from 'axios';
import { useCookies } from 'react-cookie';
import { BASE__URL } from '../constants';
import { SetToken } from '../reducers/auth';
import { store } from '../store';

// Use this when you call api
export async function isExpired(state: any) {
  const { payload } = state;
  const { expiredTime } = payload;
  console.log('expiredTime', expiredTime);

  const diffTime = new Date(expiredTime).getTime() - new Date(Date.now()).getTime();
  console.log('diffTime', diffTime);

  if (diffTime < 6000 || !payload.accessToken) {
    const res = await axios.post(`${BASE__URL}auth/token`);
    console.log('newAccessToken', res.data.data);
    const accessToken = res.data.data;
    // const expiredTime = await new Date(Date.now() + 1000 * 60 * 30);
    store.dispatch({ type: SetToken, payload: { accessToken, expiredTime } });
  }
}

export async function refreshAccessToken(accessToken: any, refreshToken: any) {
  const diffTime = new Date(Date.now()).getTime() - new Date(accessToken.expiredTime).getTime();

  if (diffTime < 10000000 || !accessToken.payload.accessToken) {
    axios.defaults.headers.common['x-auth-token'] = refreshToken;
    const newAccessToken = await axios.post(`${BASE__URL}auth/token`);

    const expiredTime = await new Date(Date.now() + 1000 * 60 * 30);
    store.dispatch({ type: SetToken, payload: { newAccessToken, expiredTime } });
  }
}
