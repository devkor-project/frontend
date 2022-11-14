import axios from 'axios';
import { BASE__URL } from '../constants';

export async function postSignupAPI({
  email,
  password,
  studentID,
  grade,
  major,
}: {
  email: string;
  password: string;
  studentID: number;
  grade: number;
  major: string;
}) {
  const { data } = await axios.post(`${BASE__URL}auth/signup`, {
    user: {
      email: email,
      password: password,
      studentID: studentID,
      grade: grade,
      major: major,
    },
  });
  return data;
}

export async function postMailReqAPI({ email }: { email: string }) {
  const { data } = await axios.post(`${BASE__URL}auth/mail/req`, {
    email: email,
  });
  return data;
}

export async function postMailAPI({ email, code }: { email: string; code: string }) {
  const { data } = await axios.post(`${BASE__URL}auth/mail`, {
    email: email,
    code: code,
  });
  return data;
}
