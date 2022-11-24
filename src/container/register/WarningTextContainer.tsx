import React from 'react';
import styled from 'styled-components';

import { ReactComponent as WarningIcon } from '../../assets/icon/warningInfo.svg';
import NotoText from '../../components/Text/NotoText';
import { palette } from '../../constants/palette';
import { getHeightPixel, getWidthPixel } from '../../utils/responsive';

export default function WarningTextContainer({ text }: { text: string }) {
  return (
    <ContainerStyled>
      <IconStyled />
      <NotoText fontColor={palette.crimson} fontSize={getWidthPixel(11)}>
        {text}
      </NotoText>
    </ContainerStyled>
  );
}

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: ${getWidthPixel(35)};
  margin-top: ${getHeightPixel(5)};
  margin-bottom: ${getHeightPixel(5)};
  align-items: center;
`;

const IconStyled = styled(WarningIcon)`
  width: ${getWidthPixel(12)};
  height: ${getWidthPixel(12)};
  margin-right: ${getWidthPixel(8)};
`;
