import React from 'react';
import { ReactComponent as Reservation } from '../assets/logo.svg';

const TextField = ({
  type,
  name,
  placeholder,
  bg,
}: {
  type: string;
  name: string;
  placeholder: string;
  bg: string;
}) => {
  return (
    <div className="flex justify-center">
      <input
        className={`bg-${bg} bg-no-repeat bg-[left] outline outline-[2px] outline-[#CDCDCD] rounded-[208px] w-80 h-12 pl-[62px] pr-[30px]`}
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};
const TextButton = ({ title, textcolor, bgcolor }: { title: string; textcolor: string; bgcolor: string }) => {
  return (
    <div className="flex justify-center">
      <button
        className={`font-bold text-center w-80 outline outline-[2px] outline-[#CE4040] rounded-[58px] h-12 bg-${bgcolor} text-${textcolor}`}
      >
        {title}
      </button>
    </div>
  );
};
const Text = ({ content }: { content: string }) => {
  return (
    <div className="flex justify-center">
      <div className="text-[#D33434] font-medium text-[13px]">{content}</div>
    </div>
  );
};
function LoginPage() {
  return (
    <div className="flex w-full h-full justify-center font-noto">
      <div className="w-96 h-full bg-crimson-red flex flex-col">
        <div className="h-20 text-white pt-[31px] pb-[30px] pl-4">
          <Reservation width="60" height="23" />
        </div>

        <div className="bg-white h-screen rounded-t-3xl">
          <div className="flex justify-start pt-[75px] pb-[33px] pl-[49.12px]">
            <div className="font-bold text-4xl">로그인</div>
            <div className="text-xs font-medium flex items-end pl-[7.87px] text-[#7E7E7E]">
              <div className="drop-shadow-3xl">공지사항 쿠독 시작하기</div>
            </div>
          </div>
          <TextField bg="[url('~/src/assets/mail.svg')]" type="text" name="이메일" placeholder="이메일" />
          <div className="pb-[10px]"></div>
          <TextField bg="[url('~/src/assets/lock.svg')]" type="password" name="비밀번호" placeholder="비밀번호" />
          <div className="pb-[40px]"></div>
          <TextButton title="로그인" textcolor="[#FFFFFF]" bgcolor="[#CE4040]"></TextButton>
          <div className="pb-[9px]"></div>
          <Text content="또는"></Text>
          <div className="pb-[9px]"></div>
          <TextButton title="회원가입" textcolor="[#DB4A4A]" bgcolor="[#FFFFFF]"></TextButton>
          <div className="pb-[9px]"></div>
          <Text content="비밀번호 찾기"></Text>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
