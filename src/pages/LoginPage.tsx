import React, { useState } from 'react';
import { ReactComponent as Reservation } from '../assets/logo.svg';
import axios from 'axios';

// 단순 text만 달라지는 고정 textbox component
const Text = ({ content }: { content: string }) => {
  return (
    <div className="flex justify-center">
      <div className="text-[#D33434] font-medium text-[13px]">{content}</div>
    </div>
  );
};
function LoginPage() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const login = () => {
    axios
      .post('https:/www.kudog.email/auth/login', {
        email: email,
        password: password,
      })
      .then(res => {
        if (res.status === 200) {
          console.log(res);

          alert('Login success');
          //로컬 저장소에 token 값들 저장
          window.localStorage.setItem('accessToken', res.data.data.accessToken);
          window.localStorage.setItem('refreshToken', res.data.data.refreshToken);
        }
      })
      .catch(err => {
        console.log(err.response.data);
      });
  };
  return (
    <div className="flex w-full h-full justify-center font-noto">
      <div className="w-96 h-full bg-crimson-red flex flex-col">
        <div className="h-20 text-white pt-[31px] pb-[30px] pl-4">
          <Reservation width="60" height="23" />
        </div>

        <div className="bg-white h-screen rounded-t-3xl flex align-center flex-col">
          <div className="flex justify-start pt-[75px] pb-[33px] pl-[49.12px]">
            <div className="font-bold text-4xl">로그인</div>
            <div className="text-xs font-medium flex items-end pl-[7.87px] text-[#7E7E7E]">
              <div className="drop-shadow-3xl">공지사항 쿠독 시작하기</div>
            </div>
          </div>
          <div className="flex justify-center">
            <input
              id="email"
              className={`bg-[url('~/src/assets/mail.svg')] bg-no-repeat bg-[left-20px] outline outline-[2px] outline-[#CDCDCD] rounded-[208px] w-80 h-12 pl-[62px] pr-[30px]`}
              type="text"
              name="이메일"
              onChange={e => {
                setEmail(e.target.value);
              }}
              placeholder="이메일"
            />
          </div>
          <div className="flex justify-center">
            <input
              id="password"
              className={`bg-[url('~/src/assets/lock.svg')] bg-no-repeat bg-[left] outline outline-[2px] outline-[#CDCDCD] rounded-[208px] w-80 h-12 pl-[62px] pr-[30px]`}
              type="password"
              name="비밀번호"
              onChange={e => {
                setPassword(e.target.value);
              }}
              placeholder="비밀번호"
            />
          </div>
          <div className="pb-[40px]"></div>
          <div className="flex justify-center">
            <button
              onClick={login}
              className={`font-bold text-center w-80 outline outline-[2px] outline-[#CE4040] rounded-[58px] h-12 bg-[#CE4040] text-[#FFFFFF]`}
            >
              로그인
            </button>
          </div>
          <div className="pb-[9px]"></div>
          <Text content="또는"></Text>
          <div className="pb-[9px]"></div>

          <div className="flex justify-center">
            <button
              onClick={() => {
                console.log('회원가입');
              }}
              className={`font-bold text-center w-80 outline outline-[2px] outline-[#CE4040] rounded-[58px] h-12 bg-[#FFFFFF] text-[#DB4A4A]`}
            >
              회원가입
            </button>
          </div>
          <div className="pb-[9px]"></div>
          <Text content="비밀번호 찾기"></Text>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
