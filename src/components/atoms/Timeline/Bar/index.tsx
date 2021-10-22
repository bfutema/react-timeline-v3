import React, {
  RefObject,
  CSSProperties,
  useCallback,
  useRef,
  useState,
} from 'react';

import { IBar } from '@contexts/ReactTimelineContext';
// import { useDrag } from '@hooks/useDrag';
import { useDragScroll } from '@hooks/useDragScroll';
import { useResize } from '@hooks/useResize';
import { useSyncronizedScroll } from '@hooks/useSyncronizedScroll';
import { useTimeline } from '@hooks/useTimeline';

import { Container, LeftInteraction, RightInteraction } from './styles';

interface IBarProps {
  bar: IBar;
  color: string;
  snap: number;
  headerRef: RefObject<HTMLDivElement>;
  sideRef: RefObject<HTMLDivElement>;
  calendarRef: RefObject<HTMLDivElement>;
}

const Bar: React.FC<IBarProps> = ({
  bar,
  color,
  snap,
  headerRef,
  sideRef,
  calendarRef,
}) => {
  const { keys } = useTimeline();

  const containerRef = useRef<HTMLDivElement>(null);

  // const dragRef = useRef<HTMLDivElement>(null);
  const leftResizeRef = useRef<HTMLDivElement>(null);
  const rightResizeRef = useRef<HTMLDivElement>(null);

  const [barStyle, setBarStyle] = useState<CSSProperties>({
    left: bar.left,
    width: bar.width,
  });

  const leftResize = useCallback(
    (left: number) => {
      setBarStyle(prev => {
        const { width, left: pLeft } = prev;

        if (Number(width) <= 0) return { left, width: snap };
        if (Number(pLeft) > left) return { left, width: Number(width) + snap };
        if (Number(pLeft) === left) return { left, width: Number(width) };
        if (Number(pLeft) < left) return { left, width: Number(width) - snap };

        return { ...prev, left };
      });
    },
    [snap],
  );

  const rightResize = useCallback((width: number) => {
    setBarStyle(prev => ({
      ...prev,
      width: width - Number(prev.left),
    }));
  }, []);

  // const onDragBar = useCallback((left: number) => {
  //   setBarStyle(prev => ({ ...prev, left }));
  // }, []);

  const onDown = () => {
    const users = document.getElementById(keys.users);
    const data = document.getElementById(keys.data);

    users?.classList.add('enabled');
    data?.classList.add('enabled');
  };

  const onUp = () => {
    const users = document.getElementById(keys.users);
    const data = document.getElementById(keys.data);

    users?.classList.remove('enabled');
    data?.classList.remove('enabled');
  };

  // useDrag(dragRef, { onDrag: onDragBar, snap }, calendarRef);
  useResize(
    leftResizeRef,
    { onResize: leftResize, onDown, onUp, snap },
    calendarRef,
  );
  useResize(
    rightResizeRef,
    { onResize: rightResize, onDown, onUp, snap, elementKey: keys.data },
    calendarRef,
  );

  useDragScroll({
    ref: calendarRef,
    elementKey: keys.data,
    targetRef: headerRef,
    directions: 'horizontal',
  });

  // console.log(document.getElementById(keys.data || '')?.classList);

  useSyncronizedScroll({
    refs: [
      { ref: sideRef, id: keys.users, targetId: keys.data },
      { ref: calendarRef, id: keys.data, targetId: keys.users },
    ],
  });

  return (
    <Container ref={containerRef} color={color} style={barStyle}>
      <LeftInteraction ref={leftResizeRef} />

      {/* <div ref={dragRef} style={{ height: '100%', display: 'flex', flex: 1 }} /> */}

      <RightInteraction ref={rightResizeRef} />
    </Container>
  );
};

export { Bar as TimelineBar };
