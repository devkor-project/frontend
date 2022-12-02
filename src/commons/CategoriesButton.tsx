import React from 'react';
import NotoText from '../components/Text/NotoText';
import { palette } from '../constants/palette';
import { getPixelToPixel } from '../utils/responsive';

const CategoriesButton = ({
  title,
  isSelected,
  changeCategory,
}: {
  title: string;
  isSelected: boolean;
  changeCategory: any;
}) => {
  if (isSelected) {
    return (
      <button
        className="bg-[#CE4040A6] h-[44px] w-max whitespace-nowrap mx-[4px] px-[24px] pt-[10px] pb-[12px]  rounded-[208px] border-[2px] border-[#CDCDCD]"
        onClick={changeCategory}
      >
        <NotoText fontSize={getPixelToPixel(14)} fontWeight="500" fontColor={palette.white}>
          {title}
        </NotoText>
      </button>
    );
  } else {
    return (
      <button
        className="h-[44px] w-max whitespace-nowrap mx-[4px] px-[24px] pt-[10px] pb-[12px] rounded-[208px] border-[2px] border-[#CDCDCD]"
        onClick={changeCategory}
      >
        <NotoText fontSize={getPixelToPixel(14)} fontWeight="500">
          {title}
        </NotoText>
      </button>
    );
  }
};

export default CategoriesButton;
