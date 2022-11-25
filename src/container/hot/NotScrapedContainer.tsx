import React from 'react';
import { ReactComponent as NotScrapedText_Icon } from '../../assets/icon/notScrapedItemText.svg';
import imgNotScraped_Icon from '../../assets/icon/notScrapedItemImage.svg';
import { getPixelToPixel } from '../../utils/responsive';

const NotScrapedContainer = () => {
  return (
    <div className="w-full flex flex-col justify-end items-center mt-[124px]">
      <img src={imgNotScraped_Icon} width={getPixelToPixel(141)} height={getPixelToPixel(137)} />
      <NotScrapedText_Icon />
    </div>
  );
};

export default NotScrapedContainer;
