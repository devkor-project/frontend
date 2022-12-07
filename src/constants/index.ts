export const BASE__URL = 'https://www.api.kudog.email/';

export const GRADE__LIST = [1, 2, 3, 4];

export const MAJOR__LIST = ['컴퓨터학과', '디자인조형학부', '사이버국방학과'];

export const STUDENT__ID__LIST = [17, 18, 19, 20, 21, 22];

export const MIN__STUDENT__ID = 19;

export const ROUTER__URI = {
  mainPage: '/',
  loginPage: '/login',
  registerPage: '/register',
  noticeDetailPage: '/notice/:noticeId',
  registerSubscribePage: '/register/subscribe',
  myPage: '/mypage',
  modifyUserInfoPage: '/mypage/modify',
  scrapPage: '/scrap',
  findPassword: '/findpassword',
};

export const DEFAULT__USER__DATA = {
  name: '',
  email: '',
  receiveEmail: '',
  studentID: 0,
  grade: 0,
  major: '',
  status: '',
};

export const DEFAULT__REGISTER__WARNING__CODE = {
  emailWarningCode: '',
  codeWarningCode: '',
  formatWarningCode: '',
  repeatWarningCode: '',
  receiveEmailWarningCode: '',
};
