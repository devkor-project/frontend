import axios from 'axios';
import { Dispatch, SetStateAction } from 'react';
import { getErrorCode } from '.';
import { BASE__URL } from '../constants';
import { AdminNoticeProps, UserDataAPIProps, UserDataProps } from '../constants/types';

export async function getUserDataAPI({ setData }: { setData: Dispatch<SetStateAction<UserDataProps>> }) {
  const { data } = await axios.get(`user/mypage`);
  if (data) {
    setData(data.data);
  }
  return data;
}

export async function modifyUserDataAPI({ submitFunc, ...userData }: UserDataAPIProps) {
  const { data } = await axios.put(`user`, {
    info: { ...userData },
  });
  if (data) {
    submitFunc();
  }
  return data;
}

export async function getAdminNotice({ setData }: { setData: Dispatch<SetStateAction<AdminNoticeProps[]>> }) {
  const { data } = await axios.get(`notices/admin`);
  if (data) {
    setData(data.data);
  }
  return data;
}

export async function modifyPasswordAPI({
  submitFunc,
  email,
  password,
}: {
  submitFunc: () => void;
  email: string;
  password: string;
}) {
  const { data } = await axios.post(`auth/password`, {
    email: email,
    password: password,
  });
  if (data) {
    submitFunc();
  }
  return data;
}
