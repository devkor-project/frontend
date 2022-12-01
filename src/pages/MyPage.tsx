import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import BottomNavigationBar from '../commons/BottomNavigationBar';
import ToggleButton from '../components/Button/ToggleButton';
import NotoText from '../components/Text/NotoText';
import { DEFAULT__USER__DATA } from '../constants';
import { MY__PAGE__TEXT } from '../constants/text';
import { UserDataProps } from '../constants/types';
import TitleHeaderContainer from '../container/header/TitleHeaderContainer';
import MyPageListContainer from '../container/mypage/MyPageListContainer';
import UserNameContainer from '../container/mypage/UserNameContainer';
import { getUserDataAPI, modifyUserDataAPI } from '../utils/api_user';
import { refreshAccessToken } from '../utils/refresh';
import { getHeightPixel, getWidthPixel } from '../utils/responsive';

export default function MyPage() {
  const [isToggle, setToggle] = useState(false);
  const [userData, setData] = useState<UserDataProps>(DEFAULT__USER__DATA);
  const accessToken = useSelector((store: any) => store.tokenReducer);
  const refreshToken = useCookies(['refreshToken'])[0].refreshToken;
  useEffect(() => {
    refreshAccessToken(accessToken, refreshToken);
    getUserDataAPI({ setData: setData });
  }, []);
  useEffect(() => {
    setToggle(userData.status === 'Y');
  }, [userData]);
  return (
    <PageStyled>
      <TitleHeaderContainer title={MY__PAGE__TEXT.header.title[0]} />
      <ContainerStyled>
        <UserNameContainer name={userData.name} />
        <GrayContainerStyled>
          <TextStyled>
            <NotoText fontSize={getWidthPixel(18)} fontColor={'#444444'}>
              {MY__PAGE__TEXT.bar.title[0]}
            </NotoText>
          </TextStyled>
          <ButtonStyled>
            <ToggleButton
              isToggle={isToggle}
              onClick={() => {
                modifyUserDataAPI({
                  submitFunc: () => {
                    return 0;
                  },
                  ...userData,
                  status: isToggle ? 'N' : 'Y',
                });
                setToggle(!isToggle);
              }}
            />
          </ButtonStyled>
        </GrayContainerStyled>
        <MyPageListContainer />
      </ContainerStyled>
      <BottomNavigationBar />
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
  padding-top: ${getHeightPixel(30)};
`;

const GrayContainerStyled = styled.div`
  width: 100%;
  height: ${getHeightPixel(67)};
  background-color: #f6f6f6;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TextStyled = styled.div`
  margin-left: ${getWidthPixel(24)};
`;

const ButtonStyled = styled.div`
  margin-right: ${getWidthPixel(24)};
`;
