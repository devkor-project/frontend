import React, { Dispatch, SetStateAction } from 'react';
import styled, { css } from 'styled-components';
import CategoryButton from '../../components/Button/CategoryButton';
import { getButtonList, getButtonWidthList } from '../../utils';
import { getHeightPixel, getWidthPixel } from '../../utils/responsive';

export default function CategoryButtonContainer({
  categoryList,
  selectedList,
  setList,
  height,
}: {
  categoryList: string[];
  selectedList: string[];
  setList: Dispatch<SetStateAction<string[]>>;
  height?: string;
}) {
  const textArr = getButtonList(categoryList, 345);
  return (
    <ContainerStyled height={height}>
      {textArr.map((arr, index) => {
        const widthArr = getButtonWidthList(arr, 345);
        return (
          <RowStyled key={'layer' + index.toString()}>
            {arr.map((text, idx) => {
              return (
                <CategoryButton
                  text={text}
                  width={widthArr[idx]}
                  isSelected={selectedList.includes(text)}
                  key={'layer' + index.toString() + '/' + idx.toString()}
                  onClick={() => {
                    setList([...selectedList, text]);
                  }}
                />
              );
            })}
          </RowStyled>
        );
      })}
    </ContainerStyled>
  );
}

const ContainerStyled = styled.div<{ height?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${getHeightPixel(16)};
  overflow: scroll;
  ${({ height = getHeightPixel(410) }) => css`
    height: ${height};
  `}
`;

const RowStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: ${getWidthPixel(345)};
  margin-bottom: ${getHeightPixel(10)};
`;
