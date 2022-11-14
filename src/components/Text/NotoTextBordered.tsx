import React from 'react';
import styled, { css } from 'styled-components';
import { palette } from '../../constants/palette';
import { TextProps, TextStyle } from '../../constants/types1';
import { getPixelToPixel } from '../../utils/responsive';

function NotoTextBordered({ children, fontColor, fontSize, fontWeight, borderColor, borderWidth }: TextProps) {
  return (
    <TextStyled
      fontColor={fontColor}
      fontSize={fontSize}
      fontWeight={fontWeight}
      borderColor={borderColor}
      borderWidth={borderWidth}
    >
      {children}
    </TextStyled>
  );
}

const TextStyled = styled.div<TextStyle>`
  ${({
    fontColor = palette.black,
    fontSize = getPixelToPixel(16),
    fontWeight = 'bold',
    borderColor = palette.white,
    borderWidth = getPixelToPixel(0),
  }) => css`
    font-size: ${fontSize};
    color: ${fontColor};
    font-weight: ${fontWeight};
    text-shadow: -${borderWidth} 0 ${borderColor}, 0 ${borderWidth} ${borderColor}, ${borderWidth} 0 ${borderColor},
      0 -${borderWidth} ${borderColor};
  `}
`;
export default NotoTextBordered;
