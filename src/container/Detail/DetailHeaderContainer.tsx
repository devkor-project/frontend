import styled from 'styled-components';
import React from 'react';
import { NoticeDetailHeaderProps } from '../../constants/types1';
import { getHeightPixel, getPixelToPixel, getWidthPixel } from '../../utils/responsive';
import { palette } from '../../constants/palette';
import NotoTextBordered from '../../components/Text/NotoTextBordered';
import NotoText from '../../components/Text/NotoText';
import { ReactComponent as Views_Icon } from '../../assets/icon/view.svg';
import { ReactComponent as Scraps_Icon } from '../../assets/icon/scraps.svg';

function DetailHeaderContainer({ categoryName, title, date, writer, viewCount, scraps }: NoticeDetailHeaderProps) {
  return (
    <DetailHeaderContainerStyled>
      <CategoryStyled>
        <NotoTextBordered
          fontSize={getPixelToPixel(12)}
          fontWeight="700"
          fontColor={palette.crimson}
          borderColor={palette.gray_04}
          borderWidth={getPixelToPixel(0.2)}
        >
          {categoryName}
        </NotoTextBordered>
      </CategoryStyled>
      <TitleStyled>
        <NotoText fontSize={getPixelToPixel(24)} fontWeight="700">
          {title}
        </NotoText>
      </TitleStyled>
      <div className="flex flex-row mt-[11.2px]">
        <div className="inline-block">
          <WriterStyled>
            <NotoTextBordered
              fontSize={getPixelToPixel(12)}
              fontWeight="700"
              fontColor={palette.gray_06}
              borderColor={palette.gray_04}
              borderWidth={getPixelToPixel(0.2)}
            >
              {writer}
            </NotoTextBordered>
          </WriterStyled>
        </div>
        <div className="inline-block">
          <DateStyled>
            <NotoTextBordered
              fontSize={getPixelToPixel(12)}
              fontWeight="500"
              fontColor={palette.gray_06}
              borderColor={palette.gray_04}
              borderWidth={getPixelToPixel(0.2)}
            >
              {date}
            </NotoTextBordered>
          </DateStyled>
        </div>
        <div className="inline-block">
          <ViewsStyled>
            <Views_IconStyled />
            <div className="inline-block">
              <NotoTextBordered
                fontSize={getPixelToPixel(12)}
                fontWeight="500"
                fontColor={palette.gray_06}
                borderColor={palette.gray_04}
                borderWidth={getPixelToPixel(0.2)}
              >
                {viewCount}
              </NotoTextBordered>
            </div>
          </ViewsStyled>
        </div>
        <div className="inline-block">
          <ScrapsStyled>
            <Scraps_IconStyled />
            <div className="inline-block">
              <NotoTextBordered
                fontSize={getPixelToPixel(12)}
                fontWeight="500"
                fontColor={palette.gray_06}
                borderColor={palette.gray_04}
                borderWidth={getPixelToPixel(0.2)}
              >
                {scraps}
              </NotoTextBordered>
            </div>
          </ScrapsStyled>
        </div>
      </div>
    </DetailHeaderContainerStyled>
  );
}

export default DetailHeaderContainer;

const DetailHeaderContainerStyled = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  width: ${getWidthPixel(405)};
  height: ${getHeightPixel(203)};
  padding-left: ${getPixelToPixel(20)};
  padding-right: ${getPixelToPixel(20)};
  background-color: ${palette.white};
`;

const CategoryStyled = styled.div`
  margin-top: ${getHeightPixel(52)};
`;
const TitleStyled = styled.div`
  margin-top: ${getHeightPixel(8)};
  line-height: ${getPixelToPixel(34.75)};
`;

const WriterStyled = styled.div``;
const DateStyled = styled.div`
  margin-left: ${getPixelToPixel(10)};
`;
const ViewsStyled = styled.div`
  margin-left: ${getPixelToPixel(163)};
`;
const ScrapsStyled = styled.div`
  margin-left: ${getPixelToPixel(17)};
`;
const Scraps_IconStyled = styled(Scraps_Icon)`
  display: inline-block;
  width: ${getWidthPixel(9)};
  height: ${getHeightPixel(13.47)};
  margin-right: ${getWidthPixel(6)};
`;
const Views_IconStyled = styled(Views_Icon)`
  display: inline-block;
  width: ${getWidthPixel(16)};
  height: ${getHeightPixel(12.34)};
  margin-right: ${getWidthPixel(4)};
`;
