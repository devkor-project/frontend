import React from 'react';
import styled, { css } from 'styled-components';
import { getHeightPixel, getPixelToPixel, getWidthPixel } from '../../utils/responsive';
import { palette } from '../../constants/palette';
import { SearchInputProps } from '../../constants/types1';

const SearchContainer = ({ width, height, setFunc, fontSize, icon, placeHolder, searchFunc }: SearchInputProps) => {
  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    setFunc(e.currentTarget.value);
  }
  // rounded text input with search icon
  return (
    <ContainerStyled>
      <SearchTextStyled
        width={width}
        height={height}
        fontSize={fontSize}
        onChange={handleChange}
        placeholder={placeHolder}
      />
      <IconStyled
        height={height}
        onClick={() => {
          searchFunc();
          console.log('search');
        }}
      >
        {icon}
      </IconStyled>
    </ContainerStyled>
  );
};

export default SearchContainer;

const ContainerStyled = styled.div`
  // margin-top: ${getHeightPixel(24)};
  display: flex;
  flex-direction: row;
  position: relative;
  // margin-bottom: ${getHeightPixel(11)};
`;
const SearchTextStyled = styled.input<{ width: string; height: string; fontSize: string }>`
  ${({ width = getWidthPixel(357), height = getHeightPixel(47), fontSize = getPixelToPixel(14) }) => css`
    width: ${width};
    height: ${height};
    font-size: ${fontSize};
  `}
  padding-left: ${getPixelToPixel(29)};
  border-radius: ${getPixelToPixel(208)};
  padding-right: ${getPixelToPixel(50)};
  border: ${getPixelToPixel(2)} solid ${palette.gray_04};
  background-color: ${palette.white};
`;

const IconStyled = styled.div<{ height: string }>`
  ${({ height = getHeightPixel(21) }) => css`
    height: ${height};
  `}
  display: flex;
  position: absolute;
  right: ${getWidthPixel(21)};
  align-items: center;
`;
