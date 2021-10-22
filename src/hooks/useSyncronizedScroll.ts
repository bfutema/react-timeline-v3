import { RefObject, useEffect } from 'react';

function useSyncronizedScroll({
  refs: elements,
  elementKey,
}: {
  refs: { ref: RefObject<HTMLDivElement>; id: string; targetId: string }[];
  elementKey?: string;
}) {
  useEffect(() => {
    const element = document.getElementById(elementKey || '');
    const enabled = element ? !element.classList.contains('enabled') : true;

    if (enabled) {
      elements.forEach(el => {
        if (el.ref.current) {
          const onScroll = (e: any) => {
            const viewPortData: any = document.getElementById(el.targetId);

            const { target } = e;

            if (target.id === el.id) viewPortData.scrollTop = target.scrollTop;
          };

          el.ref.current.addEventListener('mouseenter', () => {
            el.ref.current?.addEventListener('scroll', onScroll);
          });

          el.ref.current.addEventListener('mouseleave', () => {
            el.ref.current?.removeEventListener('scroll', onScroll);
          });
        }
      });
    } else {
      elements.forEach(el => {
        if (el.ref.current) {
          const onScroll = (e: any) => {
            const viewPortData: any = document.getElementById(el.targetId);

            const { target } = e;

            if (target.id === el.id) viewPortData.scrollTop = target.scrollTop;
          };

          el.ref.current.removeEventListener('mouseenter', () => {
            el.ref.current?.removeEventListener('scroll', onScroll);
          });

          el.ref.current.removeEventListener('mouseleave', () => {
            el.ref.current?.removeEventListener('scroll', onScroll);
          });
        }
      });
    }
  }, [elementKey, elements]);
}

export { useSyncronizedScroll };
