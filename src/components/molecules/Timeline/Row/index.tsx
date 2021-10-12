import React, { useEffect, useRef } from 'react';

import { TimelineBar, TimelineDay } from '@components/atoms';

import { Container } from './styles';

const days = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31,
];

const Row: React.FC = () => {
  const timelineRowRef = useRef<HTMLDivElement>(null);
  const timelineDaysRef = useRef<HTMLDivElement[]>(null);

  useEffect(() => {
    if (timelineRowRef.current) {
      const { width, x } = timelineRowRef.current.getBoundingClientRect();

      console.log({ width }, width / 47, days.length / width, x);
    }
  }, []);

  return (
    <Container ref={timelineRowRef} className="timeline-row">
      {days.map(day => {
        return <TimelineDay key={day} date={new Date(2021, 9, day)} />;
      })}

      <TimelineBar />

      <div />
    </Container>
  );
};

export { Row as TimelineRow };
