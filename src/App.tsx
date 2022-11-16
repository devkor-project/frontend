import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import styled from 'styled-components';
import { HEIGHT, WIDTH } from './utils/responsive';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import { ReactComponent as MainLogo } from './assets/mainLogo.svg';
import RegisterPage from './pages/RegisterPage';
import NoticeDetailPage from './pages/NoticeDetailPage';
import RegisterSubscribePage from './pages/RegisterSubscribePage';
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/notice/:noticeId',
    element: <NoticeDetailPage />,
  },
  {
    path: '/register/subscribe',
    element: <RegisterSubscribePage />,
  },
]);
function App() {
  const [width, setWidth] = React.useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  // Width를 기반으로 왼쪽에 메인 로고를 띄울지 말지 결정
  if (width < 810) {
    return (
      <PageStyled>
        <ContainerStyled>
          <RouterProvider router={router} />
        </ContainerStyled>
      </PageStyled>
    );
  } else
    return (
      <PageStyled>
        <MainLogo width="400px" height="688px" />
        <ContainerStyled>
          <RouterProvider router={router} />
        </ContainerStyled>
      </PageStyled>
    );
}

const PageStyled = styled.div`
  display: flex;
  justify-content: center;
`;

const ContainerStyled = styled.div`
  width: ${WIDTH.toString() + 'px'};
  height: ${HEIGHT.toString() + 'px'};
`;

export default App;
