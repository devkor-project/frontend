import React, { useState } from 'react';
import { ReactComponent as LogoIcon } from '../assets/logo.svg';
import axios from 'axios';
import { palette } from '../constants/palette';
import { useNavigate } from 'react-router-dom';
import { postLoginAPI } from '../utils/api_login';
import { getHeightPixel, getPixelToPixel, getWidthPixel } from '../utils/responsive';
import styled from 'styled-components';
import Blank from '../components/Blank';
import NotoText from '../components/Text/NotoText';
import LoginHeaderContainer from '../container/login/LoginHeaderContainer';

function LoginPage() {
  // TODO email, password를 한개의 객체로 state처리하기.
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();
  // enter 입력시 login 함수 실행
  const handleOnKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      login();
    }
  };

  // axios post로 email, password 보내고 결과를 바탕으로 "/" 리다이렉트
  // 로그인 실패 메시지 출력
  // TODO 로그인 처리 여부에 따라 경고 messaage 출력
  // TODO axios Post 시에 password hashing
  // TODO 모바일과 데스크탑 분리하기 (모바일환경에서는 기본 base가 full, desktop은 375px)
  const login = () => {
    axios
      .post('https:/www.kudog.email/auth/login', {
        email: email,
        password: password,
      })
      .then(res => {
        if (res.status === 200) {
          console.log(res);
          //로컬 저장소에 token 값들 저장
          window.localStorage.setItem('accessToken', res.data.data.accessToken);
          window.localStorage.setItem('refreshToken', res.data.data.refreshToken);

          navigate('../');
        }
      })
      .catch(err => {
        console.log(err);
        alert('로그인에 실패하였습니다.\n 다시 시도해 주세요');
      });
  };

  return (
    <PageStyled>
      <LogoPageStyled>
        <Blank height={getPixelToPixel(31)} />
        <LogoStyled
          onClick={() => {
            navigate('../');
          }}
        />
      </LogoPageStyled>
      <InputPageStyled>
        <LoginHeaderContainer title={'로그인'} subtitle={'공지사항 구독 시작하기'}></LoginHeaderContainer>
      </InputPageStyled>
    </PageStyled>
  );
  // return (
  //   <div className="flex w-full h-full justify-center font-noto">
  //     <div className="w-full h-full bg-crimson-red flex flex-col">
  //       <div className="h-20 text-white pt-[31px] pb-[30px] pl-4">
  //         <Reservation width="60" height="23" />
  //       </div>

  //       <div className="bg-white h-screen rounded-t -3xl flex align-center flex-col grow">
  //         <div className="flex justify-start pt-[75px] pb-[33px] pl-[49.12px]">
  //           <div className="font-bold text-4xl">로그인</div>
  //           <div className="text-xs font-medium flex items-end pl-[7.87px] text-[#7E7E7E]">
  //             <div className="drop-shadow-3xl">공지사항 쿠독 시작하기</div>
  //           </div>
  //         </div>
  //         <div className="flex justify-center">
  //           <input
  //             id="email"
  //             className={`bg-[url('~/src/assets/mail.svg')] bg-no-repeat bg-left-4 outline outline-[2px] outline-[#CDCDCD] rounded-[208px] w-80 h-12 pl-[62px] pr-[30px]`}
  //             type="text"
  //             name="이메일"
  //             onChange={e => {
  //               setEmail(e.target.value);
  //             }}
  //             placeholder="이메일"
  //           />
  //         </div>
  //         <div className="pb-[10px]"></div>
  //         <div className="flex justify-center mx-[24px]">
  //           <input
  //             id="password"
  //             className={`bg-[url('~/src/assets/lock.svg')] bg-no-repeat bg-left-4 outline outline-[2px] outline-[#CDCDCD] rounded-[208px] w-80 h-12 pl-[62px] pr-[30px]`}
  //             type="password"
  //             name="비밀번호"
  //             onChange={e => {
  //               setPassword(e.target.value);
  //             }}
  //             onKeyUp={handleOnKeyPress}
  //             placeholder="비밀번호"
  //           />
  //         </div>
  //         <div className="pb-[40px]"></div>
  //         <div className="flex justify-center">
  //           <button
  //             onClick={login}
  //             className={`font-bold text-center w-80 outline outline-[2px] outline-[#CE4040] rounded-[58px] h-12 bg-[#CE4040] text-[#FFFFFF]`}
  //           >
  //             로그인
  //           </button>
  //         </div>
  //         <div className="pb-[9px]"></div>
  //         <Text content="또는"></Text>
  //         <div className="pb-[9px]"></div>

  //         <div className="flex justify-center">
  //           <button
  //             onClick={() => {
  //               console.log('회원가입');
  //             }}
  //             className={`font-bold text-center w-80 outline outline-[2px] outline-[#CE4040] rounded-[58px] h-12 bg-[#FFFFFF] text-[#DB4A4A]`}
  //           >
  //             회원가입
  //           </button>
  //         </div>
  //         <div className="pb-[9px]"></div>
  //         <Text content="비밀번호 찾기"></Text>
  //       </div>
  //     </div>
  //   </div>
  //);
}

export default LoginPage;

const PageStyled = styled.div`
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: ${palette.crimson};
`;

const LogoPageStyled = styled.div`
  flex-direction: column;
  width: 100%;
  height: ${getHeightPixel(84)};
`;

const InputPageStyled = styled.div`
  flex-direction: column;
  width: 100%;
  height: ${getHeightPixel(636)};
  overflow-y: scroll;
  background: ${palette.white};
  border-radius: ${getPixelToPixel(30)} ${getPixelToPixel(30)} 0px 0px;
`;

const LogoStyled = styled(LogoIcon)`
  width: ${getPixelToPixel(60)};
  height: ${getPixelToPixel(23)};
  margin-left: ${getPixelToPixel(26)};
`;
