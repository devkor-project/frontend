import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getParseTimer } from '../../utils';
import { getPixelToPixel } from '../../utils/responsive';
import NotoText from '../Text/NotoText';

export default function Timer({ second }: { second: number }) {
  const [seconds, setSeconds] = useState(second);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds === 0) clearInterval(interval);
      else setSeconds(seconds - 1);
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <ContainerStyled>
      <NotoText fontSize={getPixelToPixel(14)} fontColor={'#DB4A4A'}>
        {getParseTimer(seconds).minute}:{getParseTimer(seconds).second}
      </NotoText>
    </ContainerStyled>
  );
}

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
