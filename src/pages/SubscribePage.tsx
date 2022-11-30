import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import BottomNavigationBar from '../commons/BottomNavigationBar';
import Blank from '../components/Blank';
import TextButton from '../components/Button/TextButton';
import { palette } from '../constants/palette';
import { SUBSCRIBE__PAGE__TEXT } from '../constants/text';
import { CategoryDataProps } from '../constants/types';
import TitleHeaderContainer from '../container/header/TitleHeaderContainer';
import CategoryButtonContainer from '../container/register/CategoryButtonContainer';
import SubscribeEmailInputContainer from '../container/register/SubscribeEmailInputContainer';
import { RootState } from '../reducers';
import { getCategoryAPI } from '../utils/api_category';
import { getHeightPixel, getPixelToPixel, getWidthPixel } from '../utils/responsive';

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

export default function SubscribePage() {
  const [email, setEmail] = useState<string>('');
  const [selectedList, setSelectedList] = useState<CategoryDataProps[]>([]);
  const [categoryList, setCategoryList] = useState<CategoryDataProps[]>([]);
  const accessToken = useSelector((store: RootState) => store.tokenReducer);
  useEffect(() => {
    getCategoryAPI({ setList: setCategoryList });
  }, []);
  return (
    <PageStyled>
      <TitleHeaderContainer title={SUBSCRIBE__PAGE__TEXT.header.title[0]} />
      <ContainerStyled>
        <SubscribeEmailInputContainer subscribeEmail={email} setSubscribeEmail={setEmail} />
        <Blank height={getHeightPixel(21)} />
        <InnerContainerStyled>
          <CategoryButtonContainer
            height={getHeightPixel(350)}
            categoryList={categoryList}
            selectedList={selectedList}
            setList={setSelectedList}
          />
          <Blank height={getHeightPixel(20)} />
          <TextButton
            text={SUBSCRIBE__PAGE__TEXT.button.submit[0]}
            backgroundColor={palette.none}
            fontColor={'#DB4A4A'}
            width={getWidthPixel(167)}
            height={getHeightPixel(47)}
            borderColor={palette.crimson}
            onClick={() => {
              return 0;
            }}
            fontSize={getPixelToPixel(14)}
          />
        </InnerContainerStyled>
        <BottomNavigationBar />
      </ContainerStyled>
    </PageStyled>
  );
}

const PageStyled = styled.div``;

const ContainerStyled = styled.div`
  border-radius: ${getWidthPixel(30)} ${getWidthPixel(30)} 0 0;
  background-color: white;
  width: 100%;
  height: ${getHeightPixel(730)};
  margin-top: ${getHeightPixel(-30)};
  padding-top: ${getHeightPixel(23)};
`;

const InnerContainerStyled = styled.div`
  background-color: #f6f6f6;
  padding-top: ${getHeightPixel(24)};
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
