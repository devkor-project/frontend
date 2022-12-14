import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import OptionBar from '../commons/OptionBar';
import NotoText from '../components/Text/NotoText';
import NotoTextBordered from '../components/Text/NotoTextBordered';
import { palette } from '../constants/palette';
import { NoticeDetailProps } from '../constants/types1';
import DetailHeaderContainer from '../container/Detail/DetailHeaderContainer';
import { translateDatetime } from '../utils/datetime';
import { isExpired } from '../utils/refresh';
import { getHeightPixel, getPixelToPixel, getWidthPixel } from '../utils/responsive';

function NoticeDetailPage() {
  const params = useParams();
  const [noticeData, setNoticeData] = useState<NoticeDetailProps | null>(null);
  const token = useSelector((store: any) => store.tokenReducer);
  const [, , removeCookie] = useCookies(['refreshToken']);
  // id 에 맞는 공지사항 데이터를 가져오는 함수
  const getNoticeData = async () => {
    // console.log(params.noticeId);
    isExpired(token, removeCookie);
    const response = await axios.get(`notices/details/${params.noticeId}`);
    response.data.data.date = translateDatetime(response.data.data.date);
    // console.log(response.data.data);

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
            <div dangerouslySetInnerHTML={{ __html: noticeData.content }}></div>
          </NotoTextBordered>
        </ContentContainer>
        <OptionBar isScraped={noticeData.isScraped} idx={noticeData.noticeId} />
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
  border-radius: ${getWidthPixel(30)} ${getWidthPixel(30)} 0 0;
  margin-top: ${getHeightPixel(80)};
`;
const ContentContainer = styled.div`
  white-space: pre-wrap;
  width: 100%;
  margin-bottom: ${getHeightPixel(66)};
  margin-top: ${getHeightPixel(233)};
  padding-left: ${getPixelToPixel(20)};
  padding-right: ${getPixelToPixel(20)};
`;
