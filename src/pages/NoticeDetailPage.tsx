import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { isNull } from 'util';
import OptionBar from '../commons/OptionBar';
import NotoText from '../components/Text/NotoText';
import NotoTextBordered from '../components/Text/NotoTextBordered';
import { palette } from '../constants/palette';
import { NoticeDetailProps } from '../constants/types1';
import DetailHeaderContainer from '../container/Detail/DetailHeaderContainer';
import { getHeightPixel, getPixelToPixel } from '../utils/responsive';

function NoticeDetailPage() {
  const params = useParams();
  const [noticeData, setNoticeData] = useState<NoticeDetailProps | null>(null);
  // id 에 맞는 공지사항 데이터를 가져오는 함수
  const getNoticeData = async () => {
    console.log(params.noticeId);
    // const response = await axios();
    setNoticeData({
      noticeId: isNull(params.noticeId) ? parseInt(params.noticeId) : 0,
      category: 'KUPID 전체',
      title: '[서울 학부] 2022학년도 2학기 학부 2차 폐강 교과목 안내',
      date: '2021-09-01',
      writer: '교무처',
      views: 142,
      scraps: 20,
      content: `1. 2022학년도 2학기 학부 2차 최종 폐강 교과목을 아래와 같이 안내합니다.



        
2. 2차 폐강 교과목을 신청한 학생들은 폐강 교과목이 자동 삭제처리 되오니, 폐강교과목 신청학생 수강신청 기간을 이용하여 수강신청 정정을 완료하여 주시기 바랍니다.
        
         URL: https://sugang.korea.ac.kr/
        
        
        
        3. 폐강교과목 신청학생 수강신청: 9.15(목) 18:30 ~ 9.16(금) 09:00 
        
        
        







        ※ 2022-2학기 학부 2차 폐강 교과목 목록(서울)은 붙임 파일을 확
        `,
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
          category={noticeData.category}
          title={noticeData.title}
          date={noticeData.date}
          writer={noticeData.writer}
          views={noticeData.views}
          scraps={noticeData.scraps}
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
