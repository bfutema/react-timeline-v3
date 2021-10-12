import React, {
  MouseEvent,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

interface IBarResizableProps {
  onBarResize: (delta: number) => void;
  children: ReactNode;
}

const BarResizable: React.FC<IBarResizableProps> = ({
  onBarResize,
  children,
}) => {
  const resizingPosition = useRef<number>(0);

  const [isResizing, setIsResizing] = useState<boolean>(false);

  const onMouseDown = useCallback(
    (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
      if (e.button === 0) {
        resizingPosition.current = e.clientX;

        setIsResizing(true);
      }
    },
    [],
  );

  const onMouseMove = useCallback(
    (e: globalThis.MouseEvent) => {
      e.stopPropagation();

      const delta = resizingPosition.current - e.clientX;

      resizingPosition.current = e.clientX;

      onBarResize(delta);
    },
    [onBarResize],
  );

  const onMouseUp = useCallback(() => {
    setIsResizing(false);
  }, []);

  useEffect(() => {
    if (isResizing) {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    } else {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    }
  }, [isResizing, onMouseMove, onMouseUp]);

  return React.cloneElement(children as any, { onMouseDown });
};

export { BarResizable };
