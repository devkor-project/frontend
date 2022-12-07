import axios from 'axios';
import { BASE__URL } from '../constants';
import jsonwebtoken from 'jsonwebtoken';
const { sign, decode, verify } = jsonwebtoken;

export async function postLoginAPI({ email, password }: { email: string; password: string }) {
  console.log(email, password);
  const { data } = await axios.post(`auth/login`, {
    email: email,
    password: password,
  });
  console.log(data);

  // sign.({
  //   data:
  // })
}
