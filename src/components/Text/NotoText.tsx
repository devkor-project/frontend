import React from 'react';
import styled, { css } from 'styled-components';
import { TextProps, TextStyle } from '../../constants/types';
import { palette } from '../../constants/palette';
import { getPixelToPixel } from '../../utils/responsive';

function NotoText({ children, fontColor, fontSize, fontWeight }: TextProps) {
  return (
    <TextStyled fontColor={fontColor} fontSize={fontSize} fontWeight={fontWeight}>
      {children}
    </TextStyled>
  );
}

const TextStyled = styled.div<TextStyle>`
  ${({ fontColor = palette.black, fontSize = getPixelToPixel(16), fontWeight = '500' }) => css`
    font-size: ${fontSize};
    color: ${fontColor};
    font-weight: ${fontWeight};
  `}
`;
export default NotoText;
