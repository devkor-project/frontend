import React from 'react';
import { ReactComponent as NotScrapedText_Icon } from '../../assets/icon/notScrapedItemText.svg';
import imgNotScraped_Icon from '../../assets/icon/notScrapedItemImage.svg';
import { getHeightPixel, getPixelToPixel } from '../../utils/responsive';
import styled from 'styled-components';
import Blank from '../../components/Blank';

const NotScrapedContainer = () => {
  return (
    <ContainerStyled>
      <img src={imgNotScraped_Icon} width={getPixelToPixel(141)} height={getPixelToPixel(137)} />
      <NotScrapedText_Icon />
      <Blank height={getHeightPixel(100)} />
    </ContainerStyled>
  );
};

export default NotScrapedContainer;

const ContainerStyled = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
