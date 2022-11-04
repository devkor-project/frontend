import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import RegisterPage from './pages/RegisterPage';

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
  {
    path: '/register',
    element: <RegisterPage />,
  },
]);
import styled from 'styled-components';

import { HEIGHT, WIDTH } from './utils/responsive';

function App() {
  return (
    <PageStyled>
      <ContainerStyled>
        <RouterProvider router={router} />
      </ContainerStyled>
    </PageStyled>
  );
  //return <RegisterPage />;
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
