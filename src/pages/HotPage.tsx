import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import BottomNavigationBar from '../commons/BottomNavigationBar';
import { palette } from '../constants/palette';
import { getHeightPixel, getPixelToPixel, getWidthPixel } from '../utils/responsive';
import { ReactComponent as Notification_Icon } from '../assets/icon/notification.svg';
import { ReactComponent as Main_Logo } from '../assets/icon/logo.svg';
import { ReactComponent as Search_Icon } from '../assets/icon/search.svg';
import SearchContainer from '../container/main/SearchContainer';
import NotoText from '../components/Text/NotoText';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isExpired } from '../utils/refresh';
import axios from 'axios';
import { NoticeProps } from '../constants/types';
import NotScrapedContainer from '../container/scrap/NotScrapedContainer';
import Blank from '../components/Blank';
import TitleHeaderContainer from '../container/header/TitleHeaderContainer';
import { BASE__URL } from '../constants';
import HotNoticeListContainer from '../commons/HotNoticeListContainer';
import { useCookies } from 'react-cookie';
// import { ReactComponent as Reservatio`n } from '../assets/logo.svg';

function HotPage() {
  const token = useSelector((store: any) => store.tokenReducer);
  // TODO server에서 받아온 데이터를 저장하는 state
  // TODO 한번에 가져오지 말고 infinite scroll로 가져오기

  const [noticeData, setNoticeData] = useState<NoticeProps[]>([]);

  const [, , removeCookie] = useCookies(['refreshToken']);
  // 카테고리에 따라 서버에 요청해서 데이터를 받아오는 함수
  const getHotNoticeList = async () => {
    isExpired(token, removeCookie);
    axios.defaults.headers.common['x-auth-token'] = token.payload.accessToken;
    const response = await axios.get(`notices/hot`);
    setNoticeData(response.data.data);
  };

  useEffect(() => {
    getHotNoticeList();
  }, []);
  // 공지사항 북마크 변경
  const changeBookmark = async (idx: number) => {
    // TODO 서버에 저장 get request
    isExpired(token, removeCookie);
    axios.defaults.headers.common['x-auth-token'] = token.payload.accessToken;
    let i = false;
    noticeData.map(data => {
      if (data.noticeId === idx) {
        if (data.isScraped === 'Y') i = true; // scrap 여부를 저장
      }
    });
    // console.log(i);
    const res = await axios.put(`scraps/${idx}`, {
      whetherScrap: !i,
    });
    // console.log(res);

    getHotNoticeList();
  };
  const navigate = useNavigate();
  const goNoticeDetail = (noticeId: number) => {
    navigate(`/notice/${noticeId}`);
  };
  return (
    <PageStyled>
      <TitleHeaderContainer title="인기" />
      <HotPageStyled>
        <HotNoticeListContainer
          NoticeList={noticeData}
          changeBookmark={changeBookmark}
          goNoticeDetail={goNoticeDetail}
        />
      </HotPageStyled>
      <BottomNavigationBar />
    </PageStyled>
  );
}

export default HotPage;

const PageStyled = styled.div`
  // flex-direction: column;
  // align-items: center;
  // width: 100%;
  // height: 100%;
  // background: ${palette.crimson};
`;
const HotPageStyled = styled.div`
  display: flex;
  width: 100%;
  height: ${getHeightPixel(633)};
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  background: ${palette.white};
  border-radius: ${getPixelToPixel(30)} ${getPixelToPixel(30)} 0px 0px;
  margin-top: ${getHeightPixel(-30)};
  padding-top: ${getHeightPixel(30)};
  padding-bottom: ${getPixelToPixel(44)};
`;
