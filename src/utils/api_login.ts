import axios from 'axios';
import { BASE__URL } from '../constants';

export async function postLoginAPI({ email, password }: { email: string; password: string }) {
  console.log(email, password);
  const { data } = await axios.post(`${BASE__URL}auth/login`, {
    email: email,
    password: password,
  });
  return data;
}
