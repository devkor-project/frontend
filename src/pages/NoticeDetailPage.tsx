import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { isNull } from 'util';
import OptionBar from '../commons/OptionBar';
import NotoText from '../components/Text/NotoText';
import NotoTextBordered from '../components/Text/NotoTextBordered';
import { palette } from '../constants/palette';
import { NoticeDetailProps } from '../constants/types1';
import DetailHeaderContainer from '../container/Detail/DetailHeaderContainer';
import { isExpired } from '../utils/refresh';
import { getHeightPixel, getPixelToPixel } from '../utils/responsive';

function NoticeDetailPage() {
  const params = useParams();
  const [noticeData, setNoticeData] = useState<NoticeDetailProps | null>(null);
  const token = useSelector((store: any) => store.tokenReducer);
  // id 에 맞는 공지사항 데이터를 가져오는 함수
  const getNoticeData = async () => {
    console.log(params.noticeId);
    isExpired(token);
    const response = await axios.get(`https://kudog.email/notices/details/${params.noticeId}`);

    setNoticeData({
      ...response.data.data,
    });
  };
  useEffect(() => {
    getNoticeData();
  }, []);
  if (!noticeData) {
    return <div>로딩중</div>;
  } else
    return (
      <PageStyled>
        <DetailHeaderContainer
          noticeId={noticeData.noticeId}
          categoryName={noticeData.categoryName}
          title={noticeData.title}
          date={noticeData.date}
          writer={noticeData.writer}
          viewCount={noticeData.viewCount}
          scraps={noticeData.scraps}
          url={noticeData.url}
          isScraped={noticeData.isScraped}
          provider={noticeData.provider}
        />
        <ContentContainer>
          <NotoTextBordered
            fontSize={getPixelToPixel(16)}
            fontWeight="500"
            borderColor={palette.gray_04}
            borderWidth={getPixelToPixel(0.2)}
          >
            {noticeData?.content}
          </NotoTextBordered>
        </ContentContainer>
        <OptionBar />
      </PageStyled>
    );
}

export default NoticeDetailPage;

const PageStyled = styled.div`
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  background: ${palette.white};
`;
const ContentContainer = styled.div`
  white-space: pre-wrap;
  width: 100%;
  margin-bottom: ${getHeightPixel(66)};
  margin-top: ${getHeightPixel(203)};
  padding-left: ${getPixelToPixel(20)};
  padding-right: ${getPixelToPixel(20)};
`;
