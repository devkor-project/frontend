import { getWidthPixel } from './responsive';

export function getButtonWidthList(list: string[], width: number) {
  const totalWidth = width - (list.length - 1) * 8;
  let totalLength = 0;
  const widthArr: string[] = [];
  list.forEach(text => {
    totalLength += text.length + 2;
  });
  list.forEach(text => {
    widthArr.push(getWidthPixel(totalWidth * ((text.length + 2) / totalLength)));
  });
  return widthArr;
}

export function getButtonList(list: string[], width: number) {
  const UNIT = 14;
  const resultArr: string[][] = [[]];
  let lengthSum = 0;
  list.forEach(text => {
    if (lengthSum + (text.length + 2) * UNIT <= width) {
      lengthSum += (text.length + 2) * UNIT;
      resultArr[resultArr.length - 1].push(text);
    } else {
      lengthSum = (text.length + 2) * UNIT;
      resultArr.push([]);
      resultArr[resultArr.length - 1].push(text);
    }
  });
  return resultArr;
}
