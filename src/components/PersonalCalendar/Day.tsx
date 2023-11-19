import React, { useContext, useState, useEffect } from 'react';
import GlobalContext from '@/context/GlobalContext';
import { convertTimeStamp, getDay } from '@/utils';
import { EventLabels } from './EventLabels';

function formatDateString(dateString: string) {
  return new Date(dateString).toISOString().split('T')[0];
}

export default function Day({ day, rowIdx }: { day: { a: string | number; m: string }, rowIdx: number }) {
  const [dayEvents, setDayEvents] = useState<
    {
      id: string;
      title: string;
      day: string;
      time: string;
      description: string;
      location: string;
    }[]
  >([]);
  const { setDaySelected, setShowEventModal, filteredEvents } = useContext(GlobalContext);

  useEffect(() => {
    const events = filteredEvents.filter((evt) => convertTimeStamp(evt.day) === convertTimeStamp(day.a)).sort((a, b) => {
      const aTime = new Date(`${formatDateString(a.day)}T${a.time}Z`).getTime();
      const bTime = new Date(`${formatDateString(b.day)}T${b.time}Z`).getTime();
      return aTime - bTime;
    }) || [];
    setDayEvents(events);
  }, [filteredEvents, day]);

  const dateNumber = day.m === '2' ? getDay(day.a) : '';

  return (
    <div className="border border-gray-200 flex flex-col font-poppins">
      <header
        className="flex flex-col items-center cursor-pointer bg-gray-100 hover:bg-gray-200 h-8"
        onClick={() => {
          setDaySelected(day.a);
          setShowEventModal(true);
        }}
      >
        <p className="text-sm p-1 my-1 text-center">{dateNumber}</p>
      </header>
      {dayEvents.length ? (
        <div className="flex-1 hover:bg-gray-200">
          {dayEvents.map((evt, idx) => {
            return (
              <React.Fragment key={idx}>
                <EventLabels evt={evt} dayEvents={dayEvents} day={day} />
              </React.Fragment>
            );
          })}
        </div>
      ) : (
        <div
          className="flex-1 hover:bg-gray-200 cursor-pointer"
          onClick={() => {
            setDaySelected(day.a);
            setShowEventModal(true);
          }}
        >
          {dayEvents.map((evt, idx) => {
            return (
              <React.Fragment key={idx}>
                <EventLabels evt={evt} dayEvents={dayEvents} day={day} />
              </React.Fragment>
            );
          })}
        </div>
      )}
    </div>
  );
}
