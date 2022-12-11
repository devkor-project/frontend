import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Blank from '../components/Blank';
import TextButton from '../components/Button/TextButton';
import { DEFAULT__REGISTER__WARNING__CODE, ROUTER__URI } from '../constants';
import { palette } from '../constants/palette';
import { FIND__PASSWORD__PAGE__TEXT } from '../constants/text';
import { RegisterWarningProps } from '../constants/types';
import HeaderContainer from '../container/header/HeaderContainer';
import EmailInputContainer from '../container/register/EmailInputContainer';
import PasswordInputContainer from '../container/register/PasswordInputContainer';
import { PageStyled } from '../styles';
import { getRegisterWarningCode } from '../utils';
import { modifyPasswordAPI } from '../utils/api_user';
import { getHeightPixel, getWidthPixel } from '../utils/responsive';

export default function FindPasswordPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [code, setCode] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [repeatPassword, setRepeatPassword] = useState<string>('');
  const [warningCode, setWarningCode] = useState<RegisterWarningProps>(DEFAULT__REGISTER__WARNING__CODE);

  useEffect(() => {
    setWarningCode(getRegisterWarningCode(email, password, repeatPassword, warningCode, '@'));
  }, [email, password, repeatPassword]);

  return (
    <PageStyled>
      <HeaderContainer
        title={
          warningCode.codeWarningCode !== 'accept'
            ? FIND__PASSWORD__PAGE__TEXT.header.title_find[0]
            : FIND__PASSWORD__PAGE__TEXT.header.title_modify[0]
        }
      />
      <Blank height={getHeightPixel(26)} />
      {warningCode.codeWarningCode !== 'accept' ? (
        <EmailInputContainer
          setEmail={setEmail}
          setCode={setCode}
          email={email}
          code={code}
          warningCode={warningCode}
          setWarningCode={setWarningCode}
          type={'findPwd'}
        />
      ) : (
        <ContainerStyled>
          <PasswordInputContainer
            password={password}
            repeatPassword={repeatPassword}
            setPassword={setPassword}
            setRepeatPassword={setRepeatPassword}
            warningCode={warningCode.formatWarningCode}
            secondWarningCode={warningCode.repeatWarningCode}
          />
          <Blank height={getHeightPixel(25)} />
          <TextButton
            text={FIND__PASSWORD__PAGE__TEXT.button.submit[0]}
            backgroundColor={palette.crimson}
            fontColor={palette.white}
            width={getWidthPixel(357)}
            height={getHeightPixel(47)}
            borderColor={palette.crimson}
            onClick={() => {
              if (warningCode.formatWarningCode === 'accept' && warningCode.repeatWarningCode === 'accept') {
                modifyPasswordAPI({
                  email: email,
                  password: password,
                  submitFunc: () => navigate(ROUTER__URI.loginPage),
                });
              }
            }}
          />
        </ContainerStyled>
      )}
    </PageStyled>
  );
}

const ContainerStyled = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
`;
