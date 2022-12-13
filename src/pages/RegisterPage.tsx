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
import { getMajorListAPI, postSignupAPI } from '../utils/api_register';
import { DEFAULT__REGISTER__WARNING__CODE, GRADE__LIST, ROUTER__URI, STUDENT__ID__LIST } from '../constants';
import { MajorProps, RegisterWarningProps } from '../constants/types';
import { getMajorStringList, getRegisterWarningCode, isRegisterAble } from '../utils';
import SubscribeEmailInputContainer from '../container/register/SubscribeEmailInputContainer';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useSelector } from 'react-redux';

function RegisterPage() {
  const [cookies, setCookie] = useCookies(['refreshToken']);
  const [userName, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [code, setCode] = useState<string>('');
  const [subscribeEmail, setSubscribeEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [repeatPassword, setRepeatPassword] = useState<string>('');
  const [major, setMajor] = useState<number>(0);
  const [studentID, setStudentID] = useState<number>(0);
  const [grade, setGrade] = useState<number>(0);
  const [warningCode, setWarningCode] = useState<RegisterWarningProps>(DEFAULT__REGISTER__WARNING__CODE);
  const navigate = useNavigate();
  const token = useSelector((store: any) => store.tokenReducer);
  const [majorList, setList] = useState<MajorProps[]>([]);
  const [majorStringList, setStringList] = useState<string[]>([]);
  useEffect(() => {
    getMajorListAPI({ setList: setList });
  }, []);
  useEffect(() => {
    setStringList(getMajorStringList(majorList));
  }, [majorList]);
  useEffect(() => {
    if (token.payload.accessToken !== null) {
      // console.log('token이 없습니다.');
      navigate('/');
    }
    setWarningCode(getRegisterWarningCode(email, password, repeatPassword, warningCode, subscribeEmail));
  }, [email, password, repeatPassword, subscribeEmail]);
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
        warningCode={warningCode}
        setWarningCode={setWarningCode}
      />
      <Blank height={getHeightPixel(20)} />
      <SubscribeEmailInputContainer
        subscribeEmail={subscribeEmail}
        setSubscribeEmail={setSubscribeEmail}
        warningCode={warningCode}
      />
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
          backgroundColor={isRegisterAble(warningCode) ? palette.crimson : palette.gray_03}
          fontColor={palette.white}
          width={getWidthPixel(357)}
          height={getHeightPixel(47)}
          borderColor={isRegisterAble(warningCode) ? palette.crimson : palette.gray_03}
          disabled={!isRegisterAble(warningCode)}
          onClick={() => {
            postSignupAPI({
              userName: userName,
              email: email,
              password: password,
              receivingMail: subscribeEmail,
              studentID: STUDENT__ID__LIST[studentID],
              major: majorStringList[major],
              grade: GRADE__LIST[grade],
              submitFunc: () => navigate(ROUTER__URI.registerSubscribePage),
              setCookie: (refreshToken: any) => {
                setCookie('refreshToken', refreshToken, {
                  path: '/',
                  secure: true,
                  httpOnly: true,
                  expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
                });
              },
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
