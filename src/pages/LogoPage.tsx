import React from 'react';
import styled from 'styled-components';

import { ReactComponent as LogoIcon } from '../assets/image/main_logo.svg';
import { getHeightPixel, getWidthPixel } from '../utils/responsive';

export default function LogoPage() {
  return (
    <PageStyled>
      <ImageStyled />
    </PageStyled>
  );
}

const PageStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: ${getHeightPixel(182)};
`;

const ImageStyled = styled(LogoIcon)`
  width: ${getWidthPixel(382)};
  height: ${getWidthPixel(471)};
`;
