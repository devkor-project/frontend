import React from 'react';
import NotoText from '../components/Text/NotoText';
import { getPixelToPixel } from '../utils/responsive';

const CategoriesButton = ({
  title,
  isSelected,
  changeSelectedProvider,
}: {
  title: string;
  isSelected: boolean;
  changeSelectedProvider: any;
}) => {
  if (isSelected) {
    return (
      <button
        className="h-[47px] w-max whitespace-nowrap mx-[17px] pb-[11px]
        border-[#CE4040]
        border-b-[2.5px]"
        onClick={changeSelectedProvider}
      >
        <NotoText fontSize={getPixelToPixel(16)} fontWeight="700">
          {title}
        </NotoText>
      </button>
    );
  } else {
    return (
      <button
        className="h-[47px] w-max whitespace-nowrap mx-[17px] pb-[11px]
        border-[#CDCDCD]
        border-b-[0.5px]"
        onClick={changeSelectedProvider}
      >
        <NotoText fontSize={getPixelToPixel(16)} fontWeight="500">
          {title}
        </NotoText>
      </button>
    );
  }
};

export default CategoriesButton;
