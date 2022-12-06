import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
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
import { getCategoryAPI, getSubscribeCategoryAPI } from '../utils/api_category';
import { refreshAccessToken } from '../utils/refresh';
import { getHeightPixel, getPixelToPixel, getWidthPixel } from '../utils/responsive';

export default function SubscribePage() {
  const [email, setEmail] = useState<string>('');
  const [selectedList, setSelectedList] = useState<CategoryDataProps[]>([]);
  const [categoryList, setCategoryList] = useState<CategoryDataProps[]>([]);
  const accessToken = useSelector((store: RootState) => store.tokenReducer);
  const refreshToken = useCookies(['refreshToken'])[0].refreshToken;
  useEffect(() => {
    refreshAccessToken(accessToken, refreshToken);
    getCategoryAPI({ setList: setCategoryList });
    getSubscribeCategoryAPI({ setList: setSelectedList });
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
