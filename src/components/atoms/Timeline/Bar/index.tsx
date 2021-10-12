import React, { CSSProperties, useCallback, useRef, useState } from 'react';

import { BarResizable } from './BarResizable';

import { Container, LeftInteraction, RightInteraction } from './styles';

const Bar: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [barStyle, setBarStyle] = useState<CSSProperties>({
    left: 0,
    width: 235,
  });

  const onLeftBarResize = useCallback((delta: number) => {
    setBarStyle(prev => {
      if (Number(prev.width) <= 47 && delta <= 0) return prev;

      console.log(Number(prev.width), Number(prev.left) - delta);

      return {
        ...prev,
        left:
          Number(prev.width) <= 47
            ? Number(prev.left)
            : Number(prev.left) - delta,
        width:
          Number(prev.width) + delta < 47 ? 47 : Number(prev.width) + delta,
      };
    });
  }, []);

  const onRightBarResize = useCallback((delta: number) => {
    setBarStyle(prev => ({ ...prev, width: Number(prev.width) - delta }));
  }, []);

  const onMouseDown = useCallback(() => {
    console.log('Haha');
  }, []);

  return (
    <Container ref={containerRef} onMouseDown={onMouseDown} style={barStyle}>
      <BarResizable onBarResize={onLeftBarResize}>
        <LeftInteraction />
      </BarResizable>

      <BarResizable onBarResize={onRightBarResize}>
        <RightInteraction />
      </BarResizable>
    </Container>
  );
};

export { Bar as TimelineBar };
