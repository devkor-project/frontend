import React, { useEffect, useState } from 'react';
import { ReactComponent as LogoIcon } from '../assets/logo.svg';
import axios from 'axios';
import { palette } from '../constants/palette';
import { useNavigate } from 'react-router-dom';
import { getHeightPixel, getPixelToPixel, getWidthPixel } from '../utils/responsive';
import styled from 'styled-components';
import Blank from '../components/Blank';
import LoginHeaderContainer from '../container/login/LoginHeaderContainer';
import { BASE__URL, ROUTER__URI } from '../constants';
import { ReactComponent as Mail_Icon } from '../assets/icon/mail.svg';
import { ReactComponent as Lock_Icon } from '../assets/icon/lock.svg';
import NotoText from '../components/Text/NotoText';
import NotoTextBordered from '../components/Text/NotoTextBordered';
import LoginIconTextInput from '../components/Input/LoginIconTextInput';
import LoginTextButton from '../components/Button/LoginTextButton';
import { ReactComponent as Info_Icon } from '../assets/icon/info1.svg';
import { useCookies } from 'react-cookie';
import { SetToken } from '../reducers/auth';
import { store } from '../store';
import TitleHeaderContainer from '../container/header/TitleHeaderContainer';
import { useSelector } from 'react-redux';

function LoginPage() {
  // TODO email, password를 한개의 객체로 state처리하기.
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isInputValid, setIsInputValid] = useState<boolean>(true);
  const [cookies, setCookie] = useCookies(['refreshToken']);
  const token = useSelector((store: any) => store.tokenReducer);
  // focus 변화에 따라 border 색상 변경
  const [borderColor, setBorderColor] = useState({
    emailBorderColor: palette.gray,
    passwordBorderColor: palette.gray,
  });

  const handleFocusBorder = (border: string): void => {
    setBorderColor({
      ...borderColor,
      [border]: palette.crimson,
    });
  };
  const handleBlurBorder = (border: string): void => {
    setBorderColor({
      ...borderColor,
      [border]: palette.gray,
    });
  };

  const navigate = useNavigate();
  // enter 입력시 login 함수 실행
  const handleOnKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // console.log('ddfd');
      postLoginRequest({ email, password });
    }
  };

  // axios post로 email, password 보내고 결과를 바탕으로 "/" 리다이렉트
  // 로그인 실패 메시지 출력
  // TODO 로그인 처리 여부에 따라 경고 messaage 출력
  const postLoginRequest = async ({ email, password }: { email: string; password: string }) => {
    try {
      const res = await axios({
        method: 'POST',
        url: `auth/login`,
        data: {
          email: email,
          password: password,
        },
      });

      if (res?.status === 200) {
        const accessToken = res.data.data.accessToken;
        const refreshToken = res.data.data.refreshToken;
        // refreshToken은 http-only token이므로 cookie에 저장
        setCookie('refreshToken', refreshToken, {
          path: '/',
          secure: true,
          // httpOnly: true,
          expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
        });
        // console.log('success');
        const expiredTime = await new Date(Date.now() + 1000 * 60 * 30);
        store.dispatch({ type: SetToken, payload: { accessToken, expiredTime } });

        navigate('../');
      }
    } catch (err) {
      // console.log(err);
      setIsInputValid(false);
    }
  };
  useEffect(() => {
    if (token.payload.accessToken !== null) {
      // console.log('token이 없습니다.');
      navigate('/');
    }
  }, []);

  return (
    <PageStyled>
      <TitleHeaderContainer title=""></TitleHeaderContainer>
      <InputPageStyled>
        <LoginHeaderContainer title={'로그인'} subtitle={'공지사항 구독 시작하기'}></LoginHeaderContainer>
        <Blank height={getHeightPixel(20)} />

        <LoginIconTextInput
          width={getWidthPixel(357)}
          height={getHeightPixel(47)}
          setFunc={setEmail}
          fontSize={getPixelToPixel(14)}
          placeHolder={'example.korea.ac.kr'}
          icon={<MailIconStyled fill={borderColor.emailBorderColor} />}
          type={'email'}
          onFocus={() => handleFocusBorder('emailBorderColor')}
          onBlur={() => handleBlurBorder('emailBorderColor')}
        />
        <Blank height={getHeightPixel(10)} />
        <LoginIconTextInput
          width={getWidthPixel(357)}
          height={getHeightPixel(47)}
          setFunc={setPassword}
          fontSize={getPixelToPixel(14)}
          placeHolder={'비밀번호'}
          icon={<LockIconStyled fill={borderColor.passwordBorderColor} />}
          type={'password'}
          onKeyDown={handleOnKeyPress}
          onFocus={() => handleFocusBorder('passwordBorderColor')}
          onBlur={() => handleBlurBorder('passwordBorderColor')}
        />
        {isInputValid ? (
          <Blank height={getHeightPixel(10)} />
        ) : (
          <ErrContainer>
            <Blank height={getHeightPixel(8)} />
            <div className="flex flex-row">
              <InfoIconStyled className="mt-[6px] mr-[8px]">
                <Info_Icon />
              </InfoIconStyled>
              <NotoTextBordered
                fontColor={palette.crimson}
                fontSize={getPixelToPixel(11)}
                fontWeight={'400'}
                borderColor={palette.gray_04}
                borderWidth={getPixelToPixel(0.2)}
              >
                이메일 혹은 비밀번호가 일치하지 않습니다. 입력한 내용을 다시 확인해 주세요.
              </NotoTextBordered>
            </div>
          </ErrContainer>
        )}
        <Blank height={getHeightPixel(40)} width={getWidthPixel(100)} />
        <LoginTextButton
          text="로그인"
          backgroundColor={palette.crimson}
          fontColor={palette.white}
          fontSize={getPixelToPixel(14)}
          width={getWidthPixel(357)}
          height={getHeightPixel(47)}
          borderColor={palette.crimson}
          onClick={() => {
            postLoginRequest({ email, password });
          }}
        />
        <Blank height={getHeightPixel(9)} />
        <div className="flex w-[100%] justify-center">
          <NotoText fontColor={palette.crimson} fontSize={getPixelToPixel(13)} fontWeight={'500'}>
            또는
          </NotoText>
        </div>
        <Blank height={getHeightPixel(9)} />
        <div>
          <LoginTextButton
            text="회원가입"
            backgroundColor={palette.white}
            fontColor={palette.crimson}
            fontSize={getPixelToPixel(14)}
            width={getWidthPixel(357)}
            height={getHeightPixel(47)}
            borderColor={palette.crimson}
            onClick={() => {
              navigate('../register');
            }}
          />
        </div>
        <Blank height={getHeightPixel(9)} />
        <div onClick={() => navigate(ROUTER__URI.findPassword)} className="flex w-[100%] justify-center">
          <NotoText fontColor={palette.crimson} fontSize={getPixelToPixel(13)} fontWeight={'500'}>
            비밀번호 찾기
          </NotoText>
        </div>
      </InputPageStyled>
    </PageStyled>
  );
}

export default LoginPage;

const PageStyled = styled.div`
  flex-direction: column;
  align-items: center;
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
  display: flex;
  width: 100%;
  height: ${getHeightPixel(661)};
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  background: ${palette.white};
  border-radius: ${getPixelToPixel(30)} ${getPixelToPixel(30)} 0px 0px;
  margin-top: ${getHeightPixel(-30)};
  padding-top: ${getHeightPixel(30)};
`;

const ErrContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${getWidthPixel(317)};
`;

const LogoStyled = styled(LogoIcon)`
  width: ${getPixelToPixel(60)};
  height: ${getPixelToPixel(23)};
  margin-left: ${getPixelToPixel(26)};
`;

const MailIconStyled = styled(Mail_Icon)`
  width: ${getWidthPixel(18.33)};
  height: ${getHeightPixel(14)};
  fill: ${props => props.fill};
`;

const LockIconStyled = styled(Lock_Icon)`
  width: ${getWidthPixel(14.67)};
  height: ${getHeightPixel(18.38)};
  fill: ${props => props.fill};
`;

const InfoIconStyled = styled(Info_Icon)`
  width: ${getWidthPixel(12)};
  height: ${getHeightPixel(12)};
`;
