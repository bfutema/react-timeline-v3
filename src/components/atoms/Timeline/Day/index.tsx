import React, { useMemo } from 'react';
// import Ink from 'react-ink';

import { isWeekend } from 'date-fns';

import { Container } from './styles';

interface IDayProps {
  date: Date;
}

const Day: React.FC<IDayProps> = ({ date }) => {
  const itsWeekend = useMemo(() => isWeekend(date), [date]);

  return <Container itsWeekend={itsWeekend} />;
};

export { Day as TimelineDay };
