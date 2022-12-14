import React from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ListButton from '../../components/Button/ListButton';
import { EXTERNAL__URI, ROUTER__URI } from '../../constants';
import { MY__PAGE__TEXT } from '../../constants/text';
import { logoutUser } from '../../utils';

export default function MyPageListContainer() {
  const [, , removeCookie] = useCookies(['refreshToken']);
  const handleLogout = () => {
    logoutUser(() => removeCookie('refreshToken', { path: '/' }));
    navigate(ROUTER__URI.loginPage);
  };
  const navigate = useNavigate();
  return (
    <ContainerStyled>
      <ListButton
        text={MY__PAGE__TEXT.button.introduction[0]}
        onClick={() => window.open(EXTERNAL__URI.introduction, '_blank')}
      />
      <ListButton text={MY__PAGE__TEXT.button.faq[0]} onClick={() => window.open(EXTERNAL__URI.faq, '_blank')} />
      <ListButton
        text={MY__PAGE__TEXT.button.contact[0]}
        onClick={() => window.open(EXTERNAL__URI.contact, '_blank')}
      />
      <ListButton text={MY__PAGE__TEXT.button.logout[0]} onClick={() => handleLogout()} />
    </ContainerStyled>
  );
}

const ContainerStyled = styled.div`
  width: 100%;
  flex-direction: column;
  display: flex;
`;
