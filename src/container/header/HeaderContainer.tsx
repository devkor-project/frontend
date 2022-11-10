import React from 'react';
import NotoText from '../../components/Text/NotoTextBordered';
import { getHeightPixel, getPixelToPixel, getWidthPixel } from '../../utils/responsive';

import { ReactComponent as BackIcon } from '../../assets/button/left_arrow.svg';
import styled from 'styled-components';

function HeaderContainer({ title }: { title: string }) {
  return (
    <ContainerStyled>
      <ButtonStyled>
        <BackStyled />
      </ButtonStyled>
      <NotoText fontSize={getPixelToPixel(32)} fontWeight={'Bold'}>
        {title}
      </NotoText>
    </ContainerStyled>
  );
}

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: ${getWidthPixel(38)};
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

export default HeaderContainer;
