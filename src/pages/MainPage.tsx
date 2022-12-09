import React, { useContext, useEffect, useState } from 'react';
import { BASE__URL } from '../constants';
import styled from 'styled-components';
import BottomNavigationBar from '../commons/BottomNavigationBar';
import { palette } from '../constants/palette';
import { getHeightPixel, getPixelToPixel, getWidthPixel } from '../utils/responsive';
import { ReactComponent as Search_Icon } from '../assets/icon/search.svg';
import SearchContainer from '../container/main/SearchContainer';
import CategoryListContainer from '../commons/CategoryListContainer';
import NoticeListContainer from '../commons/NoticeListContainer';
import NotSearchedContainer from '../container/main/NotSearchedContainer';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isExpired } from '../utils/refresh';
import axios from 'axios';
import { CategoryListProps, NoticeProps } from '../constants/types';
import TitleHeaderContainer from '../container/header/TitleHeaderContainer';
import ProviderListContainer from '../commons/ProviderListContainer';
import { useCookies } from 'react-cookie';
// import { ReactComponent as Reservatio`n } from '../assets/logo.svg';

function MainPage() {
  // 공지사항의 provider를 저장하는 state
  const [providerList, setProviderList] = useState<string[]>([]);
  // 현재 선택된 provider를 저장하는 state
  const [selectedProvider, setSelectedProvider] = useState<string>('정보대학');
  //전체 카테고리 리스트를 저장하는 state
  const [categoryList, setCategoryList] = useState();
  // 카테고리 리스트 중에 선택된 카테고리의 index를 저장
  const [category, setCategory] = useState(1);
  // 현재 선택된 provider에 맞는 카테고리 리스트를 저장하는 state
  const [categoryListByProvider, setCategoryListByProvider] = useState<CategoryListProps[]>([]);

  const [search, setSearch] = useState('');
  // 현재 선택된 카테고리에 맞는 공지사항 리스트를 저장하는 state
  const [noticeData, setNoticeData] = useState<NoticeProps[]>([]);
  const token = useSelector((store: any) => store.tokenReducer);
  const [, , removeCookie] = useCookies(['refreshToken']);
  // TODO 프로바이더를 변경하는 함수
  // 프로바이더를 변경하면, 하위 카테고리 리스트를 변경해야함
  const changeNoticeProvider = (provider: string) => {
    setSelectedProvider(provider);
    if (categoryList) {
      setCategoryListByProvider(categoryList[provider]);
      setCategory(categoryListByProvider[0].categoryId);
    }
  };
  // TODO
  // 카테고리에 따라 서버에 요청해서 데이터를 받아오는 함수
  // 만약 검색어가 있으면 검색어에 맞는 데이터를 받아옴
  const getNoticeList = async (category: number) => {
    // console.log(token.payload.accessToken);

    // console.log(response.data.data);
    if (search !== '') {
      getSearchedList();
    } else if (search === '') {
      isExpired(token, removeCookie);
      console.log(token);

      axios.defaults.headers.common['x-auth-token'] = token.payload.accessToken;
      const response = await axios.get(`notices`, {
        params: {
          categoryId: category,
        },
      });
      setNoticeData(response.data.data);
    }
  };
  // 카테고리 리스트 가져오는 api
  const getCategoryList = async () => {
    console.log(token.payload.accessToken);

    isExpired(token, removeCookie);
    axios.defaults.headers.common['x-auth-token'] = token.payload.accessToken;
    const categoryL = await axios.get(`category/provider`);
    // console.log(categoryL.data.data[0]);
    const providers = Object.keys(categoryL.data.data);
    const categoryListJson = categoryL.data.data;
    // const p = providers[0];
    // console.log(categoryL.data.data?.[p]);
    // console.log(categoryL.data.data?.['정보대학']);
    // 프로바이더 리스트 갱신
    // 카테고리 전체 리스트 갱신
    // 현재 선택된 프로바이더에 맞는 카테고리 리스트 갱신
    if (providers.length !== 0 && categoryListJson) {
      setProviderList(providers);
      // setSelectedProvider(providers[0]);
      setCategoryList(categoryListJson);
      // console.log(categoryListJson);
      setCategoryListByProvider(categoryListJson[selectedProvider]);
      setCategory(categoryListByProvider[0].categoryId);
    }
  };

  // ! 카테고리 변경 함수
  const changeCategory = (index: number) => {
    setCategory(index);
  };

  // ! 서버에 검색 요청
  const getSearchedList = async () => {
    isExpired(token, removeCookie);
    axios.defaults.headers.common['x-auth-token'] = token.payload.accessToken;
    const response = await axios.get(`notices/search/${categoryListByProvider[category]}/${selectedProvider}`, {
      params: {
        keyword: search,
      },
    });
    setNoticeData(response.data.data);
  };

  // 카테고리 변경시 getNoticeList 호출
  useEffect(() => {
    getNoticeList(category);
  }, [category]);
  useEffect(() => {
    getCategoryList();
  }, [selectedProvider]);
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
  if (noticeData.length === 0) {
    return (
      <PageStyled>
        <TitleHeaderContainer title="홈" />
        <MainPageStyled>
          <SearchContainer
            width={getWidthPixel(357)}
            height={getHeightPixel(40)}
            fontSize={getHeightPixel(14)}
            placeHolder="검색어를 입력하세요"
            setFunc={setSearch}
            icon={<SearchIconStyled />}
            searchFunc={getSearchedList}
          />
          <ProviderListContainer
            ProviderList={providerList}
            changeSelectedProvider={changeNoticeProvider}
            selectedProvider={selectedProvider}
          />
          <CategoryListContainer
            CategoryList={categoryListByProvider}
            changeCategory={changeCategory}
            selectedCategory={category}
          />
          <NotSearchedContainer />
        </MainPageStyled>
        <BottomNavigationBar />
      </PageStyled>
    );
  } else
    return (
      <PageStyled>
        <TitleHeaderContainer title="홈" />
        <MainPageStyled>
          <SearchContainer
            width={getWidthPixel(357)}
            height={getHeightPixel(40)}
            fontSize={getHeightPixel(14)}
            placeHolder="검색어를 입력하세요"
            setFunc={setSearch}
            icon={<SearchIconStyled />}
            searchFunc={getSearchedList}
          />
          <ProviderListContainer
            ProviderList={providerList}
            changeSelectedProvider={changeNoticeProvider}
            selectedProvider={selectedProvider}
          />
          <CategoryListContainer
            CategoryList={categoryListByProvider}
            changeCategory={changeCategory}
            selectedCategory={category}
          />
          <NoticeListContainer
            NoticeList={noticeData}
            changeBookmark={changeBookmark}
            goNoticeDetail={goNoticeDetail}
          />
        </MainPageStyled>
        <BottomNavigationBar />
      </PageStyled>
    );
}

export default MainPage;

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
  height: ${getHeightPixel(661)};
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  background: ${palette.white};
  border-radius: ${getPixelToPixel(30)} ${getPixelToPixel(30)} 0px 0px;
  margin-top: ${getHeightPixel(-30)};
  padding-top: ${getHeightPixel(30)};
`;
const SearchIconStyled = styled(Search_Icon)`
  width: ${getWidthPixel(21)};
  height: ${getHeightPixel(21)};
`;
