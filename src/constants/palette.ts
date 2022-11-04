type PaletteType = {
  [index: string]: string;
};

export const palette: PaletteType = {
  red: '#FF0000',
  orange: '#FFA500',
  yellow: '#FFFF00',
  green: '#008000',
  blue: '#0000FF',
  indigo: '#4B0082',
  violet: '#EE82EE',
  white: '#FFFFFF',
  black: '#000000',
  pink: '#DF8383',
  gray: '#CDCDCD',
  gray_02: '#7E7E7E',
  gray_03: '#A4A4A4',
  gray_04: '#D9D9D9',
  crimson: '#CE4040',
  none: '#ffffff00',
};

export type PaletteKeyTypes = keyof typeof palette;
