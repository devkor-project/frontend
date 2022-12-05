import React from 'react';
import styled from 'styled-components';

import { ReactComponent as RightArrowIcon } from '../../assets/button/right_arrow.svg';
import { getHeightPixel, getWidthPixel } from '../../utils/responsive';
import Blank from '../Blank';
import NotoText from '../Text/NotoText';

export default function ListButton({ text, onClick }: { text: string; onClick: () => void }) {
  return (
    <ContainerStyled onClick={onClick}>
      <TextStyled>
        <NotoText fontSize={getWidthPixel(20)}>{text}</NotoText>
      </TextStyled>
      <IconStyled />
    </ContainerStyled>
  );
}

const ContainerStyled = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: ${getWidthPixel(405)};
  height: ${getHeightPixel(67)};
  justify-content: space-between;
`;

const IconStyled = styled(RightArrowIcon)`
  width: ${getWidthPixel(13)};
  height: ${getWidthPixel(19)};
  margin-right: ${getWidthPixel(24)};
`;

const TextStyled = styled.div`
  margin-left: ${getWidthPixel(24)};
`;
