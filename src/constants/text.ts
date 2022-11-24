type TextConstantType = {
  [index: string]: { [index: string]: string[] };
};

export const REGISTER__PAGE__TEXT: TextConstantType = {
  header: {
    title: ['회원가입'],
  },
  title: {
    name: ['이름'],
    email: ['이메일'],
    password: ['비밀번호'],
    major: ['학과'],
    year: ['학번'],
    grade: ['학년'],
  },
  placeholder: {
    email: ['학교 이메일을 입력해주세요'],
    password: ['6-16자 / 영문 소문자, 숫자 사용가능'],
    repeatPassword: ['한번 더 입려해 주세요'],
  },
  button: {
    email: ['인증번호 받기'],
    submitCode: ['확인'],
  },
  warning: {
    wrongEmail: ['잘못된 형식의 이메일입니다.'],
    duplicateEmail: ['이미 사용중인 이메일입니다.'],
    univEmail: ['학교 이메일로 입력해주세요.'],
    wrongCode: ['잘못된 인증번호입니다.'],
    wrongFormat: ['6-16자 영문 소문자, 숫자를 사용하세요.'],
    wrongPassword: ['비밀번호가 일치하지 않습니다.'],
  },
};

export const REGISTER__SUBSCRIBE__PAGE__TEXT = {
  header: {
    title: ['카테고리 구독'],
  },
  search: {
    placeHolder: ['검색어를 입력하세요'],
  },
};

export const MY__PAGE__TEXT = {
  header: {
    title: ['마이페이지'],
  },
  bar: {
    title: ['공지사항 메일 수신'],
  },
};
