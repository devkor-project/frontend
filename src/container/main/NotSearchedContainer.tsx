import React from 'react';
import { ReactComponent as NotSearchedText_Icon } from '../../assets/icon/notSearchedItemText.svg';
import imgNotSearched_Icon from '../../assets/icon/notSearchedItemImage.svg';
import { getPixelToPixel } from '../../utils/responsive';

const NotSearchedContainer = () => {
  return (
    <div className="w-full flex flex-col justify-end items-center mt-[124px]">
      <img src={imgNotSearched_Icon} width={getPixelToPixel(149.98)} height={getPixelToPixel(170.73)} />
      <NotSearchedText_Icon />
    </div>
  );
};

export default NotSearchedContainer;
