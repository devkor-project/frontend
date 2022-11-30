import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { palette } from '../../constants/palette';
import { getHeightPixel, getWidthPixel } from '../../utils/responsive';
import { ReactComponent as Notification_Icon } from '../../assets/icon/notification.svg';
import NoticeModal from '../Modal/NoticeModal';

export default function TitleHeaderContainer() {
  const [isVisible, setVisible] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  return (
    <ContainerStyled>
      <button onClick={() => setVisible(true)} ref={buttonRef}>
        <BellIconStyled />
      </button>
      <NoticeModal
        isVisible={isVisible}
        setVisible={setVisible}
        locX={buttonRef.current?.getBoundingClientRect().x || 0}
        locY={buttonRef.current?.getBoundingClientRect().y || 0}
      />
    </ContainerStyled>
  );
}

const ContainerStyled = styled.div`
  position: absolute;
  margin-left: ${getWidthPixel(365)};
  margin-top: ${getHeightPixel(2)};
`;

const BellIconStyled = styled(Notification_Icon)`
  width: ${getWidthPixel(16)};
  height: ${getWidthPixel(22)};
`;
