import React from 'react';

import { DateRange } from '@components/organisms/DateRange';

// import { Timeline } from '@components/organisms';

// import { FrappeApp } from '../../solutions/Frappe/App';

import { Container } from './styles';

const Login: React.FC = () => {
  return (
    <Container className="login">
      <form
        onSubmit={(e: React.FormEvent) => {
          e.preventDefault();
          console.log(e.type);
        }}
      >
        <DateRange
          label="Início - Fim"
          name="dates"
          format={{ showFormat: 'dd/MM/yyyy', returnFormat: 'yyyy-dd-MM' }}
          placeholder="Início - Fim"
          autoComplete="off"
          errorMessage="Campo obrigatório!"
          onChange={e => console.log(e.target.value)}
        />

        <button type="submit" style={{ marginTop: '64px' }}>
          Enviar
        </button>
      </form>

      {/* <Timeline /> */}

      {/* <FrappeApp /> */}
    </Container>
  );
};

export { Login };
