import React from 'react';
import styled from 'styled-components';
import CategoryButton from '../../components/Button/CategoryButton';
import { getButtonList, getButtonWidthList } from '../../utils';
import { getHeightPixel, getWidthPixel } from '../../utils/responsive';

export default function CategoryButtonContainer() {
  const tempArr = [
    '컴퓨터학과',
    '디자인조형학부',
    '학사일정',
    '장학금',
    '정보대학',
    '고려대학교',
    'KUPID 전체 공지사항',
    '내일',
    '2학기',
    '맛집',
    '사이버 국방학과',
    '데이터 과학과',
    '카페 안암동',
    '이런저런 데이터',
  ];
  const textArr = getButtonList(tempArr, 345);
  return (
    <ContainerStyled>
      {textArr.map((arr, index) => {
        const widthArr = getButtonWidthList(arr, 345);
        return (
          <RowStyled key={'layer' + index.toString()}>
            {arr.map((text, idx) => {
              return (
                <CategoryButton
                  text={text}
                  width={widthArr[idx]}
                  isSelected={false}
                  key={'layer' + index.toString() + '/' + idx.toString()}
                />
              );
            })}
          </RowStyled>
        );
      })}
    </ContainerStyled>
  );
}

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${getHeightPixel(16)};
`;

const RowStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: ${getWidthPixel(345)};
  margin-bottom: ${getHeightPixel(10)};
`;
