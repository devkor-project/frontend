import axios from 'axios';
import { Dispatch, SetStateAction } from 'react';
import { getErrorCode } from '.';
import { BASE__URL } from '../constants';
import { MajorProps, RegisterWarningProps } from '../constants/types';
import { SetToken } from '../reducers/auth';
import { store } from '../store';

export async function postSignupAPI({
  userName,
  email,
  password,
  studentID,
  grade,
  major,
  receivingMail,
  submitFunc,
  setCookie,
}: {
  userName: string;
  email: string;
  password: string;
  studentID: number;
  grade: number;
  major: string;
  receivingMail: string;
  submitFunc: () => void;
  setCookie: (refreshToken: any) => void;
}) {
  const { data } = await axios.post(`auth/signup`, {
    user: {
      name: userName,
      email: email,
      password: password,
      studentID: studentID,
      grade: grade,
      major: major,
      receivingEmail: receivingMail,
    },
  });
  if (data) {
    const accessToken = data.data.accessToken;
    const refreshToken = data.data.refreshToken;
    setCookie(refreshToken);
    const expiredTime = await new Date(Date.now() + 1000 * 60 * 30);
    store.dispatch({ type: SetToken, payload: { accessToken, expiredTime } });
    submitFunc();
  }
  return data;
}

export async function postMailReqAPI({
  email,
  setWarningCode,
  warningCode,
  type = 'signup',
}: {
  email: string;
  setWarningCode: Dispatch<SetStateAction<RegisterWarningProps>>;
  warningCode: RegisterWarningProps;
  type?: 'signup' | 'findPwd';
}) {
  try {
    const { data } = await axios.post(`auth/mail/req`, {
      email: email,
      type: type,
    });
    if (data) {
      if (data.data === 'already authenticated') {
        warningCode.emailWarningCode = 'authenticatedEmail';
      } else {
        warningCode.emailWarningCode = 'emailSent';
      }
      setWarningCode({ ...warningCode });
    }
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (getErrorCode(error) === 2001) {
        warningCode.emailWarningCode = 'duplicateEmail';
        setWarningCode({ ...warningCode });
      }
    }
  }
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
    const { data } = await axios.post(`auth/mail`, {
      email: email,
      code: code,
    });
    if (data.success) {
      warningCode.codeWarningCode = 'accept';
      setWarningCode({ ...warningCode });
    } else {
      warningCode.codeWarningCode = 'wrongCode';
      setWarningCode({ ...warningCode });
    }
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      warningCode.codeWarningCode = 'wrongCode';
      setWarningCode({ ...warningCode });
    }
  }
}

export async function getMajorListAPI({ setList }: { setList: Dispatch<SetStateAction<MajorProps[]>> }) {
  const { data } = await axios.get(`major`);
  if (data) {
    setList(data.data);
  }
}
