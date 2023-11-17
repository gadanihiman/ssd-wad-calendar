import React, { useContext, useEffect, useState } from 'react'
import CalendarHeader from './Header';
import Month from './Month';
import EventModal from './EventModal';
import { getMonthGrid } from '@/utils';
import GlobalContext from '@/context/GlobalContext';

export default function PersonalCalendar() {
  const [currenMonth, setCurrentMonth] = useState(getMonthGrid(1));
  const { showEventModal } = useContext(GlobalContext);

  useEffect(() => {
      setCurrentMonth(getMonthGrid(1));
  }, []);

  return (
    <>
      <h1 className="text-center">Personal Calendar</h1>
      {showEventModal && <EventModal />}
      <div className="h-screen flex flex-col">
        <CalendarHeader />
        <div className="flex flex-1">
          <Month month={currenMonth} />
        </div>
      </div>
    </>
  )
}
