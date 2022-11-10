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

function BottomNavigationBar() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="absolute bottom-0 flex justify-center bg-white">
      <div className="w-[405px] grid grid-cols-5 gap-2">
        {location.pathname === '/mail' ? (
          <ActivateReservation1 />
        ) : (
          <Reservation1
            onClick={() => {
              navigate('/mail');
            }}
          />
        )}
        {location.pathname === '/hot' ? (
          <ActivateReservation2 />
        ) : (
          <Reservation2
            onClick={() => {
              navigate('/hot');
            }}
          />
        )}
        {location.pathname === '/' ? (
          <ActivateReservation3 />
        ) : (
          <Reservation3
            onClick={() => {
              navigate('/');
            }}
          />
        )}
        {location.pathname === '/bookmark' ? (
          <ActivateReservation4 />
        ) : (
          <Reservation4
            onClick={() => {
              navigate('/bookmark');
            }}
          />
        )}
        {location.pathname === '/mypage' ? (
          <ActivateReservation5 />
        ) : (
          <Reservation5
            onClick={() => {
              navigate('/mypage');
            }}
          />
        )}
      </div>
    </div>
  );
}

export default BottomNavigationBar;
