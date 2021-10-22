import { useContext } from 'react';

import {
  TimelineContext,
  ITimelineContext,
} from '@contexts/ReactTimelineContext';

function useTimeline(): ITimelineContext {
  const context = useContext(TimelineContext);

  return context;
}

export { useTimeline };
