import { AxiosError } from 'axios';
import { CategoryDataProps, RegisterWarningProps } from '../constants/types';
import { getWidthPixel } from './responsive';

export function getButtonWidthList(list: CategoryDataProps[], width: number) {
  const totalWidth = width - (list.length - 1) * 8;
  let totalLength = 0;
  const widthArr: string[] = [];
  list.forEach(category => {
    totalLength += category.categoryName.length + category.provider.length + 2;
  });
  list.forEach(category => {
    widthArr.push(
      getWidthPixel(totalWidth * ((category.categoryName.length + category.provider.length + 2) / totalLength))
    );
  });
  return widthArr;
}

export function getButtonList(list: CategoryDataProps[], width: number) {
  const UNIT = 14;
  const resultArr: CategoryDataProps[][] = [[]];
  let lengthSum = 0;
  list.forEach(category => {
    if (lengthSum + (category.categoryName.length + category.provider.length + 2) * UNIT <= width) {
      lengthSum += (category.categoryName.length + category.provider.length + 2) * UNIT;
      resultArr[resultArr.length - 1].push(category);
    } else {
      lengthSum = (category.categoryName.length + category.provider.length + 2) * UNIT;
      resultArr.push([]);
      resultArr[resultArr.length - 1].push(category);
    }
  });
  return resultArr;
}

export function getRegisterWarningCode(
  email: string,
  password: string,
  repeatPassword: string,
  errorCode: RegisterWarningProps,
  subscribeEmail: string
) {
  const schoolEmailRegex = new RegExp('.*@korea.ac.kr$');
  const emailRegex = new RegExp('.*@.*');
  const modifiedErrorCode = { ...errorCode };
  if (email !== '' && !schoolEmailRegex.test(email)) {
    modifiedErrorCode.emailWarningCode = 'univEmail';
  } else {
    modifiedErrorCode.emailWarningCode = '';
  }
  if (password !== '' && repeatPassword !== '' && password !== repeatPassword) {
    modifiedErrorCode.repeatWarningCode = 'wrongPassword';
  } else {
    modifiedErrorCode.repeatWarningCode = '';
  }
  if (!checkPasswordPattern(password)) {
    modifiedErrorCode.formatWarningCode = 'wrongFormat';
  } else {
    modifiedErrorCode.formatWarningCode = '';
  }
  if (subscribeEmail != '' && !emailRegex.test(subscribeEmail)) {
    modifiedErrorCode.receiveEmailWarningCode = 'wrongReceiveEmail';
  } else {
    modifiedErrorCode.receiveEmailWarningCode = '';
  }
  return modifiedErrorCode;
}

export function getErrorCode(error: AxiosError) {
  const errorData = error.response?.data as { error: { code: number; message: string } };
  return errorData.error.code;
}

export function getParseTimer(time: number) {
  const result = { minute: '', second: '' };
  if (time / 60 >= 10) {
    result.minute = Math.floor(time / 60).toString();
  } else {
    result.minute = '0' + Math.floor(time / 60).toString();
  }
  if (time % 60 >= 10) {
    result.second = (time % 60).toString();
  } else {
    result.second = '0' + (time % 60).toString();
  }

  return result;
}

function checkPasswordPattern(str: string) {
  const pattern1 = /[0-9]/;
  const pattern2 = /[a-zA-Z]/;
  const pattern3 = /[~!@#$%^&*()_+|<>?:{}]/;

  if (!pattern1.test(str) || !pattern2.test(str) || !pattern3.test(str) || str.length < 8) {
    return false;
  } else {
    return true;
  }
}
