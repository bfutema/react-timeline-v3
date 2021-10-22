import React, { RefObject } from 'react';

import { differenceInDays, isEqual } from 'date-fns';
import { v4 } from 'uuid';

import { TimelineBar, TimelineDay } from '@components/atoms';
import { useTimeline } from '@hooks/useTimeline';
import { ITimelineRow } from '@interfaces/Timeline';

import { Container } from './styles';

interface ICalendarRowProps {
  dayWidth: number;
  item: ITimelineRow;
  headerRef: RefObject<HTMLDivElement>;
  sideRef: RefObject<HTMLDivElement>;
  calendarRef: RefObject<HTMLDivElement>;
}

const CalendarRow: React.FC<ICalendarRowProps> = ({
  dayWidth,
  item,
  headerRef,
  sideRef,
  calendarRef,
}) => {
  const { calendarItem } = useTimeline();

  return (
    <Container className="timeline-row">
      {calendarItem.map(cItem => {
        return <TimelineDay key={v4()} item={cItem} />;
      })}

      {item.bars.map(bar => {
        const foundedPosition = calendarItem.find(cItem =>
          isEqual(cItem.date, bar.start),
        );

        if (!foundedPosition) return undefined;

        const diff = differenceInDays(bar.end, bar.start);
        const calcBar = {
          left: dayWidth * foundedPosition.start,
          width: dayWidth * diff + dayWidth,
        };

        return (
          <TimelineBar
            key={v4()}
            bar={calcBar}
            color={bar.color}
            snap={dayWidth}
            headerRef={headerRef}
            sideRef={sideRef}
            calendarRef={calendarRef}
          />
        );
      })}
    </Container>
  );
};

export { CalendarRow as TimelineCalendarRow };
