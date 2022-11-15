import React from 'react';
import styled, { css } from 'styled-components';

import { TextInputProps } from '../../constants/types';
import { palette } from '../../constants/palette';
import { getHeightPixel, getPixelToPixel, getWidthPixel } from '../../utils/responsive';

function TextInput({ width, height, placeHolder, type, setFunc, fontSize, fontWeight }: TextInputProps) {
  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    setFunc(e.currentTarget.value);
  }
  return (
    <InputStyled
      width={width}
      height={height}
      fontSize={fontSize}
      onChange={handleChange}
      placeholder={placeHolder}
      type={type}
      fontWeight={fontWeight || ''}
    />
  );
}

const InputStyled = styled.input<{ width: string; height: string; fontSize: string; fontWeight: string }>`
  ${({
    width = getWidthPixel(357),
    height = getHeightPixel(47),
    fontSize = getPixelToPixel(16),
    fontWeight = 'Medium',
  }) => css`
    width: ${width};
    height: ${height};
    border-radius: ${height};
    font-size: ${fontSize};
    font-weight: ${fontWeight};
  `}
  padding-left: ${getPixelToPixel(24)};
  border: ${getPixelToPixel(2)} solid ${palette.gray};
  background-color: ${palette.white};
`;

export default TextInput;
