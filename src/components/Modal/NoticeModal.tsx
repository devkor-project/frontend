import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import ReactModal from 'react-modal';
import { getWidthPixel, getHeightPixel, getPixelToPixel } from '../../utils/responsive';
import { palette } from '../../constants/palette';

import { ReactComponent as BellIcon } from '../../assets/icon/notification_crimson.svg';
import { ReactComponent as ExitIcon } from '../../assets/button/exit.svg';
import ImageIcon from '../../assets/image/notice_warning.png';
import NotoText from '../Text/NotoText';
import { NOTICE__MODAL__TEXT } from '../../constants/text';
import { AdminNoticeProps } from '../../constants/types';
import { getAdminNotice } from '../../utils/api_user';
import NoticeDetailContainer from '../../container/Detail/NoticeDetailContainer';
import Blank from '../Blank';

export default function NoticeModal({
  isVisible,
  setVisible,
  locX,
  locY,
}: {
  isVisible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  locX: number;
  locY: number;
}) {
  const [noticeList, setList] = useState<AdminNoticeProps[]>([]);
  useEffect(() => {
    getAdminNotice({ setData: setList });
  }, []);
  return (
    <ModalStyled
      isOpen={isVisible}
      onRequestClose={() => setVisible(false)}
      style={customStyles}
      locX={locX}
      locY={locY}
      ariaHideApp={false}
    >
      <TitleContainerStyled>
        <ButtonStyled onClick={() => setVisible(false)}>
          <ExitIconStyled />
        </ButtonStyled>
        <BellIconStyled />
        <NotoText fontSize={getPixelToPixel(19)} fontWeight={'bold'}>
          {NOTICE__MODAL__TEXT.header.title[0]}
        </NotoText>
      </TitleContainerStyled>
      {noticeList.length === 0 ? <ImageStyled src={ImageIcon} /> : null}
      {noticeList.map(notice => {
        return <NoticeDetailContainer key={notice.title} {...notice} />;
      })}
      <Blank height={getHeightPixel(10)} />
    </ModalStyled>
  );
}

const ModalStyled = styled(ReactModal)<{ locX: number; locY: number }>`
  width: ${getWidthPixel(405)};
  background-color: white;
  box-shadow: 0 4px 8px 0px #68686826;
  border-radius: ${getWidthPixel(30)};
  position: absolute;
  ${({ locX, locY }) => css`
    top: ${locY.toString()}px;
    left: ${locX.toString()}px;
  `}
  margin-top: ${getWidthPixel(30)};
  margin-left: -${getWidthPixel(377)};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const customStyles = {
  overlay: {
    backgroundColor: palette.none,
  },
};

const BellIconStyled = styled(BellIcon)`
  width: ${getWidthPixel(16)};
  height: ${getWidthPixel(20)};
  margin-right: ${getWidthPixel(5)};
`;

const TitleContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: ${getHeightPixel(17)};
  margin-bottom: ${getHeightPixel(17)};
`;

const ExitIconStyled = styled(ExitIcon)`
  width: ${getWidthPixel(19)};
  height: ${getWidthPixel(19)};
`;

const ButtonStyled = styled.button`
  position: absolute;
  margin-left: -${getWidthPixel(150)};
`;

const ImageStyled = styled.img`
  width: ${getWidthPixel(180)};
  height: ${getWidthPixel(144)};
  padding-bottom: ${getHeightPixel(20)};
`;
