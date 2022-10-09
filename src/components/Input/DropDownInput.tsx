import React from 'react';
import styled, { css } from 'styled-components';

import { InputProps } from '../../constants/types';
import { palette } from '../../constants/palette';
import { getHeightPixel, getPixelToPixel, getWidthPixel } from '../../utils/responsive';
import NotoText from '../Text/NotoText';
import { ReactComponent as Arrow_Icon } from '../../assets/button/top_arrow.svg';

function DropDownInput<T>({ width, height, text, fontSize, fontWeight, setFunc }: InputProps<T>) {
  return (
    <ContainerStyled width={width} height={height}>
      <TextStyled fontSize={fontSize} fontWeight={fontWeight || ''}>
        {text}
      </TextStyled>
      <IconStyled />
    </ContainerStyled>
  );
}

const ContainerStyled = styled.div<{ width: string; height: string }>`
  display: flex;
  flex-direction: row;
  ${({ width = getWidthPixel(357), height = getHeightPixel(47) }) => css`
    width: ${width};
    height: ${height};
    border-radius: ${height};
  `}
  border: ${getPixelToPixel(2)} solid ${palette.gray};
  background-color: ${palette.white};
  align-items: center;
  justify-content: right;
`;

const TextStyled = styled(NotoText)<{ fontSize: string; fontWeight: string }>`
  ${({ fontSize = getPixelToPixel(16), fontWeight = 'Medium' }) => css`
    font-size: ${fontSize};
    font-weight: ${fontWeight};
  `}
  padding-left: ${getPixelToPixel(24)};
`;

const IconStyled = styled(Arrow_Icon)`
  width: ${getWidthPixel(14)};
  height: ${getWidthPixel(8)};
  margin-left: ${getWidthPixel(22)};
  margin-right: ${getWidthPixel(22)};
`;

export default DropDownInput;
