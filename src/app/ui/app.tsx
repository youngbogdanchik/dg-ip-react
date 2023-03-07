import React, { useEffect } from 'react';
import { Container } from 'shared/ui';
import { Routing } from 'pages';
import { appMounted } from 'entities/session';

export const App = () => {
  useEffect(() => {
    appMounted();
  }, []);

  return (
    <Container>
      <Routing />
    </Container>
  );
};
