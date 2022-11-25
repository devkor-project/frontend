import React from 'react';
import styled from 'styled-components';
import { palette } from '../constants/palette';
import { getHeightPixel, getPixelToPixel, getWidthPixel } from '../utils/responsive';
import { ReactComponent as DoCancel_Icon } from '../assets/icon/doCancel.svg';
import { ReactComponent as DoScrap_Icon } from '../assets/icon/doScrap.svg';
import { ReactComponent as DoShare_Icon } from '../assets/icon/doShare.svg';
import { useNavigate } from 'react-router-dom';
import { log } from 'console';

const OptionBar = () => {
  const navigate = useNavigate();
  const onClickCancel = () => {
    // 취소 버튼 누르면 이전 페이지로 이동
    navigate(-1);
    console.log('이전 페이지로 이동');
  };
  const onClickScrap = () => {
    // 북마크 변경
    console.log('북마크 변경');
  };
  const onClickShare = () => {
    // 링크 생성
    const url = 'sample.com';
    navigator.clipboard.writeText(url);
    alert('링크가 복사되었습니다.');
  };
  return (
    <OptionBarStyled>
      <DoCancel_IconStyled onClick={onClickCancel}>
        <DoCancel_Icon />
      </DoCancel_IconStyled>
      <DoScrap_IconStyled onClick={onClickScrap}>
        <DoScrap_Icon />
      </DoScrap_IconStyled>
      <DoShare_IconStyled onClick={onClickShare}>
        <DoShare_Icon />
      </DoShare_IconStyled>
    </OptionBarStyled>
  );
};

export default OptionBar;
const OptionBarStyled = styled.div`
  position: fixed;
  bottom: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: ${getHeightPixel(66)};
  width: ${getWidthPixel(405)};
  background-color: ${palette.crimson};
  border-radius: ${getPixelToPixel(30)} ${getPixelToPixel(30)} 0px 0px;
`;

const DoCancel_IconStyled = styled.div`
  margin-left: ${getPixelToPixel(25)};
`;
const DoScrap_IconStyled = styled.div`
  margin-left: ${getPixelToPixel(148)};
`;
const DoShare_IconStyled = styled.div`
  margin-left: ${getPixelToPixel(140)};
`;
