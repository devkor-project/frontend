type PaletteType = {
  [index: string]: string;
};

export const palette: PaletteType = {
  red: '#FF0000',
  orange: '#FFA500',
  yellow: '#FFFF00',
  green: '#06C755',
  blue: '#0000FF',
  indigo: '#4B0082',
  violet: '#EE82EE',
  white: '#FFFFFF',
  black: '#000000',
  pink: '#DF8383',
  gray: '#CDCDCD',
  gray_01: '#696969',
  gray_02: '#A4A4A4',
  gray_03: '#CDCDCD',
  gray_04: '#D9D9D9',
  gray_05: '#999999',
  crimson: '#CE4040',
  crimson_02: '#DF8383',
  none: '#ffffff00',
};

export type PaletteKeyTypes = keyof typeof palette;
