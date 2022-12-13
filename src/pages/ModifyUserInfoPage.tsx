import React, { useEffect, useRef, useState } from 'react';

import styled from 'styled-components';
import Blank from '../components/Blank';
import TextButton from '../components/Button/TextButton';
import { palette } from '../constants/palette';
import { REGISTER__PAGE__TEXT } from '../constants/text';
import HeaderContainer from '../container/header/HeaderContainer';
import MajorInputContainer from '../container/register/MajorInputContainer';
import NameInputContainer from '../container/register/NameInputContainer';
import PasswordInputContainer from '../container/register/PasswordInputContainer';
import { getHeightPixel, getWidthPixel } from '../utils/responsive';
import { DEFAULT__REGISTER__WARNING__CODE, DEFAULT__USER__DATA, GRADE__LIST, STUDENT__ID__LIST } from '../constants';
import { MajorProps, RegisterWarningProps, UserDataProps } from '../constants/types';
import { getMajorStringList, getRegisterWarningCode } from '../utils';
import SubscribeEmailInputContainer from '../container/register/SubscribeEmailInputContainer';
import { useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';
import { getUserDataAPI, modifyUserDataAPI } from '../utils/api_user';
import ModifyEmailContainer from '../container/register/ModifyEmailContainer';
import { useNavigate } from 'react-router-dom';
import { isExpired } from '../utils/refresh';
import { getMajorListAPI } from '../utils/api_register';

export default function ModifyUserInfoPage() {
  const [userData, setData] = useState<UserDataProps>(DEFAULT__USER__DATA);
  const [userName, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [subscribeEmail, setSubscribeEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [repeatPassword, setRepeatPassword] = useState<string>('');
  const [major, setMajor] = useState<number>(0);
  const [studentID, setStudentID] = useState<number>(0);
  const [grade, setGrade] = useState<number>(0);
  const [status, setStatus] = useState<string>('');
  const [warningCode, setWarningCode] = useState<RegisterWarningProps>(DEFAULT__REGISTER__WARNING__CODE);
  const accessToken = useSelector((store: any) => store.tokenReducer);
  const refreshToken = useCookies(['refreshToken'])[0].refreshToken;
  const [, , removeCookie] = useCookies(['refreshToken']);
  const navigate = useNavigate();
  const [majorList, setList] = useState<MajorProps[]>([]);
  const [majorStringList, setStringList] = useState<string[]>([]);
  useEffect(() => {
    getMajorListAPI({ setList: setList });
  }, []);
  useEffect(() => {
    setStringList(getMajorStringList(majorList));
  }, [majorList]);
  useEffect(() => {
    setWarningCode(getRegisterWarningCode(email, password, repeatPassword, warningCode, subscribeEmail));
  }, [email, password, repeatPassword, subscribeEmail]);
  useEffect(() => {
    isExpired(accessToken, removeCookie);
    getUserDataAPI({ setData: setData });
  }, []);
  useEffect(() => {
    setName(userData.name);
    setEmail(userData.email);
    setSubscribeEmail(userData.receiveEmail);
    setMajor(majorStringList.indexOf(userData.major));
    setStudentID(STUDENT__ID__LIST.indexOf(userData.studentID));
    setGrade(GRADE__LIST.indexOf(userData.grade));
    setStatus(userData.status);
  }, [userData, majorList]);
  return (
    <PageStyled>
      <HeaderContainer title={REGISTER__PAGE__TEXT.header.title_modify[0]} />
      <Blank height={getHeightPixel(39)} />
      <NameInputContainer userName={userName} setName={setName} />
      <Blank height={getHeightPixel(20)} />
      <ModifyEmailContainer setEmail={setEmail} email={email} />
      <Blank height={getHeightPixel(20)} />
      <SubscribeEmailInputContainer
        subscribeEmail={subscribeEmail}
        setSubscribeEmail={setSubscribeEmail}
        warningCode={warningCode}
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
          text={REGISTER__PAGE__TEXT.button.modify[0]}
          backgroundColor={palette.crimson}
          fontColor={palette.white}
          width={getWidthPixel(357)}
          height={getHeightPixel(47)}
          borderColor={palette.crimson}
          onClick={() => {
            isExpired(accessToken, removeCookie);
            modifyUserDataAPI({
              name: userName,
              email: email,
              receiveEmail: subscribeEmail,
              studentID: STUDENT__ID__LIST[studentID],
              grade: GRADE__LIST[grade],
              major: majorStringList[major],
              status: status,
              submitFunc: () => navigate(-1),
            });
          }}
        />
      </ButtonContainer>
      <Blank height={getHeightPixel(65)} />
    </PageStyled>
  );
}

const PageStyled = styled.div`
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  align-items: center;
  background-color: white;
  border-radius: ${getWidthPixel(30)} ${getWidthPixel(30)} 0 0;
  margin-top: ${getHeightPixel(30)};
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
