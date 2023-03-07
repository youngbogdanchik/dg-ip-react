import React from 'react';
import { useGate } from 'effector-react';
import { Routing } from 'pages';
import { sessionModel } from 'entities/session';
import { Container } from 'shared/ui';

export const App = () => {
  useGate(sessionModel.Gate);

  return (
    <Container>
      <Routing />
    </Container>
  );
};
