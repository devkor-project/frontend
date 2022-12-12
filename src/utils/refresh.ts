import axios from 'axios';
import { withCookies } from 'react-cookie';
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
  console.log('is diffTime less then 6000', diffTime < 6000);

  // if (diffTime < 6000 || !payload.accessToken) {
  if (true) {
    console.log('refresh');
    try {
      // axios.defaults.withCredentials = true;
      const res = await axios.post('auth/token');
      console.log(res.status);
      // const accessToken = res.data.data;
      // const expiredTime = await new Date(Date.now() + 1000 * 60 * 30);
      // store.dispatch({ type: SetToken, payload: { accessToken, expiredTime } });
    } catch (err) {
      console.log(err);

      // removeCookie('refreshToken', { path: '/' });
      // store.dispatch({ type: SetToken, payload: { accessToken: null, expiredTime: null } });
    }
    // console.log(res.status);

    // refreshToken 인증에 실패하면 refreshToken(cookie), accessToken(redux store) 삭제 후 로그인 페이지로 이동
    // if (res.status !== 200) {
    // if (true) {
    //   console.log('bye');

    //   removeCookie('refreshToken', { path: '/' });
    //   store.dispatch({ type: SetToken, payload: { accessToken: null, expiredTime: null } });
    // } else {
    //   const accessToken = res.data.data;
    //   const expiredTime = await new Date(Date.now() + 1000 * 60 * 30);
    //   store.dispatch({ type: SetToken, payload: { accessToken, expiredTime } });
    // }
    // console.log('newAccessToken', res.data.data);
  }
}
