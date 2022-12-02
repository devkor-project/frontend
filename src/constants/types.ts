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
}

export interface DropDownInputProps extends InputProps {
  dividerWidth?: string;
  selected: number;
  list: string[];
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
  emailWarningCode: string;
  codeWarningCode: string;
  formatWarningCode: string;
  repeatWarningCode: string;
}

export interface providerListProps {
  provider: CategoryListProps[];
}

export interface CategoryListProps {
  categoryId: number;
  categoryName: string;
}
