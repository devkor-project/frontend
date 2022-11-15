import React from 'react';
import styled from 'styled-components';
import { REGISTER__SUBSCRIBE__PAGE__TEXT } from '../constants/text';
import HeaderContainer from '../container/header/HeaderContainer';
import CategoryButtonContainer from '../container/register/CategoryButtonContainer';

export default function RegisterSubscribePage() {
  return (
    <PageStyled>
      <HeaderContainer title={REGISTER__SUBSCRIBE__PAGE__TEXT.header.title[0]} />
      <CategoryButtonContainer />
    </PageStyled>
  );
}

const PageStyled = styled.div`
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;
