import React from 'react';
import styled from 'styled-components';
import ListButton from '../../components/Button/ListButton';
import { MY__PAGE__BUTTON__LIST } from '../../constants';

export default function MyPageListContainer() {
  return (
    <ContainerStyled>
      {MY__PAGE__BUTTON__LIST.map(text => {
        return <ListButton key={text} text={text} />;
      })}
    </ContainerStyled>
  );
}

const ContainerStyled = styled.div`
  width: 100%;
  flex-direction: column;
  display: flex;
`;
