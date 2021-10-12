import React from 'react';

import { Timeline } from '@components/organisms';

import { Container } from './styles';

const Login: React.FC = () => {
  return (
    <Container className="login">
      <Timeline />
    </Container>
  );
};

export { Login };
