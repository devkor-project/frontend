import React from 'react';
import { ReactComponent as IsBookmarked } from '../assets/isBookmarked.svg';
import { ReactComponent as IsNotBookmarked } from '../assets/isNotBookmarked.svg';

const NoticeItem = ({
  title,
  date,
  isBookmarked,
  bookmark,
}: {
  title: string;
  date: string;
  isBookmarked: boolean;
  bookmark: () => void;
}) => {
  return (
    <div className="w-full px-[24px] h-[71px] flex flex-row">
      <div>
        <div className="text-black font-[700] text-[16px] leading-[23.17px]">{title}</div>
        <div className="text-[#7E7E7E] font-[400] text-[10px] leading-[14.48px]">{date}</div>
      </div>
      <div className="pl-[26px] pt-[4px]">
        {isBookmarked ? (
          <IsBookmarked width="16" height="20" onClick={bookmark} />
        ) : (
          <IsNotBookmarked width="16" height="20" onClick={bookmark} />
        )}
      </div>
    </div>
  );
};

export default NoticeItem;
