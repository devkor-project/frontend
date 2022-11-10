import React from 'react';
import styled, { css } from 'styled-components';

import { InputPropsAdd } from '../../constants/types1';
import { palette } from '../../constants/palette';
import { getHeightPixel, getPixelToPixel, getWidthPixel } from '../../utils/responsive';

function IconTextInput({
  width,
  height,
  placeHolder,
  type,
  setFunc,
  fontSize,
  icon,
  onKeyDown,
  onFocus,
  onBlur,
}: InputPropsAdd<string>) {
  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    setFunc(e.currentTarget.value);
  }
  return (
    <ContainerStyled>
      <IconStyled height={height}>{icon}</IconStyled>
      <InputStyled
        width={width}
        height={height}
        fontSize={fontSize}
        onChange={handleChange}
        placeholder={placeHolder}
        type={type}
        onKeyDown={onKeyDown}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </ContainerStyled>
  );
}

const ContainerStyled = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
`;

const IconStyled = styled.div<{ height: string }>`
  ${({ height = getHeightPixel(47) }) => css`
    height: ${height};
  `}
  display: flex;
  position: absolute;
  left: ${getWidthPixel(24)};
  align-items: center;
`;

const InputStyled = styled.input<{ width: string; height: string; fontSize: string }>`
  ${({ width = getWidthPixel(357), height = getHeightPixel(47), fontSize = getPixelToPixel(16) }) => css`
    width: ${width};
    height: ${height};
    border-radius: ${height};
    font-size: ${fontSize};
  `}
  outline-color: ${palette.crimson};
  outline-width: 2px;
  padding-left: ${getPixelToPixel(62)};
  border: ${getPixelToPixel(2)} solid ${palette.gray};
  background-color: ${palette.white};
`;

export default IconTextInput;
