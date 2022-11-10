import React from 'react';
import styled from 'styled-components';
import { ReactComponent as IsBookmarked } from '../assets/isBookmarked.svg';
import { ReactComponent as IsNotBookmarked } from '../assets/isNotBookmarked.svg';
import NotoText from '../components/Text/NotoText';
import { palette } from '../constants/palette';
import { getHeightPixel, getPixelToPixel } from '../utils/responsive';

const NoticeItem = ({
  title,
  date,
  isBookmarked,
  bookmark,
}: {
  title: string;
  date: string;
  isBookmarked: boolean;
  bookmark: () => void;
}) => {
  return (
    <NoticeContainer>
      <NoticeContent>
        <NoticeTitle>
          <NotoText fontSize={getPixelToPixel(16)} fontWeight={'700'} fontColor={palette.black}>
            {title}
          </NotoText>
        </NoticeTitle>
        <NoticeDate>
          <NotoText fontSize={getPixelToPixel(10)} fontWeight={'400'} fontColor={palette.gray_02}>
            {date}
          </NotoText>
        </NoticeDate>
      </NoticeContent>
      <NoticeBookmark>
        {isBookmarked ? (
          <IsBookmarked width="16" height="20" onClick={bookmark} />
        ) : (
          <IsNotBookmarked width="16" height="20" onClick={bookmark} />
        )}
      </NoticeBookmark>
    </NoticeContainer>
  );
};

const NoticeContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding-left: ${getPixelToPixel(24)};
  height: ${getHeightPixel(71)};
`;
const NoticeContent = styled.div`
  width: 100%;
  padding-right: ${getPixelToPixel(40)};
`;
const NoticeTitle = styled.div`
  line-height: ${getHeightPixel(23.17)};
`;
const NoticeDate = styled.div`
  line-height: ${getHeightPixel(14.48)};
`;
const NoticeBookmark = styled.div`
  right: ${getPixelToPixel(24)};
  position: relative;
`;
export default NoticeItem;
