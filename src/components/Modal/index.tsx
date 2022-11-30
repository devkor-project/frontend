import React, { Dispatch, SetStateAction } from 'react';
import ReactModal from 'react-modal';
import styled, { css } from 'styled-components';
import { palette } from '../../constants/palette';
import { getWidthPixel, getHeightPixel, REAL__WIDTH, REAL__HEIGHT, getPixelToPixel } from '../../utils/responsive';
import { ReactComponent as ExitIcon } from '../../assets/button/exit.svg';
import NotoText from '../Text/NotoText';

export default function Modal({
  isVisible,
  setVisible,
  locX,
  locY,
  text,
}: {
  isVisible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  locX?: number;
  locY?: number;
  text: string;
}) {
  return (
    <ModalStyled
      isOpen={isVisible}
      onRequestClose={() => setVisible(false)}
      style={customStyles}
      locX={locX}
      locY={locY}
      ariaHideApp={false}
    >
      <ButtonStyled onClick={() => setVisible(false)}>
        <ExitIconStyled />
      </ButtonStyled>
      <NotoText fontSize={getPixelToPixel(16)}>{text}</NotoText>
    </ModalStyled>
  );
}

const ModalStyled = styled(ReactModal)<{ locX?: number; locY?: number }>`
  width: ${getWidthPixel(365)};
  height: ${getHeightPixel(300)};
  background-color: white;
  box-shadow: 0 4px 8px 0px #68686826;
  border-radius: ${getWidthPixel(30)};
  position: absolute;
  ${({ locX = REAL__WIDTH / 2, locY = REAL__HEIGHT / 2 }) => css`
    top: ${locY.toString()}px;
    left: ${locX.toString()}px;
  `}
  margin-left: ${getWidthPixel(20)};
  margin-top: -${getHeightPixel(100)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const customStyles = {
  overlay: {
    backgroundColor: palette.none,
  },
};

const ButtonStyled = styled.button`
  position: absolute;
  left: ${getWidthPixel(20)};
  top: ${getWidthPixel(20)};
`;

const ExitIconStyled = styled(ExitIcon)`
  width: ${getWidthPixel(19)};
  height: ${getWidthPixel(19)};
`;
