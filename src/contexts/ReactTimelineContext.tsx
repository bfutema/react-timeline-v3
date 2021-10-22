import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useMemo,
  useState,
} from 'react';

import { PROJECTS_TO_USERS } from '@mocks/timeline';
import { addDays } from 'date-fns/esm';
import { v4 } from 'uuid';

import { TimelineHelper } from '@helpers/TimelineHelper';
import { ITimelineData } from '@interfaces/Timeline';

export type IBar = { left: number; width: number };
export type ICalendarItem = { date: Date; start: number };

export interface ITimelineContext {
  keys: { users: string; data: string };
  timelineData: ITimelineData;
  setTimelineData: Dispatch<SetStateAction<ITimelineData>>;
  calendarItem: ICalendarItem[];
  setCalendarItem: Dispatch<SetStateAction<ICalendarItem[]>>;
}

const TimelineContext = createContext<ITimelineContext>({} as ITimelineContext);

function loadArray(qtd: number) {
  const array = [];

  for (let i = 0; i < qtd; i++) {
    array.push({ date: addDays(new Date(`${2021}-${8}-${1}`), i), start: i });
  }

  return array;
}

const TimelineProvider: React.FC = ({ children }) => {
  const [timelineData, setTimelineData] = useState<ITimelineData>({
    PROJECTS_TO_USERS: TimelineHelper.getProjectsToUsers(PROJECTS_TO_USERS),
    USERS_TO_PROJECTS: [],
  });

  const [calendarItem, setCalendarItem] = useState<ICalendarItem[]>(
    loadArray(365 * 1),
  );

  const keys = useMemo(() => {
    return {
      users: `timeline-${v4()}-users`,
      data: `timeline-${v4()}-viewPortData`,
    };
  }, []);

  const value = useMemo(
    () => ({
      keys,
      timelineData,
      setTimelineData,
      calendarItem,
      setCalendarItem,
    }),
    [keys, timelineData, setTimelineData, calendarItem, setCalendarItem],
  );

  return (
    <TimelineContext.Provider value={value}>
      {children}
    </TimelineContext.Provider>
  );
};

export { TimelineContext, TimelineProvider };
