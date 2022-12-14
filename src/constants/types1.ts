import { Component, Dispatch, ReactNode, SetStateAction } from 'react';
import { PaletteKeyTypes } from './palette';

export interface TextStyle {
  fontSize: string;
  fontColor?: PaletteKeyTypes;
  fontWeight?: string;
  borderColor?: PaletteKeyTypes;
  borderWidth?: string;
}

export interface TextProps extends TextStyle {
  children?: ReactNode;
}

export interface ContainerProps {
  width: string;
  height: string;
}

export interface InputPropsAdd<T> extends ContainerProps {
  placeHolder?: string;
  setFunc: Dispatch<SetStateAction<T>>;
  type?: string;
  fontSize: string;
  icon?: ReactNode;
  text?: string;
  selected?: T;
  fontWeight?: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  children?: ReactNode;
  isFocus?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
}

export interface ButtonStyle extends ContainerProps {
  backgroundColor: PaletteKeyTypes;
  borderColor?: PaletteKeyTypes;
  fontColor: PaletteKeyTypes;
  fontWeight?: string;
  fontSize?: string;
}

export interface ButtonProps extends ButtonStyle {
  text: string;
  onClick: () => void;
}

export interface SearchInputProps extends ContainerProps {
  width: string;
  height: string;
  setFunc: Dispatch<SetStateAction<string>>;
  fontSize: string;
  icon: ReactNode;
  placeHolder: string;
  searchFunc: () => void;
}

export interface NoticeDetailHeaderProps {
  noticeId: number;
  title: string;
  writer: string;
  date: string;
  url: string;
  provider: number;
  viewCount: number;
  categoryName: string;
  isScraped: string;
  scraps: number;
}
export interface NoticeDetailProps extends NoticeDetailHeaderProps {
  content: string;
}
