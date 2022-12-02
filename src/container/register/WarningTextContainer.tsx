import React from 'react';
import styled from 'styled-components';

import { ReactComponent as WarningIcon } from '../../assets/icon/warningInfo.svg';
import { ReactComponent as AcceptIcon } from '../../assets/icon/acceptInfo.svg';
import NotoText from '../../components/Text/NotoText';
import { palette } from '../../constants/palette';
import { getHeightPixel, getWidthPixel } from '../../utils/responsive';

export default function WarningTextContainer({ text, acceptType }: { text: string; acceptType?: boolean }) {
  return (
    <ContainerStyled>
      {acceptType ? <AcceptIconStyled /> : <WarningIconStyled />}
      <NotoText fontColor={acceptType ? palette.green : palette.crimson} fontSize={getWidthPixel(11)}>
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

const WarningIconStyled = styled(WarningIcon)`
  width: ${getWidthPixel(12)};
  height: ${getWidthPixel(12)};
  margin-right: ${getWidthPixel(8)};
`;

const AcceptIconStyled = styled(AcceptIcon)`
  width: ${getWidthPixel(12)};
  height: ${getWidthPixel(12)};
  margin-right: ${getWidthPixel(8)};
`;
