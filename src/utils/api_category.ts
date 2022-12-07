import axios from 'axios';
import { Dispatch, SetStateAction } from 'react';
import { BASE__URL } from '../constants';
import { CategoryDataProps } from '../constants/types';

export async function getCategoryAPI({ setList }: { setList: Dispatch<SetStateAction<CategoryDataProps[]>> }) {
  const { data } = await axios.get(`category`);
  if (data) {
    setList(data.data);
  }
}

export async function getSubscribeCategoryAPI({ setList }: { setList: Dispatch<SetStateAction<CategoryDataProps[]>> }) {
  const { data } = await axios.get(`ategory/subscribe`);
  if (data) {
    setList(data.data);
  }
}
