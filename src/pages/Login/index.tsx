import React from 'react';

import { Timeline } from '@components/organisms';

// import { FrappeApp } from '../../solutions/Frappe/App';

import { Container } from './styles';

const Login: React.FC = () => {
  return (
    <Container className="login">
      <Timeline />

      {/* <FrappeApp /> */}
    </Container>
  );
};

export { Login };
