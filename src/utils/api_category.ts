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
  const { data } = await axios.get(`category/subscribe`);
  if (data) {
    setList(data.data);
  }
}

export async function modifySubscribeCategoryAPI({
  removeCatIds,
  subscribeCatIds,
  submitFunc,
}: {
  removeCatIds: number[];
  subscribeCatIds: number[];
  submitFunc: () => void;
}) {
  const { data } = await axios.put(`category/subscribe/many`, {
    removeCatIds: removeCatIds,
    newCatIds: subscribeCatIds,
  });
  if (data) {
    submitFunc();
  }
}
