import React, { useEffect, useState } from 'react';

import styled from 'styled-components';
import Blank from '../components/Blank';
import TextButton from '../components/Button/TextButton';
import { palette } from '../constants/palette';
import { REGISTER__PAGE__TEXT } from '../constants/text';
import HeaderContainer from '../container/header/HeaderContainer';
import EmailInputContainer from '../container/register/EmailInputContainer';
import MajorInputContainer from '../container/register/MajorInputContainer';
import NameInputContainer from '../container/register/NameInputContainer';
import PasswordInputContainer from '../container/register/PasswordInputContainer';
import { getHeightPixel, getWidthPixel } from '../utils/responsive';
import { postSignupAPI } from '../utils/api_register';
import { MAJOR__LIST, MIN__STUDENT__ID, ROUTER__URI } from '../constants';
import { RegisterWarningProps } from '../constants/types';
import { getRegisterWarningCode } from '../utils';
import SubscribeEmailInputContainer from '../container/register/SubscribeEmailInputContainer';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
  const [userName, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [code, setCode] = useState<string>('');
  const [subscribeEmail, setSubscribeEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [repeatPassword, setRepeatPassword] = useState<string>('');
  const [major, setMajor] = useState<number>(0);
  const [studentID, setStudentID] = useState<number>(0);
  const [grade, setGrade] = useState<number>(0);
  const [warningCode, setWarningCode] = useState<RegisterWarningProps>({
    emailWarningCode: '',
    codeWarningCode: '',
    formatWarningCode: '',
    repeatWarningCode: '',
  });
  const navigate = useNavigate();
  useEffect(() => {
    setWarningCode(getRegisterWarningCode(email, password, repeatPassword, warningCode));
  }, [email, password, repeatPassword]);
  return (
    <PageStyled>
      <HeaderContainer title={REGISTER__PAGE__TEXT.header.title[0]} />
      <Blank height={getHeightPixel(39)} />
      <NameInputContainer setName={setName} />
      <Blank height={getHeightPixel(20)} />
      <EmailInputContainer
        setEmail={setEmail}
        setCode={setCode}
        email={email}
        code={code}
        warningCode={warningCode.emailWarningCode}
        secondWarningCode={warningCode.codeWarningCode}
      />
      <Blank height={getHeightPixel(20)} />
      <SubscribeEmailInputContainer subscribeEmail={subscribeEmail} setSubscribeEmail={setSubscribeEmail} />
      <Blank height={getHeightPixel(20)} />
      <PasswordInputContainer
        password={password}
        repeatPassword={repeatPassword}
        setPassword={setPassword}
        setRepeatPassword={setRepeatPassword}
        warningCode={warningCode.formatWarningCode}
        secondWarningCode={warningCode.repeatWarningCode}
      />
      <Blank height={getHeightPixel(20)} />
      <MajorInputContainer
        setMajor={setMajor}
        setGrade={setGrade}
        setStudentID={setStudentID}
        major={major}
        grade={grade}
        studentID={studentID}
      />
      <Blank height={getHeightPixel(20)} />
      <ButtonContainer>
        <TextButton
          text={REGISTER__PAGE__TEXT.button.submit[0]}
          backgroundColor={palette.crimson}
          fontColor={palette.white}
          width={getWidthPixel(357)}
          height={getHeightPixel(47)}
          borderColor={palette.crimson}
          onClick={() => {
            postSignupAPI({
              userName: userName,
              email: email,
              password: password,
              studentID: studentID + MIN__STUDENT__ID,
              major: MAJOR__LIST[major],
              grade: grade + 1,
              submitFunc: () => navigate(ROUTER__URI.registerSubscribePage),
            });
          }}
        />
      </ButtonContainer>
      <Blank height={getHeightPixel(80)} />
    </PageStyled>
  );
}

const PageStyled = styled.div`
  flex-direction: column;
  width: 100%;
  height: ${getHeightPixel(700)};
  overflow-y: scroll;
  align-items: center;
  background-color: white;
  border-radius: ${getWidthPixel(30)} ${getWidthPixel(30)} 0 0;
  margin-top: ${getHeightPixel(80)};
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export default RegisterPage;
