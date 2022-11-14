import { Component, Dispatch, ReactNode, SetStateAction } from 'react';
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

export interface InputProps<T> extends ContainerProps {
  placeHolder?: string;
  setFunc: Dispatch<SetStateAction<T>>;
  type?: string;
  fontSize: string;
  icon?: ReactNode;
  text?: string;
  selected?: T;
  fontWeight?: string;
  children?: ReactNode;
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
  id: number;
  title: string;
}

export interface NoticeProps {
  id: number;
  title: string;
  date: string;
  detail: string;
  isBookmarked: boolean;
}
