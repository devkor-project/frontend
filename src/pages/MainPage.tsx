import React, { useState } from 'react';
import BottomNavigationBar from '../commons/BottomNavigationBar';
import CategoriesButton from '../commons/CategoriesButton';
import NoticeItem from '../commons/NoticeItem';
// import { ReactComponent as Reservation } from '../assets/logo.svg';

const mockupData = [
  {
    id: 1,
    title: '2023학년도 제1학기 복수전공 전형 면접 일정 안내',
    date: '2021.09.01',
    detail: '2023학년도 제1학기 복수전공 전형 면접 일정 안내을 받았습니다.',
    isBookmarked: true,
  },
  {
    id: 2,
    title: '2023학년도 제1학기 복수전공 전형 면접 일정 안내',
    date: '2021.09.01',
    detail: '2023학년도 제1학기 복수전공 전형 면접 일정 안내을 받았습니다.',
    isBookmarked: false,
  },
  {
    id: 3,
    title: '2023학년도 제1학기 복수전공 전형 면접 일정 안내',
    date: '2021.09.01',
    detail: '2023학년도 제1학기 복수전공 전형 면접 일정 안내을 받았습니다.',
    isBookmarked: true,
  },
  {
    id: 4,
    title: '2023학년도 제1학기 복수전공 전형 면접 일정 안내',
    date: '2021.09.01',
    detail: '2023학년도 제1학기 복수전공 전형 면접 일정 안내을 받았습니다.',
    isBookmarked: false,
  },
  {
    id: 5,
    title: '2023학년도 제1학기 복수전공 전형 면접 일정 안내',
    date: '2021.09.01',
    detail: '2023학년도 제1학기 복수전공 전형 면접 일정 안내을 받았습니다.',
    isBookmarked: false,
  },
  {
    id: 6,
    title: '2023학년도 제1학기 복수전공 전형 면접 일정 안내',
    date: '2021.09.01',
    detail: '2023학년도 제1학기 복수전공 전형 면접 일정 안내을 받았습니다.',
    isBookmarked: false,
  },
  {
    id: 7,
    title: '2023학년도 제1학기 복수전공 전형 면접 일정 안내',
    date: '2021.09.01',
    detail: '2023학년도 제1학기 복수전공 전형 면접 일정 안내을 받았습니다.',
    isBookmarked: false,
  },
  {
    id: 8,
    title: '2023학년도 제1학기 복수전공 전형 면접 일정 안내',
    date: '2021.09.01',
    detail: '2023학년도 제1학기 복수전공 전형 면접 일정 안내을 받았습니다.',
    isBookmarked: false,
  },
  {
    id: 9,
    title: '2023학년도 제1학기 복수전공 전형 면접 일정 안내',
    date: '2021.09.01',
    detail: '2023학년도 제1학기 복수전공 전형 면접 일정 안내을 받았습니다.',
    isBookmarked: false,
  },
  {
    id: 1,
    title: '2023학년도 제1학기 복수전공 전형 면접 일정 안내',
    date: '2021.09.01',
    detail: '2023학년도 제1학기 복수전공 전형 면접 일정 안내을 받았습니다.',
    isBookmarked: false,
  },
  {
    id: 2,
    title: '2023학년도 제1학기 복수전공 전형 면접 일정 안내',
    date: '2021.09.01',
    detail: '2023학년도 제1학기 복수전공 전형 면접 일정 안내을 받았습니다.',
    isBookmarked: false,
  },
  {
    id: 3,
    title: '2023학년도 제1학기 복수전공 전형 면접 일정 안내',
    date: '2021.09.01',
    detail: '2023학년도 제1학기 복수전공 전형 면접 일정 안내을 받았습니다.',
    isBookmarked: false,
  },
  {
    id: 4,
    title: '2023학년도 제1학기 복수전공 전형 면접 일정 안내',
    date: '2021.09.01',
    detail: '2023학년도 제1학기 복수전공 전형 면접 일정 안내을 받았습니다.',
    isBookmarked: false,
  },
  {
    id: 5,
    title: '2023학년도 제1학기 복수전공 전형 면접 일정 안내',
    date: '2021.09.01',
    detail: '2023학년도 제1학기 복수전공 전형 면접 일정 안내을 받았습니다.',
    isBookmarked: false,
  },
  {
    id: 6,
    title: '2023학년도 제1학기 복수전공 전형 면접 일정 안내',
    date: '2021.09.01',
    detail: '2023학년도 제1학기 복수전공 전형 면접 일정 안내을 받았습니다.',
    isBookmarked: false,
  },
  {
    id: 7,
    title: '2023학년도 제1학기 복수전공 전형 면접 일정 안내',
    date: '2021.09.01',
    detail: '2023학년도 제1학기 복수전공 전형 면접 일정 안내을 받았습니다.',
    isBookmarked: false,
  },
  {
    id: 8,
    title: '2023학년도 제1학기 복수전공 전형 면접 일정 안내',
    date: '2021.09.01',
    detail: '2023학년도 제1학기 복수전공 전형 면접 일정 안내을 받았습니다.',
    isBookmarked: false,
  },
  {
    id: 9,
    title: '2023학년도 제1학기 복수전공 전형 면접 일정 안내',
    date: '2021.09.01',
    detail: '2023학년도 제1학기 복수전공 전형 면접 일정 안내을 받았습니다.',
    isBookmarked: false,
  },
];

const mockupCategory = [
  {
    id: 0,
    title: 'KUPID 전체',
  },
  {
    id: 1,
    title: '학사일정',
  },
  {
    id: 2,
    title: '일반 공지',
  },
  {
    id: 3,
    title: '장학금',
  },
  {
    id: 4,
    title: '학사일정',
  },
];

function MainPage() {
  const [category, setCategory] = useState(0);
  // TODO server에서 받아온 데이터를 저장하는 state
  // TODO 한번에 가져오지 말고 infinite scroll로 가져오기
  const [noticeData, setNoticeData] = useState(mockupData);

  const changeCategory = (idx: number) => {
    setCategory(idx);
    console.log(category);
  };

  const changeBookmark = (idx: number) => {
    // TODO 서버에 저장 get request
    const newNoticeData = noticeData.map(data => {
      if (data.id === idx) {
        return {
          ...data,
          isBookmarked: !data.isBookmarked,
        };
      }
      return data;
    });
    setNoticeData(newNoticeData);
  };
  return (
    // if you want to change full width, change below w-[405px]
    <div className="w-[405px] h-full font-noto">
      <div className="w-full h-full bg-crimson-red flex flex-col">
        <div className="h-[59px] pt-[21px] pb-[15px] flex justify-center">
          <img src={require('./logo.png')} height="100%" alt="dfdf" />
        </div>
        <div className="bg-white rounded-t-[30px] w-full flex items-center align flex-col">
          <div className=" bg-white w-[88%] min-h-[47px] border-[2px] border-[#999999] mt-[24px] mb-[11px] rounded-[208px]"></div>
        </div>
        <div className="bg-white pb-[29px] flex flex-row min-h-[73px] overflow-x-scroll scrollbar">
          {mockupCategory.map((cat, idx) => {
            return (
              <CategoriesButton
                key={idx}
                title={cat.title}
                isSelected={cat.id === category}
                onClick={() => changeCategory(cat.id)}
              />
            );
          })}
        </div>
        <div className="bg-white w-full flex items-center align flex-col overflow-y-scroll scrollbar pb-[44px] shadow-[0_0px_-4px_8px_rgba(105, 56, 56, 0.15)]">
          <div className="w-full">
            {noticeData.map((notice, idx) => {
              return (
                <NoticeItem
                  key={idx}
                  title={notice.title}
                  date={notice.date}
                  isBookmarked={notice.isBookmarked}
                  bookmark={() => {
                    changeBookmark(notice.id);
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
      <BottomNavigationBar />
    </div>
  );
}

export default MainPage;
