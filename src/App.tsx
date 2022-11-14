<<<<<<< Updated upstream
import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import { ReactComponent as MainLogo } from './assets/mainLogo.svg';
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
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
      <div className="w-full h-full flex justify-center">
        <RouterProvider router={router} />
      </div>
    );
  } else
    return (
      <div className="flex justify-center w-full h-full">
        <MainLogo width="400px" height="688px" />

        <RouterProvider router={router} />
      </div>
    );
=======
import React from 'react';
import styled from 'styled-components';

import RegisterPage from './pages/RegisterPage';
import { HEIGHT, WIDTH } from './utils/responsive';

function App() {
  return (
    <PageStyled>
      <ContainerStyled>
        <RegisterPage />
      </ContainerStyled>
    </PageStyled>
  );
  //return <RegisterPage />;
>>>>>>> Stashed changes
}

const PageStyled = styled.div`
  display: flex;
  justify-content: center;
`;

const ContainerStyled = styled.div`
  width: ${WIDTH.toString() + 'px'};
  height: ${HEIGHT.toString() + 'px'};
  border: 1px solid red;
`;

export default App;
