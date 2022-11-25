import React from 'react';
import styled, { css } from 'styled-components';
import { getHeightPixel, getWidthPixel } from '../../utils/responsive';

import { palette, PaletteKeyTypes } from '../../constants/palette';
import NotoText from '../Text/NotoText';

export default function CategoryButton({
  text,
  width,
  isSelected,
  onClick,
}: {
  text: string;
  width: string;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <ContainerStyled
      width={width}
      backgroundColor={isSelected ? palette.crimson_02 : palette.white}
      borderColor={isSelected ? palette.none : palette.gray_03}
      onClick={onClick}
    >
      <NotoText fontSize={getWidthPixel(14)} fontColor={isSelected ? palette.white : palette.gray_01}>
        {text}
      </NotoText>
    </ContainerStyled>
  );
}

const ContainerStyled = styled.button<{
  width: string;
  backgroundColor: PaletteKeyTypes;
  borderColor: PaletteKeyTypes;
}>`
  ${({ width = getWidthPixel(129), backgroundColor = palette.white, borderColor }) => css`
    width: ${width};
    border: 1px solid ${borderColor};
    background-color: ${backgroundColor};
  `}
  height: ${getHeightPixel(44)};
  border-radius: ${getHeightPixel(30)};
`;
