import React, { useState } from 'react';
import { ReactComponent as Reservation1 } from '../assets/bottomNavigationBar/bottomItem1.svg';
import { ReactComponent as Reservation2 } from '../assets/bottomNavigationBar/bottomItem2.svg';
import { ReactComponent as Reservation3 } from '../assets/bottomNavigationBar/bottomItem3.svg';
import { ReactComponent as Reservation4 } from '../assets/bottomNavigationBar/bottomItem4.svg';
import { ReactComponent as Reservation5 } from '../assets/bottomNavigationBar/bottomItem5.svg';
import { ReactComponent as ActivateReservation1 } from '../assets/bottomNavigationBar/activated_bottomItem1.svg';
import { ReactComponent as ActivateReservation2 } from '../assets/bottomNavigationBar/activated_bottomItem2.svg';
import { ReactComponent as ActivateReservation3 } from '../assets/bottomNavigationBar/activated_bottomItem3.svg';
import { ReactComponent as ActivateReservation4 } from '../assets/bottomNavigationBar/activated_bottomItem4.svg';
import { ReactComponent as ActivateReservation5 } from '../assets/bottomNavigationBar/activated_bottomItem5.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import { getHeightPixel, getWidthPixel } from '../utils/responsive';
import styled from 'styled-components';
import { palette } from '../constants/palette';

function BottomNavigationBar() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <BottomNavigationBarPageStyled>
      <BottomNavigationBarStyled>
        {location.pathname === '/mail' ? (
          <div className="mx-auto my-auto">
            <ActivateReservation1 />
          </div>
        ) : (
          <div className="mx-auto my-auto">
            <Reservation1
              onClick={() => {
                navigate('/mail');
              }}
            />
          </div>
        )}
        {location.pathname === '/hot' ? (
          <div className="mx-auto my-auto">
            <ActivateReservation2 />
          </div>
        ) : (
          <div className="mx-auto my-auto">
            <Reservation2
              onClick={() => {
                navigate('/hot');
              }}
            />
          </div>
        )}
        {location.pathname === '/' ? (
          <div className="mx-auto my-auto">
            <ActivateReservation3 />
          </div>
        ) : (
          <div className="mx-auto my-auto">
            <Reservation3
              onClick={() => {
                navigate('/');
              }}
            />
          </div>
        )}
        {location.pathname === '/bookmark' ? (
          <div className="mx-auto my-auto">
            <ActivateReservation4 />
          </div>
        ) : (
          <div className="mx-auto my-auto">
            <Reservation4
              onClick={() => {
                navigate('/bookmark');
              }}
            />
          </div>
        )}
        {location.pathname === '/mypage' ? (
          <div className="mx-auto my-auto">
            <ActivateReservation5 />
          </div>
        ) : (
          <div className="mx-auto my-auto">
            <Reservation5
              onClick={() => {
                navigate('/mypage');
              }}
            />
          </div>
        )}
      </BottomNavigationBarStyled>
    </BottomNavigationBarPageStyled>
  );
}

export default BottomNavigationBar;

const BottomNavigationBarPageStyled = styled.div`
  background-color: ${palette.white};
  width: ${getWidthPixel(405)};
  height: ${getHeightPixel(66)};
  position: fixed;
  bottom: 0;
  box-shadow: 0px -4px 8px 0px #69696926;
`;

const BottomNavigationBarStyled = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;
