import React, { useRef, useState } from 'react';

import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { v4 } from 'uuid';

import { TimelineCalendarRow, TimelineItemRow } from '@components/molecules';
import { useTimeline } from '@hooks/useTimeline';

import {
  Container,
  Users,
  ViewportData,
  HeaderContainer,
  HeaderItems,
  HeaderViewportData,
  HeaderDay,
} from './styles';

interface ITimelineProps {
  dayWidth?: number;
}

const Timeline: React.FC<ITimelineProps> = ({
  dayWidth: dayWidthPassed = 47,
}) => {
  const { calendarItem, timelineData, keys } = useTimeline();

  const headerViewPortRef = useRef<HTMLDivElement>(null);

  const usersRef = useRef<HTMLDivElement>(null);
  const viewportDataRef = useRef<HTMLDivElement>(null);

  const [dayWidth] = useState<number>(dayWidthPassed);
  const [asideWidth] = useState<number>(300);

  return (
    <Container asideWidth={asideWidth} className="timeline">
      <HeaderContainer asideWidth={asideWidth} className="header">
        <HeaderItems>
          <TimelineItemRow
            item={{
              id: 0,
              name: 'Projetos',
              type: 'header',
              bars: [],
              startDate: calendarItem[0].date,
              endDate: calendarItem[0].date,
            }}
          />
        </HeaderItems>

        <HeaderViewportData ref={headerViewPortRef}>
          {calendarItem.map(item => {
            return (
              <HeaderDay key={v4()}>
                <strong>{format(item.date, 'd EEE', { locale: ptBR })}</strong>
              </HeaderDay>
            );
          })}
        </HeaderViewportData>
      </HeaderContainer>

      <Users id={keys.users} ref={usersRef}>
        {timelineData.PROJECTS_TO_USERS.map(item => {
          return <TimelineItemRow key={v4()} item={item} />;
        })}
      </Users>

      <ViewportData id={keys.data} ref={viewportDataRef}>
        {timelineData.PROJECTS_TO_USERS.map(item => {
          return (
            <TimelineCalendarRow
              key={v4()}
              dayWidth={dayWidth}
              item={item}
              headerRef={headerViewPortRef}
              sideRef={usersRef}
              calendarRef={viewportDataRef}
            />
          );
        })}
      </ViewportData>
    </Container>
  );
};

export { Timeline };
