import axios from 'axios';
import { Dispatch, SetStateAction } from 'react';
import { getErrorCode } from '.';
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
  const { data } = await axios.post(`auth/signup`, {
    user: {
      name: userName,
      email: email,
      password: password,
      studentID: studentID,
      grade: grade,
      major: major,
    },
  });
  if (data) {
    submitFunc();
  }
  return data;
}

export async function postMailReqAPI({
  email,
  setWarningCode,
  warningCode,
}: {
  email: string;
  setWarningCode: Dispatch<SetStateAction<RegisterWarningProps>>;
  warningCode: RegisterWarningProps;
}) {
  try {
    const { data } = await axios.post(`auth/mail/req`, {
      email: email,
    });
    if (data) {
      warningCode.emailWarningCode = 'emailAccept';
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
      warningCode.codeWarningCode = 'acceptCode';
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
