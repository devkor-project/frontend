import React from 'react';
import styled from 'styled-components';
import { palette } from '../../constants/palette';
import { getHeightPixel, getWidthPixel } from '../../utils/responsive';

import LogoIcon from '../../assets/icon/kudog_logo.png';
import NotoText from '../../components/Text/NotoText';
import { ReactComponent as Notification_Icon } from '../../assets/icon/notification.svg';

export default function TitleHeaderContainer({ title }: { title: string }) {
  return (
    <ContainerStyled>
      <LogoStyled src={LogoIcon} />
      <NotoText fontSize={getWidthPixel(19)} fontColor={palette.white}>
        {title}
      </NotoText>
      <BellIconStyled />
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

const BellIconStyled = styled(Notification_Icon)`
  width: ${getWidthPixel(16)};
  height: ${getWidthPixel(22)};
  position: absolute;
  margin-left: ${getWidthPixel(365)};
  margin-top: ${getHeightPixel(2)};
`;
