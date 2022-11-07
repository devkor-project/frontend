import React from 'react';
import { ButtonProps, ButtonStyle } from '../../constants/types';
import { palette } from '../../constants/palette';
import { getHeightPixel, getWidthPixel, getPixelToPixel } from '../../utils/responsive';
import styled, { css } from 'styled-components';

function LoginTextButton({
  backgroundColor,
  fontColor,
  borderColor,
  text,
  fontWeight,
  fontSize,
  width,
  height,
  onClick,
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
  }) => css`
    background-color: ${backgroundColor};
    color: ${fontColor};
    border: ${getPixelToPixel(2)} solid ${borderColor};
    width: ${width};
    height: ${height};
    font-weight: ${fontWeight};
    font-size: ${fontSize};
    border-radius: ${height};
  `}
`;

export default LoginTextButton;
