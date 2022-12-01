import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import { DropDownInputProps } from '../../constants/types';
import { palette } from '../../constants/palette';
import { getHeightPixel, getPixelToPixel, getWidthPixel, HEIGHT, WIDTH } from '../../utils/responsive';
import NotoText from '../Text/NotoText';
import { ReactComponent as Arrow_Icon } from '../../assets/button/top_arrow.svg';
import DropDown from './DropDown';

function DropDownInput({
  width,
  height,
  fontSize,
  fontWeight,
  selected,
  setFunc,
  list,
  dividerWidth,
  suffix,
}: DropDownInputProps) {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <div>
      <ContainerStyled width={width} height={height} onClick={() => setVisible(true)} onBlur={() => setVisible(false)}>
        <TextStyled>
          <NotoText fontSize={fontSize} fontWeight={fontWeight}>
            {list[selected]}
            {suffix}
          </NotoText>
        </TextStyled>
        <ButtonStyled>
          <IconStyled />
        </ButtonStyled>
        {visible ? (
          <MarginStyled>
            <DropDown
              setVisible={setVisible}
              width={width}
              height={height}
              list={list}
              setFunc={setFunc}
              selected={selected}
              dividerWidth={dividerWidth}
              suffix={suffix}
            />
          </MarginStyled>
        ) : null}
      </ContainerStyled>
    </div>
  );
}

const MarginStyled = styled.div`
  margin-right: ${getWidthPixel(-2)};
`;

const ContainerStyled = styled.button<{ width: string; height: string }>`
  display: flex;
  ${({ width = getWidthPixel(357), height = getHeightPixel(47) }) => css`
    width: ${width};
    height: ${height};
    border-radius: ${height};
  `}
  border: ${getPixelToPixel(2)} solid ${palette.gray};
  background-color: ${palette.white};
  align-items: center;
`;

const TextStyled = styled.div`
  padding-left: ${getPixelToPixel(24)};
  display: flex;
  justify-content: left;
  flex: 0.8;
`;

const ButtonStyled = styled.div`
  display: flex;
  flex: 0.2;
  justify-content: right;
`;

const IconStyled = styled(Arrow_Icon)`
  width: ${getWidthPixel(14)};
  height: ${getWidthPixel(8)};
  margin-right: ${getWidthPixel(22)};
`;

export default DropDownInput;
