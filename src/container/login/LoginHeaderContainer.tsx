import React from 'react';
import NotoText from '../../components/Text/NotoText';
import { getHeightPixel, getPixelToPixel, getWidthPixel } from '../../utils/responsive';

import { ReactComponent as BackIcon } from '../../assets/button/left_arrow.svg';
import styled from 'styled-components';
import { palette } from '../../constants/palette';
import Blank from '../../components/Blank';

function LoginHeaderContainer({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <ContainerStyled>
      <NotoText fontSize={getPixelToPixel(32)} fontWeight={'Bold'}>
        {title}
      </NotoText>
      <Blank width={getWidthPixel(7.88)} />
      <div className="flex items-end">
        <NotoText fontSize={getPixelToPixel(12)} fontWeight={'500'} fontColor={palette.black}>
          {subtitle}
        </NotoText>
      </div>
    </ContainerStyled>
  );
}

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: ${getHeightPixel(75)};
  margin-left: ${getWidthPixel(49.13)};
`;

const ButtonStyled = styled.button`
  display: flex;
  width: ${getPixelToPixel(44)};
  height: ${getPixelToPixel(44)};
  align-items: center;
  justify-content: center;
`;

const BackStyled = styled(BackIcon)`
  width: ${getWidthPixel(14)};
  height: ${getWidthPixel(14)};
  margin-left: ${getWidthPixel(10)};
  margin-right: ${getWidthPixel(10)};
`;

export default LoginHeaderContainer;
