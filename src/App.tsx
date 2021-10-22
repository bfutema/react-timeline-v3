import React from 'react';

import { Login } from '@pages/Login';
import { GlobalStyles } from '@styles/global';

import { AppProvider } from './contexts';

// import './style.css';

const App: React.FC = () => {
  return (
    <AppProvider>
      <Login />

      {/* <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="16" fill="white" />
        <circle cx="84" cy="16" r="16" fill="red" />
        <circle cx="16" cy="84" r="16" fill="yellow" />
        <circle cx="84" cy="84" r="16" fill="green" />

        <path
          d="M 16 16 H 84 V 84 H 16 L 16 16"
          fill="purple"
          onClick={e => console.log(e)}
        />
      </svg> */}

      <GlobalStyles />
    </AppProvider>
  );
};

export { App };
