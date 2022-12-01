import React from 'react';
import styled, { css } from 'styled-components';

import { TextInputProps } from '../../constants/types';
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
  text,
  disabled,
  defaultValue,
}: TextInputProps) {
  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    setFunc(e.currentTarget.value);
  }
  return (
    <ContainerStyled>
      {(text?.length || 0) == 0 ? <IconStyled height={height}>{icon}</IconStyled> : null}
      <InputStyled
        width={width}
        height={height}
        fontSize={fontSize}
        onChange={handleChange}
        placeholder={placeHolder}
        type={type}
        isEmpty={(text?.length || 0) == 0}
        disabled={disabled}
        defaultValue={defaultValue}
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

const InputStyled = styled.input<{ width: string; height: string; fontSize: string; isEmpty: boolean }>`
  ${({ width = getWidthPixel(357), height = getHeightPixel(47), fontSize = getPixelToPixel(16), isEmpty }) => css`
    width: ${width};
    height: ${height};
    border-radius: ${height};
    font-size: ${fontSize};
    padding-left: ${getPixelToPixel(isEmpty ? 46 : 24)};
  `}
  border: ${getPixelToPixel(2)} solid ${palette.gray};
  background-color: ${palette.white};
`;

export default IconTextInput;
