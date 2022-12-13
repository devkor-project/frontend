import { AxiosError } from 'axios';
import { CategoryDataProps, MajorProps, RegisterWarningProps } from '../constants/types';
import { SetToken } from '../reducers/auth';
import { store } from '../store';
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
      //getWidthPixel(totalWidth * ((category.categoryName.length + category.provider.length + 2) / totalLength))
      getWidthPixel((category.categoryName.length + category.provider.length + 2) * 14)
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
  console.log(errorCode);
  const schoolEmailRegex = new RegExp('.*@korea.ac.kr$');
  const emailRegex = new RegExp('.*@.*');
  const modifiedErrorCode = { ...errorCode };
  if (email !== '' && !schoolEmailRegex.test(email)) {
    modifiedErrorCode.emailWarningCode = 'univEmail';
  } else {
    if (errorCode.emailWarningCode === 'univEmail') {
      modifiedErrorCode.emailWarningCode = '';
    }
  }
  if (password !== '' && repeatPassword !== '' && password !== repeatPassword) {
    modifiedErrorCode.repeatWarningCode = 'wrongPassword';
  } else {
    if (password !== '' && repeatPassword !== '') {
      modifiedErrorCode.repeatWarningCode = 'accept';
    } else {
      modifiedErrorCode.repeatWarningCode = '';
    }
  }
  if (!checkPasswordPattern(password)) {
    modifiedErrorCode.formatWarningCode = 'wrongFormat';
  } else {
    if (password !== '') {
      modifiedErrorCode.formatWarningCode = 'accept';
    } else {
      modifiedErrorCode.formatWarningCode = '';
    }
  }
  if (subscribeEmail != '' && !emailRegex.test(subscribeEmail)) {
    modifiedErrorCode.receiveEmailWarningCode = 'wrongReceiveEmail';
  } else {
    if (subscribeEmail !== '') {
      modifiedErrorCode.receiveEmailWarningCode = 'accept';
    } else {
      modifiedErrorCode.receiveEmailWarningCode = '';
    }
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

export function getCategoryIdList(list: CategoryDataProps[]) {
  const idList: number[] = [];
  list.forEach(category => idList.push(category.categoryId));
  return idList;
}

export function getCategoryDiff(initialList: CategoryDataProps[], selectedList: CategoryDataProps[]) {
  const removeCatIds: number[] = [];
  const subscribeCatIds: number[] = [];
  selectedList.forEach(category => {
    if (!initialList.includes(category)) {
      subscribeCatIds.push(category.categoryId);
    }
  });
  initialList.forEach(category => {
    if (!selectedList.includes(category)) {
      removeCatIds.push(category.categoryId);
    }
  });
  return { removeCatIds: removeCatIds, subscribeCatIds: subscribeCatIds };
}

export function isSelectedCategory(category: CategoryDataProps, selectedList: CategoryDataProps[]) {
  let result = false;
  selectedList.forEach(cat => {
    if (isSameCategory(cat, category)) {
      result = true;
    }
  });
  return result;
}

export function isSameCategory(firstCategory: CategoryDataProps, secondCategory: CategoryDataProps) {
  return (
    firstCategory.categoryId === secondCategory.categoryId &&
    firstCategory.categoryName === secondCategory.categoryName &&
    firstCategory.provider === secondCategory.provider
  );
}

export function logoutUser(removeCookie: () => void) {
  removeCookie();
  store.dispatch({ type: SetToken, payload: { accessToken: null, expiredTime: null } });
}

export function isRegisterAble(warningCode: RegisterWarningProps) {
  if (
    warningCode.codeWarningCode === 'accept' &&
    (warningCode.emailWarningCode === 'emailSent' ||
      warningCode.emailWarningCode === 'authenticatedEmail' ||
      warningCode.emailWarningCode === 'accept') &&
    warningCode.formatWarningCode === 'accept' &&
    warningCode.receiveEmailWarningCode === 'accept' &&
    warningCode.repeatWarningCode === 'accept'
  ) {
    return true;
  }
  return false;
}

export function getMajorStringList(list: MajorProps[]) {
  const stringList: string[] = [];
  list.forEach(major => stringList.push(major.majorName));
  return stringList;
}
