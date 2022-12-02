import React from 'react';
import styled from 'styled-components';
import { palette } from '../constants/palette';
import NotoText from '../components/Text/NotoText';
import { getPixelToPixel } from '../utils/responsive';

const RankDisplay = ({ rank: rank }: { rank: number }) => {
  if (rank === 1) {
    return (
      <RankStyled>
        <NotoText fontSize={getPixelToPixel(23)} fontColor={palette.pink}>
          {rank}
        </NotoText>
      </RankStyled>
    );
  } else {
    return (
      <RankStyled>
        <NotoText fontSize={getPixelToPixel(23)}>{rank}</NotoText>
      </RankStyled>
    );
  }
};

export default RankDisplay;

const RankStyled = styled.div`
  width: ${getPixelToPixel(50)};
  padding-top: ${getPixelToPixel(10)};
  padding-left: ${getPixelToPixel(34)};
`;
