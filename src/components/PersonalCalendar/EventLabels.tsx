import { useContext } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

import GlobalContext from '@/context/GlobalContext';

export function EventLabels({ evt, dayEvents, day }: {
  evt: any;
  dayEvents: any;
  day: any;
}) {
  const { setSelectedEvent, setDaySelected, setShowEventModal, dispatchCalEvent } = useContext(GlobalContext);

  const height = dayEvents.length === 3 ? 'h-2/6' : dayEvents.length === 2 ? 'h-3/6' : 'h-full';

  return (
    <div
      onClick={() => setSelectedEvent(evt)}
      className={`${evt.label} ${height} p-1 text-white text-sm rounded truncate`}
    >
      <div className="flex p-1 justify-between">
        <div>
          <div>{evt.title}</div>
          <div>{evt.email}</div>
          <div>{evt.time}</div>
        </div>
        <div className="flex rounded-md">
          <FaEdit
            className="cursor-pointer mr-2"
            onClick={() => {
              setDaySelected(day.a);
              setShowEventModal(true);
            }}
          />
          <FaTrash
            className="cursor-pointer"
            onClick={() => {
              dispatchCalEvent({
                type: 'delete',
                payload: evt,
              });
            }}
          />
        </div>
      </div>
    </div>
  );
}
