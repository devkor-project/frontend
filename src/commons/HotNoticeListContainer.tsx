import React from 'react';
import { NoticeProps } from '../constants/types';
import NoticeItem from './NoticeItem';
import { palette } from '../constants/palette';
import styled from 'styled-components';
import { getPixelToPixel } from '../utils/responsive';
import RankDisplay from './RankDisplay';
function HotNoticeListContainer({
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
          if (idx < 3 && idx >= 0) {
            return (
              <div key={idx} className="flex flex-row">
                <RankDisplay rank={idx + 1} />
                <NoticeItem
                  title={notice.title}
                  date={notice.date}
                  isBookmarked={notice.isScraped}
                  bookmark={() => {
                    changeBookmark(notice.noticeId);
                  }}
                  goNoticeDetail={() => {
                    console.log(notice.noticeId);
                    goNoticeDetail(notice.noticeId);
                  }}
                />
              </div>
            );
          } else {
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
                  console.log(notice.noticeId);
                  goNoticeDetail(notice.noticeId);
                }}
              />
            );
          }
        })}
      </div>
    </NoticeListWrapper>
  );
}

export default HotNoticeListContainer;

const NoticeListWrapper = styled.div`
  background-color: ${palette.white};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  margin-bottom: ${getPixelToPixel(44)};
  shadow: 0px, 0px, -4px, 8px, rgba(105, 56, 56, 0.15);
`;
