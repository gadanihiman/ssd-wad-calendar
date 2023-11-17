import React from 'react';

const GlobalContext = React.createContext<
  {
    daySelected: null | Date;
    // setDaySelected: (day: Date) => void;
    setDaySelected: (day: any) => void;
    showEventModal: boolean;
    setShowEventModal: (show: boolean) => void;
    dispatchCalEvent: ({ type, payload }: { type: string; payload: any }) => void;
    savedEvents: any[];
    selectedEvent: any;
    setSelectedEvent: (event: any) => void;
    filteredEvents: any[];
  }
>({
  daySelected: null,
  setDaySelected: (day) => {},
  showEventModal: false,
  setShowEventModal: () => {},
  dispatchCalEvent: ({ type, payload }) => {},
  savedEvents: [],
  selectedEvent: null,
  setSelectedEvent: () => {},
  filteredEvents: [],
});

export default GlobalContext;
