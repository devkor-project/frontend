import React from 'react';
import styled, { css } from 'styled-components';
import { getHeightPixel, getWidthPixel } from '../../utils/responsive';

import { palette, PaletteKeyTypes } from '../../constants/palette';
import NotoText from '../Text/NotoText';

export default function CategoryButton({
  text,
  width,
  isSelected,
}: {
  text: string;
  width: string;
  isSelected: boolean;
}) {
  return (
    <ContainerStyled width={width} backgroundColor={isSelected ? palette.crimson_02 : palette.crimson}>
      <NotoText fontSize={getWidthPixel(14)} fontColor={isSelected ? palette.white : palette.gray}>
        {text}
      </NotoText>
    </ContainerStyled>
  );
}

const ContainerStyled = styled.button<{ width: string; backgroundColor: PaletteKeyTypes }>`
  ${({ width = getWidthPixel(129), backgroundColor = palette.white }) => css`
    width: ${width};
    background-color: ${backgroundColor};
  `}
  height: ${getHeightPixel(44)};
`;
