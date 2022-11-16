import React, { useRef, useState } from 'react';

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
import { postSignupAPI } from '../utils/api';
import { MAJOR__LIST, MIN__STUDENT__ID } from '../constants';

function RegisterPage() {
  const [userName, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [code, setCode] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [repeatPassword, setRepeatPassword] = useState<string>('');
  const [major, setMajor] = useState<number>(0);
  const [studentID, setStudentID] = useState<number>(0);
  const [grade, setGrade] = useState<number>(0);
  return (
    <PageStyled>
      <HeaderContainer title={REGISTER__PAGE__TEXT.header.title[0]} />
      <Blank height={getHeightPixel(39)} />
      <NameInputContainer setName={setName} />
      <Blank height={getHeightPixel(20)} />
      <EmailInputContainer setEmail={setEmail} setCode={setCode} email={email} code={code} />
      <Blank height={getHeightPixel(20)} />
      <PasswordInputContainer setPassword={setPassword} setRepeatPassword={setRepeatPassword} />
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
          text={REGISTER__PAGE__TEXT.header.title[0]}
          backgroundColor={palette.crimson}
          fontColor={palette.white}
          width={getWidthPixel(357)}
          height={getHeightPixel(47)}
          borderColor={palette.crimson}
          onClick={() =>
            postSignupAPI({
              email: email,
              password: password,
              studentID: studentID + MIN__STUDENT__ID,
              major: MAJOR__LIST[major],
              grade: grade + 1,
            })
          }
        />
      </ButtonContainer>
      <Blank height={getHeightPixel(35)} />
    </PageStyled>
  );
}

const PageStyled = styled.div`
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export default RegisterPage;
