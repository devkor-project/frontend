import React from 'react';
import { NoticeProps } from '../constants/types';
import NoticeItem from './NoticeItem';
import { palette } from '../constants/palette';
import styled from 'styled-components';
import { getPixelToPixel } from '../utils/responsive';
function NoticeListContainer({
  NoticeList,
  changeBookmark,
  goNoticeDetail,
}: {
  NoticeList: NoticeProps[];
  changeBookmark: any;
  goNoticeDetail: any;
}) {
  return (
    <NoticeListWrapper>
      <div className="w-full">
        {NoticeList.map((notice, idx) => {
          return (
            <NoticeItem
              key={idx}
              title={notice.title}
              date={notice.date}
              isBookmarked={notice.isScraped}
              bookmark={() => {
                changeBookmark(notice.noticeId);
              }}
              goNoticeDetail={() => {
                goNoticeDetail(notice.noticeId);
              }}
            />
          );
        })}
      </div>
    </NoticeListWrapper>
  );
}

export default NoticeListContainer;

const NoticeListWrapper = styled.div`
  background-color: ${palette.white};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  // margin-bottom: ${getPixelToPixel(44)};
  shadow: 0px, 0px, -4px, 8px, rgba(105, 56, 56, 0.15);
`;
