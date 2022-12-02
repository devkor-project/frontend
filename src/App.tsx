import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import styled from 'styled-components';
import { getHeightPixel, HEIGHT, WIDTH } from './utils/responsive';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import NoticeDetailPage from './pages/NoticeDetailPage';
import RegisterSubscribePage from './pages/RegisterSubscribePage';

import LogoPage from './pages/LogoPage';
import { palette } from './constants/palette';
import MyPage from './pages/MyPage';
import ModifyUserInfoPage from './pages/ModifyUserInfoPage';

import ScrapPage from './pages/ScrapPage';
import FindPasswordPage from './pages/FindPasswordPage';
import ErrorPage from './pages/ErrorPage';
import SubscribePage from './pages/SubscribePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/notice/:noticeId',
    element: <NoticeDetailPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/register/subscribe',
    element: <RegisterSubscribePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/mypage',
    element: <MyPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/mypage/modify',
    element: <ModifyUserInfoPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/scrap',
    element: <ScrapPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/findpassword',
    element: <FindPasswordPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/error',
    element: <ErrorPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/subscribe',
    element: <SubscribePage />,
    errorElement: <ErrorPage />,
  },
]);
function App() {
  const [width, setWidth] = React.useState(window.innerWidth);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  // Width를 기반으로 왼쪽에 메인 로고를 띄울지 말지 결정
  if (width < 810) {
    return (
      <BackgroundStyled>
        <TopBar />
        <PageStyled>
          <ContainerStyled>
            <RouterProvider router={router} />
          </ContainerStyled>
        </PageStyled>
      </BackgroundStyled>
    );
  } else
    return (
      <BackgroundStyled>
        <TopBar />
        <PageStyled>
          <LogoContainerStyled>
            <LogoPage />
          </LogoContainerStyled>
          <ContainerStyled>
            <RouterProvider router={router} />
          </ContainerStyled>
        </PageStyled>
      </BackgroundStyled>
    );
}

const BackgroundStyled = styled.div`
  display: flex;
`;

const PageStyled = styled.div`
  display: flex;
  width: 100%;
  position: absolute;
`;

const TopBar = styled.div`
  width: 100%;
  height: ${getHeightPixel(114)};
  background-color: ${palette.crimson};
  position: absolute;
  top: 0;
`;

const ContainerStyled = styled.div`
  width: ${WIDTH.toString() + 'px'};
  height: ${HEIGHT.toString() + 'px'};
  box-shadow: 0px -4px 8px 0px #69383826;
`;

const LogoContainerStyled = styled.div`
  width: 50%;
  height: ${HEIGHT.toString() + 'px'};
`;

export default App;
