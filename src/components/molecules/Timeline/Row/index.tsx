import React, { useMemo } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { ITimelineRow } from '@interfaces/Timeline';

import { ColorPicker, Container, Item, Selector } from './styles';

interface IItemRowProps {
  item: ITimelineRow;
}

const ItemRow: React.FC<IItemRowProps> = ({ item }) => {
  const parsedMonth = useMemo(() => {
    return item.startDate
      ? format(item.startDate, 'MMM', { locale: ptBR })
      : '';
  }, [item]);

  const parsedYear = useMemo(() => {
    return item.startDate
      ? format(item.startDate, 'yyyy', { locale: ptBR })
      : '';
  }, [item]);

  const parsedStartDate = useMemo(() => {
    return item.startDate
      ? format(item.startDate, 'dd MMM yyyy', { locale: ptBR })
      : '';
  }, [item]);

  const parsedEndDate = useMemo(() => {
    return item.endDate
      ? format(item.endDate, 'dd MMM yyyy', { locale: ptBR })
      : '';
  }, [item]);

  return (
    <Container>
      {item.type === 'header' && (
        <Item type="header">
          <div>
            <strong>{item.name}</strong>

            <Selector>
              <FiChevronLeft size={24} color="#ffffff" />

              <div>
                <strong>{parsedMonth}</strong>
                <strong>{parsedYear}</strong>
              </div>

              <FiChevronRight size={24} color="#ffffff" />
            </Selector>
          </div>
        </Item>
      )}

      {item.type === 'project' && (
        <Item type="project">
          <div>
            <strong>{item.name}</strong>

            <span>
              {parsedStartDate} - {parsedEndDate}
            </span>
          </div>
        </Item>
      )}

      {item.type === 'user' && (
        <Item key={item.id} type="user">
          <div>
            <strong>{item.name}</strong>

            <ColorPicker color={item.color || ''} />
          </div>
        </Item>
      )}
    </Container>
  );
};

export { ItemRow as TimelineItemRow };
