import React, { Component, Dispatch, ReactElement, ReactNode, SetStateAction } from 'react';
import { PaletteKeyTypes } from './palette';

export interface TextStyle {
  fontSize: string;
  fontColor?: PaletteKeyTypes;
  fontWeight?: string;
}

export interface TextProps extends TextStyle {
  children?: ReactNode;
}

export interface ContainerProps {
  width: string;
  height: string;
}

export interface InputProps extends ContainerProps {
  placeHolder?: string;
  setFunc: Dispatch<SetStateAction<number>>;
  type?: string;
  fontSize: string;
  icon?: ReactNode;
  text?: string;
  fontWeight?: string;
  children?: ReactNode;
}

export interface TextInputProps extends ContainerProps {
  placeHolder?: string;
  setFunc: Dispatch<SetStateAction<string>>;
  type?: string;
  fontSize: string;
  icon?: ReactNode;
  text?: string;
  fontWeight?: string;
  children?: ReactNode;
  defaultValue?: string;
  disabled?: boolean;
}

export interface DropDownInputProps extends InputProps {
  dividerWidth?: string;
  selected: number;
  list: string[] | number[];
  suffix?: string;
}

export interface ButtonStyle extends ContainerProps {
  backgroundColor: PaletteKeyTypes;
  borderColor?: PaletteKeyTypes;
  fontColor: PaletteKeyTypes;
  fontWeight?: string;
  fontSize?: string;
  hoverBackgroundColor?: PaletteKeyTypes;
  hoverFontColor?: PaletteKeyTypes;
}

export interface ButtonProps extends ButtonStyle {
  text: string;
  disabled?: boolean;
  onClick: () => void;
}

export interface CategoryProps {
  id: string;
  title: string;
}

export interface NoticeProps {
  noticeId: number;
  title: string;
  date: string;
  provider: string;
  viewCount: number;
  categoryName: string;
  isScraped: string;
}

export interface RegisterWarningProps {
  emailWarningCode: 'wrongEmail' | 'duplicateEmail' | 'univEmail' | 'accept' | 'authenticatedEmail' | 'emailSent' | '';
  codeWarningCode: 'wrongCode' | 'accept' | '';
  formatWarningCode: 'wrongFormat' | 'accept' | '';
  repeatWarningCode: 'wrongPassword' | 'accept' | '';
  receiveEmailWarningCode: 'wrongReceiveEmail' | 'accept' | '';
}

export interface providerListProps {
  provider: CategoryListProps[];
}

export interface CategoryListProps {
  categoryId: number;
  categoryName: string;
}

export interface TokenProps {
  accessToken: string;
  expiredTime: Date;
}

export interface UserDataProps {
  name: string;
  email: string;
  receiveEmail: string;
  studentID: number;
  grade: number;
  major: string;
  status: string;
}

export interface UserDataAPIProps extends UserDataProps {
  submitFunc: () => void;
}

export interface CategoryDataProps {
  categoryId: number;
  categoryName: string;
  provider: string;
}

export interface AdminNoticeProps {
  adminNoticeId: number;
  title: string;
  content: string;
  writer: string;
  createdAt: string;
}
