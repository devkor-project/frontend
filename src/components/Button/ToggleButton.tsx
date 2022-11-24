import React from 'react';
import styled, { css } from 'styled-components';
import { palette, PaletteKeyTypes } from '../../constants/palette';
import { getWidthPixel } from '../../utils/responsive';

export default function ToggleButton({ isToggle }: { isToggle: boolean }) {
  return (
    <ButtonStyled backgroundColor={isToggle ? palette.crimson : palette.gray_02}>
      <BallStyled isToggle={isToggle} />
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button<{ backgroundColor: PaletteKeyTypes }>`
  ${({ backgroundColor }) => css`
    background-color: ${backgroundColor};
  `}
  width: ${getWidthPixel(48)};
  height: ${getWidthPixel(28)};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${getWidthPixel(28)};
`;

const BallStyled = styled.div<{ isToggle: boolean }>`
  width: ${getWidthPixel(22)};
  height: ${getWidthPixel(22)};
  border-radius: ${getWidthPixel(22)};
  background-color: ${palette.white};
  ${({ isToggle }) => css`
    margin-left: ${isToggle ? '0px' : getWidthPixel(22)};
    margin-right: ${isToggle ? getWidthPixel(22) : '0px'};
  `}
`;
