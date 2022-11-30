import React from 'react';
import styled from 'styled-components';
import { palette } from '../../constants/palette';
import { getHeightPixel, getWidthPixel } from '../../utils/responsive';

import LogoIcon from '../../assets/icon/kudog_logo.png';
import NotoText from '../../components/Text/NotoText';
import NoticeButton from '../../components/Button/NoticeButton';

export default function TitleHeaderContainer({ title }: { title: string }) {
  return (
    <ContainerStyled>
      <LogoStyled src={LogoIcon} />
      <NotoText fontSize={getWidthPixel(19)} fontColor={palette.white}>
        {title}
      </NotoText>
      <NoticeButton />
    </ContainerStyled>
  );
}

const ContainerStyled = styled.div`
  background-color: ${palette.crimson};
  width: ${getWidthPixel(405)};
  height: ${getHeightPixel(90)};
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: ${getHeightPixel(20)};
`;

const LogoStyled = styled.img`
  width: ${getWidthPixel(58)};
  height: ${getWidthPixel(22)};
  position: absolute;
  margin-left: ${getWidthPixel(-300)};
  margin-top: ${getHeightPixel(2)};
`;
