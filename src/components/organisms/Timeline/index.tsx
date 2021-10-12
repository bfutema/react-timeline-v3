import React from 'react';

import { TimelineRow } from '@components/molecules';

import { Container } from './styles';

const Timeline: React.FC = () => {
  return (
    <Container className="timeline">
      <TimelineRow />
    </Container>
  );
};

export { Timeline };
