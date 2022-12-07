import axios from 'axios';
import { Dispatch, SetStateAction } from 'react';
import { getErrorCode } from '.';
import { BASE__URL } from '../constants';
import { UserDataAPIProps, UserDataProps } from '../constants/types';

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
