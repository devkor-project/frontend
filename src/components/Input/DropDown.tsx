import React, { Dispatch, SetStateAction, useState } from 'react';
import styled, { css } from 'styled-components';
import { palette } from '../../constants/palette';
import { ButtonStyle } from '../../constants/types';
import { getHeightPixel, getPixelToNumber, getPixelToPixel, getWidthPixel } from '../../utils/responsive';

function DropDown({
  width,
  dividerWidth,
  height,
  list,
  selected,
  setFunc,
  setVisible,
}: {
  width: string;
  dividerWidth?: string;
  height: string;
  list: string[];
  selected: number;
  setFunc: Dispatch<SetStateAction<number>>;
  setVisible: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <PaddingStyled height={(getPixelToNumber(height) * (list.length - 0.9)).toString() + 'px'}>
      <ContainerStyled width={width} onBlur={() => setVisible(false)} onMouseDown={event => event.preventDefault()}>
        {list.map((content, index) => {
          return (
            <div key={content}>
              <ButtonStyled
                width={width}
                height={height}
                backgroundColor={palette.none}
                fontColor={palette.black}
                onMouseUp={() => {
                  setFunc(index);
                  setVisible(false);
                }}
              >
                {content}
              </ButtonStyled>
              <InnerContainerStyled>
                {index !== list.length - 1 ? <DividerStyled width={dividerWidth} /> : null}
              </InnerContainerStyled>
            </div>
          );
        })}
      </ContainerStyled>
    </PaddingStyled>
  );
}

const PaddingStyled = styled.div<{ height: string }>`
  ${({ height = getHeightPixel(47) }) => css`
    padding-bottom: ${height};
  `}
`;

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
  &:hover {
    background-color: ${palette.pink};
  }
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