import { getWidthPixel } from './responsive';

export function getButtonWidthList(list: string[], width: number) {
  const totalWidth = width - list.length * 8;
  let totalLength = 0;
  const widthArr: string[] = [];
  list.forEach(text => {
    totalLength += text.length;
  });
  list.forEach(text => {
    widthArr.push(getWidthPixel(totalWidth * (text.length / totalLength)));
  });
  return widthArr;
}

export function getButtonList(list: string[], width: number) {
  const UNIT = 14;
  const resultArr: string[][] = [[]];
  let lengthSum = 0;
  list.forEach(text => {
    if (lengthSum + text.length * UNIT <= width) {
      lengthSum += text.length * UNIT;
      resultArr[resultArr.length - 1].push(text);
    } else {
      lengthSum = 0;
      resultArr.push([]);
      resultArr[resultArr.length - 1].push(text);
    }
  });
  return resultArr;
}
