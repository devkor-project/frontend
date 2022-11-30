import axios from 'axios';
import { Dispatch, SetStateAction } from 'react';
import { BASE__URL } from '../constants';
import { RegisterWarningProps } from '../constants/types';

export async function postSignupAPI({
  userName,
  email,
  password,
  studentID,
  grade,
  major,
  submitFunc,
}: {
  userName: string;
  email: string;
  password: string;
  studentID: number;
  grade: number;
  major: string;
  submitFunc: () => void;
}) {
  const { data } = await axios.post(`${BASE__URL}auth/signup`, {
    user: {
      name: userName,
      email: email,
      password: password,
      studentID: studentID,
      grade: grade,
      major: major,
    },
  });
  console.log('data: ', data);
  if (data) {
    submitFunc();
  }
  return data;
}

export async function postMailReqAPI({ email }: { email: string }) {
  const { data } = await axios.post(`${BASE__URL}auth/mail/req`, {
    email: email,
  });
  return data;
}

export async function postMailAPI({
  email,
  code,
  setWarningCode,
  warningCode,
}: {
  email: string;
  code: string;
  setWarningCode: Dispatch<SetStateAction<RegisterWarningProps>>;
  warningCode: RegisterWarningProps;
}) {
  try {
    const { data } = await axios.post(`${BASE__URL}auth/mail`, {
      email: email,
      code: code,
    });
    return data;
  } catch (error) {
    console.log(error);
    if (axios.isAxiosError(error) && error.response) {
      console.log(error.response);
    }
  }

  // if (data && data.success === false) {
  //   warningCode.codeWarningCode = 'wrongCode';
  //   setWarningCode(warningCode);
  //   console.log('asdf');
  // } else {
  //   console.log('this is else');
  // }
}
