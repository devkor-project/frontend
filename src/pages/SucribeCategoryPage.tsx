import React, { useContext, useEffect, useState } from 'react';
import { BASE__URL } from '../constants';
import styled from 'styled-components';
import BottomNavigationBar from '../commons/BottomNavigationBar';
import { palette } from '../constants/palette';
import { getHeightPixel, getPixelToPixel, getWidthPixel } from '../utils/responsive';
import { ReactComponent as Notification_Icon } from '../assets/icon/notification.svg';
import { ReactComponent as Main_Logo } from '../assets/icon/logo.svg';
import { ReactComponent as Search_Icon } from '../assets/icon/search.svg';
import SearchContainer from '../container/main/SearchContainer';
import NotoText from '../components/Text/NotoText';
import NoticeListContainer from '../commons/NoticeListContainer';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isExpired } from '../utils/refresh';

import TitleHeaderContainer from '../container/header/TitleHeaderContainer';
import axios from 'axios';
import { CategoryDataProps, CategoryListProps, NoticeProps } from '../constants/types';
import SubscribeCategoryListContainer from '../commons/SubscribeCategoryListContainer';
import { useCookies } from 'react-cookie';

function SubscribeCategoryPage(props: any) {
  // 구독하고 있는 카테고리
  const [subscribeCategoryList, setsubscribeCategoryList] = useState<CategoryDataProps[]>([]);
  // 카테고리 리스트 중에 선택된 카테고리의 index를 저장
  const [category, setCategory] = useState(1);

  // 현재 선택된 카테고리에 맞는 공지사항 리스트를 저장하는 state
  const [noticeData, setNoticeData] = useState<NoticeProps[]>([]);
  const token = useSelector((store: any) => store.tokenReducer);
  const [, , removeCookie] = useCookies(['refreshToken']);
  // TODO 프로바이더를 변경하는 함수
  // 카테고리에 따라 서버에 요청해서 데이터를 받아오는 함수
  const getNoticeList = async (category: number) => {
    isExpired(token, removeCookie);

    axios.defaults.headers.common['x-auth-token'] = token.payload.accessToken;
    const response = await axios.get(`notices`, {
      params: {
        categoryId: category,
      },
    });
    // console.log(response.data.data);
    setNoticeData(response.data.data);
  };
  // 카테고리 리스트 가져오는 api
  const getCategoryList = async () => {
    isExpired(token, removeCookie);
    axios.defaults.headers.common['x-auth-token'] = token.payload.accessToken;
    const categoryL = await axios.get(`category/subscribe`);
    setsubscribeCategoryList(categoryL.data.data);
    console.log(categoryL);
  };

  // ! 카테고리 변경 함수
  const changeCategory = (index: number) => {
    // console.log(index);

    setCategory(index);
  };

  // 카테고리 변경시 getNoticeList 호출
  useEffect(() => {
    getNoticeList(category);
  }, [category]);
  useEffect(() => {
    getCategoryList();
  }, []);
  // 공지사항 북마크 변경
  const changeBookmark = async (idx: number) => {
    // TODO 서버에 저장 get request
    console.log(token.payload.accessToken);
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
    console.log(res);

    getNoticeList(category);
  };

  const navigate = useNavigate();
  const goNoticeDetail = (noticeId: number) => {
    navigate(`/notice/${noticeId}`);
  };
  //검색버튼이 눌렸는데 검색 응답이 없는 경우
  return (
    <PageStyled>
      <TitleHeaderContainer title="구독" />
      <MainPageStyled>
        <SubscribeCategoryListContainer
          CategoryList={subscribeCategoryList}
          changeCategory={changeCategory}
          selectedCategory={category}
        />
        <NoticeListContainer NoticeList={noticeData} changeBookmark={changeBookmark} goNoticeDetail={goNoticeDetail} />
      </MainPageStyled>
      <BottomNavigationBar />
    </PageStyled>
  );
}

export default SubscribeCategoryPage;

const PageStyled = styled.div`
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background: ${palette.crimson};
`;
const MainPageStyled = styled.div`
  display: flex;
  width: 100%;
  height: ${getHeightPixel(593)};
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  background: ${palette.white};
  border-radius: ${getPixelToPixel(30)} ${getPixelToPixel(30)} 0px 0px;
  margin-top: ${getHeightPixel(-30)};
  padding-top: ${getHeightPixel(30)};
`;
