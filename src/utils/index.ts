import { CategoryDataProps, RegisterWarningProps } from '../constants/types';
import { getWidthPixel } from './responsive';

export function getButtonWidthList(list: CategoryDataProps[], width: number) {
  const totalWidth = width - (list.length - 1) * 8;
  let totalLength = 0;
  const widthArr: string[] = [];
  list.forEach(category => {
    totalLength += category.categoryName.length + 2;
  });
  list.forEach(category => {
    widthArr.push(getWidthPixel(totalWidth * ((category.categoryName.length + 2) / totalLength)));
  });
  return widthArr;
}

export function getButtonList(list: CategoryDataProps[], width: number) {
  const UNIT = 14;
  const resultArr: CategoryDataProps[][] = [[]];
  let lengthSum = 0;
  list.forEach(category => {
    if (lengthSum + (category.categoryName.length + 2) * UNIT <= width) {
      lengthSum += (category.categoryName.length + 2) * UNIT;
      resultArr[resultArr.length - 1].push(category);
    } else {
      lengthSum = (category.categoryName.length + 2) * UNIT;
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
  errorCode: RegisterWarningProps
) {
  const emailRegex = new RegExp('.*@korea.ac.kr');
  const modifiedErrorCode = { ...errorCode };
  if (email !== '' && !emailRegex.test(email)) {
    modifiedErrorCode.emailWarningCode = 'univEmail';
  } else {
    modifiedErrorCode.emailWarningCode = '';
  }
  if (password !== '' && repeatPassword !== '' && password !== repeatPassword) {
    modifiedErrorCode.repeatWarningCode = 'wrongPassword';
  } else {
    modifiedErrorCode.repeatWarningCode = '';
  }
  return modifiedErrorCode;
}

// const handleError = (error: RequestError) => {
//   const { message, extensions, description } = error;
//   const error_code = extensions?.code ?? error.error ?? 'unexpected error';
//   const error_message = message ?? description ?? extensions?.description ?? default_message;

//   const _error = Object.assign(new Error(error_message), {
//     code: error_code,
//   });
//   return _error;
// };
