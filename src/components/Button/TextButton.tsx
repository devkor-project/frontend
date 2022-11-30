import React from 'react';
import { ButtonProps, ButtonStyle } from '../../constants/types';
import { palette } from '../../constants/palette';
import { getHeightPixel, getWidthPixel, getPixelToPixel } from '../../utils/responsive';
import styled, { css } from 'styled-components';

function TextButton({
  backgroundColor,
  fontColor,
  borderColor,
  text,
  fontWeight,
  fontSize,
  width,
  height,
  onClick,
  hoverBackgroundColor,
  hoverFontColor,
}: ButtonProps) {
  return (
    <ButtonStyled
      backgroundColor={backgroundColor}
      fontColor={fontColor}
      borderColor={borderColor}
      width={width}
      height={height}
      fontWeight={fontWeight}
      fontSize={fontSize}
      onClick={onClick}
      hoverBackgroundColor={hoverBackgroundColor}
      hoverFontColor={hoverFontColor}
    >
      {text}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button<ButtonStyle>`
  ${({
    backgroundColor = palette.crimson,
    fontColor = palette.white,
    borderColor = palette.crimson,
    width = getWidthPixel(357),
    height = getHeightPixel(47),
    fontWeight = 'bold',
    fontSize = getPixelToPixel(18),
    hoverBackgroundColor,
    hoverFontColor,
  }) => css`
    background-color: ${backgroundColor};
    color: ${fontColor};
    border: ${getPixelToPixel(2)} solid ${borderColor};
    width: ${width};
    height: ${height};
    font-weight: ${fontWeight};
    font-size: ${fontSize};
    border-radius: ${height};
    &:hover {
      background-color: ${hoverBackgroundColor || backgroundColor};
      color: ${hoverFontColor || fontColor};
    }
  `}
`;

export default TextButton;
