import { useRef, useEffect, useCallback, RefObject } from 'react';

interface IParams {
  onDrag: (position: number) => void;
  snap?: number;
}

function useDrag(
  ref: RefObject<HTMLDivElement>,
  { snap = 1, onDrag }: IParams,
  parentRef?: RefObject<HTMLDivElement>,
) {
  const isResizingRef = useRef<boolean>(false);

  const xOnStart = useRef<number>(0);

  const getSnapPosition = useCallback(
    (dx: number) => dx - (dx % snap) + (dx % snap < snap / 2 ? 0 : snap),
    [snap],
  );

  const onMouseDown = useCallback(
    (e: globalThis.MouseEvent) => {
      if (!isResizingRef.current) {
        isResizingRef.current = true;

        let point = 0;

        if (parentRef) {
          if (parentRef.current) {
            const bounding = parentRef.current.getBoundingClientRect();

            point = bounding.left;
          }
        }

        if (ref.current) {
          const bounding = ref.current.getBoundingClientRect();

          console.log(e.x, bounding);
          point += e.x - bounding.x;
        }

        // xOnStart.current = Number(e.pageX) - left - Number(e.offsetX);
        xOnStart.current = Number(e.pageX) - point - Number(e.offsetX);
      }
    },
    [ref, parentRef],
  );

  const onMouseMove = useCallback(
    (e: globalThis.MouseEvent) => {
      e.stopPropagation();

      if (!isResizingRef.current) return;

      let left = 0;

      if (parentRef) {
        if (parentRef.current) {
          const bounding = parentRef.current.getBoundingClientRect();

          left = bounding.left;
        }
      }

      const dx = Number(e.pageX) - left - xOnStart.current;

      const position = getSnapPosition(dx);

      onDrag(position);
    },
    [parentRef, getSnapPosition, onDrag],
  );

  const onMouseUp = useCallback(() => {
    if (isResizingRef.current) {
      isResizingRef.current = false;

      xOnStart.current = 0;
    }
  }, []);

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener('mousedown', onMouseDown);

      if (parentRef) {
        if (parentRef.current) {
          parentRef.current.addEventListener('mousemove', onMouseMove);
          parentRef.current.addEventListener('mouseup', onMouseUp);
        }
      } else {
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
      }
    }
  }, [ref, parentRef, onMouseDown, onMouseMove, onMouseUp]);
}

export { useDrag };
