import axios from 'axios';
import { useCookies } from 'react-cookie';
import { BASE__URL } from '../constants';
import { SetToken } from '../reducers/auth';
import { store } from '../store';

// Use this when you call api
// removeCookie is react useCookies hook
export async function isExpired(state: any, removeCookie: any) {
  const { payload } = state;
  const { expiredTime } = payload;
  console.log('expiredTime', expiredTime);

  const diffTime = new Date(expiredTime).getTime() - new Date(Date.now()).getTime();
  console.log('diffTime', diffTime);

  if (diffTime < 6000 || !payload.accessToken) {
    const res = await axios.post(`auth/token`);
    // refreshToken 인증에 실패하면 refreshToken(cookie), accessToken(redux store) 삭제 후 로그인 페이지로 이동
    if (res.status !== 200) {
      console.log('bye');

      removeCookie('refreshToken', { path: '/' });
      store.dispatch({ type: SetToken, payload: { accessToken: null, expiredTime: null } });
    } else {
      const accessToken = res.data.data;
      const expiredTime = await new Date(Date.now() + 1000 * 60 * 30);
      store.dispatch({ type: SetToken, payload: { accessToken, expiredTime } });
    }
    // console.log('newAccessToken', res.data.data);
  }
}
