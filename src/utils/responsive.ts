import { isMobile } from 'react-device-detect';

export const REAL__WIDTH = window.innerWidth;
export const REAL__HEIGHT = screen.availHeight - (window.outerHeight - window.innerHeight) - 1;
export const FIGMA__WINDOW__WIDTH = 405;
export const FIGMA__WINDOW__HEIGHT = 720;
export const FIGMA__FRAME__WIDTH = 1280;
export const FIGMA__FRAME__HEIGHT = 720;
export const HEIGHT = REAL__HEIGHT;
export const WIDTH = isMobile ? REAL__WIDTH : getWidthForDesktop();

export function getWidthForDesktop() {
  const result = Math.round((FIGMA__WINDOW__WIDTH / FIGMA__WINDOW__HEIGHT) * REAL__HEIGHT);
  return result;
}

export function getPixelToPixel(size: number) {
  const scale = WIDTH / FIGMA__WINDOW__WIDTH;

  const newSize = size * scale;
  let result = 0;
  result = Math.round(newSize);
  return result.toString() + 'px';
}

export function getPixelToNumber(size: string) {
  size.replace('px', '');
  return parseInt(size);
}

export const getWidthPercentage = (width: number) => {
  const result = Math.round((width / FIGMA__WINDOW__WIDTH) * 100);
  return result.toString() + '%';
};

export const getWidthPixel = (width: number) => {
  const result = Math.round((width / FIGMA__WINDOW__WIDTH) * WIDTH);
  return result.toString() + 'px';
};

export const getHeightPercentage = (height: number) => {
  const result = Math.round((height / FIGMA__WINDOW__HEIGHT) * 100);
  return result.toString() + '%';
};

export const getHeightPixel = (height: number) => {
  const result = Math.round((height / FIGMA__WINDOW__HEIGHT) * HEIGHT);
  return result.toString() + 'px';
};

export const getHeightPixelByWidth = (width: number, height: number) => {
  const result = Math.round((height / width) * (width / FIGMA__WINDOW__WIDTH) * WIDTH);
  return result.toString() + 'px';
};
