import React from 'react';
import styled from 'styled-components';
import { PageStyled } from '../styles';

import error_icon from '../assets/icon/error.png';
import { getPixelToPixel, getWidthPixel, getHeightPixel } from '../utils/responsive';
import NotoText from '../components/Text/NotoText';
import { palette } from '../constants/palette';
import TextButton from '../components/Button/TextButton';
import { ERROR__PAGE__TEXT } from '../constants/text';
import Blank from '../components/Blank';
import { useNavigate } from 'react-router-dom';
import { ROUTER__URI } from '../constants';

export default function ErrorPage({ title, text }: { title?: string; text?: string }) {
  const navigate = useNavigate();
  return (
    <PageCenterStyled>
      <ImageStyled src={error_icon} />
      <NotoText fontSize={getPixelToPixel(22)} fontWeight={'bold'}>
        {title || ERROR__PAGE__TEXT.default.title[0]}
      </NotoText>
      <NotoText fontSize={getPixelToPixel(14)} fontColor={palette.gray_02}>
        {text || ERROR__PAGE__TEXT.default.text[0]}
      </NotoText>
      <Blank height={getHeightPixel(48)} />
      <TextButton
        text={ERROR__PAGE__TEXT.button.submit[0]}
        backgroundColor={palette.crimson}
        fontColor={palette.white}
        width={getWidthPixel(357)}
        height={getHeightPixel(47)}
        borderColor={palette.crimson}
        onClick={() => {
          navigate(ROUTER__URI.mainPage);
        }}
      />
      <Blank height={getHeightPixel(100)} />
    </PageCenterStyled>
  );
}

const PageCenterStyled = styled(PageStyled)`
  flex-direction: column;
  width: 100%;
  height: ${getHeightPixel(700)};
  overflow-y: scroll;
  align-items: center;
  background-color: white;
  border-radius: ${getWidthPixel(30)} ${getWidthPixel(30)} 0 0;
  margin-top: ${getHeightPixel(80)};
  justify-content: center;
`;

const ImageStyled = styled.img`
  width: ${getWidthPixel(112)};
  height: ${getWidthPixel(112)};
`;
