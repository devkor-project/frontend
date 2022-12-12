import React from 'react';
import styled from 'styled-components';
import NotoText from '../../components/Text/NotoText';
import { AdminNoticeProps } from '../../constants/types';
import { getHeightPixel, getPixelToPixel, getWidthPixel } from '../../utils/responsive';
import { translateDatetime } from '../../utils/datetime';

export default function NoticeDetailContainer({ title, content, writer, createdAt }: AdminNoticeProps) {
  return (
    <ContainerStyled>
      <NotoText fontSize={getPixelToPixel(16)} fontWeight={'bold'}>
        {content}
      </NotoText>
      <NotoText fontSize={getPixelToPixel(10)} fontColor={'#7E7E7E'} fontWeight={'regular'}>
        {translateDatetime(createdAt)}
      </NotoText>
    </ContainerStyled>
  );
}

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: begin;
  width: ${getWidthPixel(360)};
  margin-top: ${getHeightPixel(8)};
  margin-bottom: ${getHeightPixel(8)};
`;
