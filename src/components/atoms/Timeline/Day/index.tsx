import React, { useMemo } from 'react';

import { isWeekend } from 'date-fns';

import { ICalendarItem } from '@contexts/ReactTimelineContext';

import { Container } from './styles';

interface IDayProps {
  item: ICalendarItem;
}

const Day: React.FC<IDayProps> = ({ item }) => {
  const itsWeekend = useMemo(() => isWeekend(item.date), [item.date]);

  return (
    <Container
      itsWeekend={itsWeekend}
      onClick={() => console.log('Abrindo modal', item)}
    />
  );
};

export { Day as TimelineDay };
