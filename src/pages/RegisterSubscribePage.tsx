import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { REGISTER__SUBSCRIBE__PAGE__TEXT } from '../constants/text';
import HeaderContainer from '../container/header/HeaderContainer';
import SearchContainer from '../container/main/SearchContainer';
import CategoryButtonContainer from '../container/register/CategoryButtonContainer';
import { ReactComponent as Search_Icon } from '../assets/icon/search.svg';
import { getHeightPixel, getWidthPixel } from '../utils/responsive';
import TextButton from '../components/Button/TextButton';
import { palette } from '../constants/palette';
import { ROUTER__URI } from '../constants';
import { CategoryDataProps } from '../constants/types';
import { useSelector } from 'react-redux';
import { RootState } from '../reducers';
import { getCategoryAPI, modifySubscribeCategoryAPI } from '../utils/api_category';
import { isExpired } from '../utils/refresh';
import { useCookies } from 'react-cookie';
import { getCategoryIdList } from '../utils';
import { useNavigate } from 'react-router-dom';

export default function RegisterSubscribePage() {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState<string>('');
  const [selectedList, setSelectedList] = useState<CategoryDataProps[]>([]);
  const [categoryList, setCategoryList] = useState<CategoryDataProps[]>([]);
  const accessToken = useSelector((store: RootState) => store.tokenReducer);
  const refreshToken = useCookies(['refreshToken'])[0].refreshToken;
  useEffect(() => {
    getCategoryAPI({ setList: setCategoryList });
  }, []);
  useEffect(() => {
    const searchRegex = new RegExp('.*' + keyword + '.*');
    setCategoryList(categoryList.filter(category => searchRegex.test(category.categoryName)));
  }, [keyword]);
  return (
    <PageStyled>
      <HeaderContainer title={REGISTER__SUBSCRIBE__PAGE__TEXT.header.title[0]} goBackKey={ROUTER__URI.mainPage} />
      <SearchContainer
        width={getWidthPixel(357)}
        height={getHeightPixel(47)}
        fontSize={getHeightPixel(14)}
        placeHolder={REGISTER__SUBSCRIBE__PAGE__TEXT.search.placeHolder[0]}
        icon={<SearchIconStyled />}
        searchFunc={() => {
          return 0;
        }}
        setFunc={setKeyword}
      />
      <CategoryButtonContainer categoryList={categoryList} selectedList={selectedList} setList={setSelectedList} />
      <ButtonContainer>
        <TextButton
          text={REGISTER__SUBSCRIBE__PAGE__TEXT.button.text[0]}
          backgroundColor={palette.crimson}
          fontColor={palette.white}
          width={getWidthPixel(357)}
          height={getHeightPixel(47)}
          borderColor={palette.crimson}
          onClick={() => {
            modifySubscribeCategoryAPI({
              removeCatIds: [],
              subscribeCatIds: getCategoryIdList(selectedList),
              submitFunc: () => navigate(ROUTER__URI.mainPage),
            });
          }}
        />
      </ButtonContainer>
    </PageStyled>
  );
}

const PageStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  background-color: white;
  align-items: center;
  border-radius: ${getWidthPixel(30)} ${getWidthPixel(30)} 0 0;
  margin-top: ${getHeightPixel(30)};
`;

const SearchIconStyled = styled(Search_Icon)`
  width: ${getWidthPixel(21)};
  height: ${getHeightPixel(21)};
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: absolute;
  bottom: ${getHeightPixel(30)};
`;
