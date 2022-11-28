import React, { useEffect } from 'react';
import styled from 'styled-components';
import { REGISTER__SUBSCRIBE__PAGE__TEXT } from '../constants/text';
import HeaderContainer from '../container/header/HeaderContainer';
import SearchContainer from '../container/main/SearchContainer';
import CategoryButtonContainer from '../container/register/CategoryButtonContainer';
import { ReactComponent as Search_Icon } from '../assets/icon/search.svg';
import { getHeightPixel, getWidthPixel } from '../utils/responsive';
import TextButton from '../components/Button/TextButton';
import { palette } from '../constants/palette';
import { useState } from 'react';
import { ROUTER__URI } from '../constants';

const tempArr = [
  '컴퓨터학과',
  '디자인조형학부',
  '학사일정',
  '장학금',
  '정보대학',
  '고려대학교',
  'KUPID 전체 공지사항',
  '내일',
  '2학기',
  '맛집',
  '사이버 국방학과',
  '데이터 과학과',
  '카페 안암동',
  '이런저런 데이터',
  '1컴퓨터학과',
  '1디자인조형학부',
  '1학사일정',
  '1장학금',
  '1정보대학',
  '1고려대학교',
  'K1UPID 전체 공지사항',
  '내1일',
  '2학1기',
  '맛집1',
  '사이1버 국방학과',
  '데이1터 과학과',
  '카페 1안암동',
  '이런저1런 데이터',
  '2컴퓨터학과',
  '2디자인조형학부',
  '2학사일정',
  '2장학금',
  '2정보대학',
  '2고려대학교',
  'K2UPID 전체 공지사항',
  '내2일',
  '2학2기',
  '2맛집',
  '2사이버 국방학과',
  '2데이터 과학과',
  '2카페 안암동',
  '2이런저런 데이터',
];

export default function RegisterSubscribePage() {
  const [selectedList, setSelectedList] = useState<string[]>([]);
  const [keyword, setKeyword] = useState<string>('');
  const [categoryList, setCategoryList] = useState<string[]>(tempArr);
  useEffect(() => {
    const searchRegex = new RegExp('.*' + keyword + '.*');
    setCategoryList(tempArr.filter(text => searchRegex.test(text)));
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
            return 0;
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
