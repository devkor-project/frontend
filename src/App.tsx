import React from 'react';
import styled from 'styled-components';
import MainPage from './pages/MainPage';

import RegisterPage from './pages/RegisterPage';
import { HEIGHT, WIDTH } from './utils/responsive';

function App() {
  return (
    <PageStyled>
      <ContainerStyled>
        <MainPage />
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
  border: 1px solid red;
`;

export default App;
