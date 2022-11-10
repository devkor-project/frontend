import React from 'react';
import NotoText from '../../components/Text/NotoTextBordered';
import { getHeightPixel, getPixelToPixel, getWidthPixel } from '../../utils/responsive';
import styled from 'styled-components';
import { palette } from '../../constants/palette';
import Blank from '../../components/Blank';
import NotoTextBordered from '../../components/Text/NotoTextBordered';

function LoginHeaderContainer({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <ContainerStyled>
      <NotoText fontSize={getPixelToPixel(32)} fontWeight={'Bold'}>
        {title}
      </NotoText>
      <Blank width={getWidthPixel(7.88)} />
      <div className="flex items-end drop-shadow-3xl mb-[5px]">
        <NotoTextBordered
          fontSize={getPixelToPixel(12)}
          fontWeight={'700'}
          fontColor={palette.gray_02}
          borderWidth={getPixelToPixel(0.2)}
          borderColor={palette.gray_04}
        >
          {subtitle}
        </NotoTextBordered>
      </div>
    </ContainerStyled>
  );
}

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify: start;
  width: 100%;
  margin-top: ${getHeightPixel(75)};
  margin-left: ${getWidthPixel(49.13)};
`;

export default LoginHeaderContainer;
