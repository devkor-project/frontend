import React, { useState } from 'react';
import styled from 'styled-components';
import { palette } from '../constants/palette';
import { getHeightPixel, getPixelToPixel, getWidthPixel } from '../utils/responsive';
import { ReactComponent as DoCancel_Icon } from '../assets/icon/doCancel.svg';
import { ReactComponent as DoScrap_Icon } from '../assets/icon/doScrap.svg';
import { ReactComponent as DoneScrap_Icon } from '../assets/icon/doneScrap.svg';
import { ReactComponent as DoShare_Icon } from '../assets/icon/doShare.svg';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { isExpired } from '../utils/refresh';
import { BASE__URL } from '../constants';
import { useSelector } from 'react-redux';
import { number } from 'yargs';
import { useCookies } from 'react-cookie';

const OptionBar = ({ isScraped, idx }: { isScraped: string; idx: number }) => {
  const [isScrapedd, setIsScrapedd] = useState(isScraped);
  const token = useSelector((store: any) => store.tokenReducer);
  const navigate = useNavigate();
  const [, , removeCookie] = useCookies(['refreshToken']);
  const onClickCancel = () => {
    // 취소 버튼 누르면 이전 페이지로 이동
    navigate(-1);
    console.log('이전 페이지로 이동');
  };
  const onClickScrap = async (idx: number) => {
    // TODO 서버에 저장 get request
    console.log(token.payload.accessToken);
    isExpired(token, removeCookie);
    axios.defaults.headers.common['x-auth-token'] = token.payload.accessToken;
    const res = await axios.put(`${BASE__URL}scraps/${idx}`, {
      whetherScrap: isScrapedd === 'Y' ? false : true,
    });
    console.log(res);
    if (res.data.success) {
      setIsScrapedd(isScrapedd === 'Y' ? 'N' : 'Y');
    }
  };

  const onClickShare = () => {
    // 링크 생성
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    alert('링크가 복사되었습니다.');
  };
  return (
    <OptionBarStyled>
      <DoCancel_IconStyled onClick={onClickCancel}>
        <DoCancel_Icon />
      </DoCancel_IconStyled>
      {isScrapedd === 'N' ? (
        <DoScrap_IconStyled onClick={() => onClickScrap(idx)}>
          <DoScrap_Icon />
        </DoScrap_IconStyled>
      ) : (
        <DoScrap_IconStyled onClick={() => onClickScrap(idx)}>
          <DoneScrap_Icon />
        </DoScrap_IconStyled>
      )}
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
