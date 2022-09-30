import React, { useState } from 'react';
import { ReactComponent as Reservation1 } from '../assets/bottomItem1.svg';
import { ReactComponent as Reservation2 } from '../assets/bottomItem2.svg';
import { ReactComponent as Reservation3 } from '../assets/bottomItem3.svg';
import { ReactComponent as Reservation4 } from '../assets/bottomItem4.svg';
import { ReactComponent as Reservation5 } from '../assets/bottomItem5.svg';
import { ReactComponent as ActivateReservation1 } from '../assets/activated_bottomItem1.svg';
import { ReactComponent as ActivateReservation2 } from '../assets/activated_bottomItem2.svg';
import { ReactComponent as ActivateReservation3 } from '../assets/activated_bottomItem3.svg';
import { ReactComponent as ActivateReservation4 } from '../assets/activated_bottomItem4.svg';
import { ReactComponent as ActivateReservation5 } from '../assets/activated_bottomItem5.svg';

function BottomNavigationBar() {
  const [tab, setTab] = useState(3);
  return (
    <div className="fixed bottom-0 w-full flex justify-center">
      <div className="w-[405px] grid grid-cols-5 gap-2 pb-[20px]">
        {tab === 1 ? (
          <ActivateReservation1 />
        ) : (
          <Reservation1
            onClick={() => {
              setTab(1);
            }}
          />
        )}
        {tab === 2 ? (
          <ActivateReservation2 />
        ) : (
          <Reservation2
            onClick={() => {
              setTab(2);
            }}
          />
        )}
        {tab === 3 ? (
          <ActivateReservation3 />
        ) : (
          <Reservation3
            onClick={() => {
              setTab(3);
            }}
          />
        )}
        {tab === 4 ? (
          <ActivateReservation4 />
        ) : (
          <Reservation4
            onClick={() => {
              setTab(4);
            }}
          />
        )}
        {tab === 5 ? (
          <ActivateReservation5 />
        ) : (
          <Reservation5
            onClick={() => {
              setTab(5);
            }}
          />
        )}
      </div>
    </div>
  );
}

export default BottomNavigationBar;
