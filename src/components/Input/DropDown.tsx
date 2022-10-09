import React, { Dispatch, SetStateAction } from 'react';
import styled, { css } from 'styled-components';
import { palette } from '../../constants/palette';
import { ButtonStyle } from '../../constants/types';
import { getHeightPixel, getPixelToPixel, getWidthPixel } from '../../utils/responsive';

function DropDown<T>({
  width,
  dividerWidth,
  height,
  list,
  selected,
  setFunc,
}: {
  width: string;
  dividerWidth?: string;
  height: string;
  list: string[];
  selected: T;
  setFunc: Dispatch<SetStateAction<T | number>>;
}) {
  return (
    <ContainerStyled width={width}>
      {list.map((content, index) => {
        return (
          <div key={content}>
            <ButtonStyled
              width={width}
              height={height}
              backgroundColor={index === selected ? palette.pink : palette.none}
              fontColor={index === selected ? palette.white : palette.black}
              onClick={() => setFunc(index)}
            >
              {content}
            </ButtonStyled>
            <InnerContainerStyled>
              {index !== content.length ? <DividerStyled width={dividerWidth} /> : null}
            </InnerContainerStyled>
          </div>
        );
      })}
    </ContainerStyled>
  );
}

const ContainerStyled = styled.div<{ width: string }>`
  ${({ width = getWidthPixel(174) }) => css`
    width: ${width};
    margin-left: -${width};
  `}
  position: relative;
  border: ${getPixelToPixel(2)} solid ${palette.gray};
  border-radius: ${getPixelToPixel(24)};
  background-color: ${palette.white};
  overflow: hidden;
  flex-direction: column-reverse;
`;

const InnerContainerStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ButtonStyled = styled.button<ButtonStyle>`
  ${({
    width = getWidthPixel(174),
    height = getHeightPixel(45),
    backgroundColor = palette.none,
    fontColor = palette.black,
  }) => css`
    width: ${width};
    height: ${height};
    background-color: ${backgroundColor};
    color: ${fontColor};
  `}
  font-size: ${getPixelToPixel(16)};
`;

const DividerStyled = styled.div<{ width?: string }>`
  ${({ width = getWidthPixel(140) }) => css`
    width: ${width};
  `}
  height: ${getPixelToPixel(1)};
  background-color: ${palette.gray};
`;

export default DropDown;
