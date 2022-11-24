import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import CategoryButton from '../../components/Button/CategoryButton';
import { getButtonList, getButtonWidthList } from '../../utils';
import { getHeightPixel, getWidthPixel } from '../../utils/responsive';

export default function CategoryButtonContainer({
  categoryList,
  selectedList,
  setList,
}: {
  categoryList: string[];
  selectedList: string[];
  setList: Dispatch<SetStateAction<string[]>>;
}) {
  const textArr = getButtonList(categoryList, 345);
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

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${getHeightPixel(16)};
  overflow: scroll;
  height: ${getHeightPixel(410)};
`;

const RowStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: ${getWidthPixel(345)};
  margin-bottom: ${getHeightPixel(10)};
`;
