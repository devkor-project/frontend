type TextConstantType = {
  [index: string]: { [index: string]: string[] };
};

export const REGISTER__PAGE__TEXT: TextConstantType = {
  header: {
    title: ['회원가입'],
    title_modify: ['내 정보 수정하기'],
  },
  title: {
    name: ['이름'],
    email: ['이메일'],
    subscribeEmail: ['구독용 이메일'],
    password: ['비밀번호'],
    major: ['학과'],
    year: ['학번'],
    grade: ['학년'],
  },
  placeholder: {
    email: ['학교 이메일을 입력해주세요'],
    subscribeEmail: ['수신 받을 이메일을 입력해주세요'],
    password: ['8-20자 / 특수문자 포함'],
    repeatPassword: ['한번 더 입력해 주세요'],
  },
  button: {
    email: ['인증번호 받기'],
    submitCode: ['확인'],
    submit: ['회원가입'],
    modify: ['수정하기'],
    modal: ['확인'],
  },
  warning: {
    wrongEmail: ['잘못된 형식의 이메일입니다.'],
    duplicateEmail: ['이미 사용중인 이메일입니다.'],
    univEmail: ['학교 이메일로 입력해주세요.'],
    wrongCode: ['잘못된 인증번호입니다.'],
    wrongFormat: ['8-20자 영문, 숫자, 특수문자를 사용하세요.'],
    wrongPassword: ['비밀번호가 일치하지 않습니다.'],
    emailAccept: ['인증번호를 발송했습니다.'],
    wrongReceiveEmail: ['잘못된 형식의 이메일입니다.'],
  },
};

export const REGISTER__SUBSCRIBE__PAGE__TEXT = {
  header: {
    title: ['카테고리 구독'],
  },
  search: {
    placeHolder: ['검색어를 입력하세요'],
  },
  button: {
    text: ['쿠독 시작하기'],
  },
};

export const MY__PAGE__TEXT = {
  header: {
    title: ['마이페이지'],
  },
  bar: {
    title: ['공지사항 메일 수신'],
  },
  button: {
    edit: ['편집'],
    introduction: ['서비스 소개'],
    faq: ['FAQ'],
    contact: ['문의하기'],
    logout: ['로그아웃'],
  },
};

export const FIND__PASSWORD__PAGE__TEXT = {
  header: {
    title_find: ['비밀번호 찾기'],
    title_modify: ['비밀번호 변경'],
  },
  button: {
    submit: ['비밀번호 저장'],
  },
};

export const ERROR__PAGE__TEXT = {
  default: {
    title: ['연결에 실패했어요'],
    text: ['네트워크 상태를 확인해주세요'],
  },
  button: {
    submit: ['재시도'],
  },
};

export const SUBSCRIBE__PAGE__TEXT = {
  header: {
    title: ['구독'],
  },
  button: {
    submit: ['변경사항 저장'],
  },
};

export const NOTICE__MODAL__TEXT = {
  header: {
    title: ['알림'],
  },
};
