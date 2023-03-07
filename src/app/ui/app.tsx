import React from 'react';
import { Container } from 'shared/ui';
import { Routing } from 'pages';
import { sessionModel } from 'entities/session';

export const App = () => {
  React.useEffect(() => {
    sessionModel.appMounted();
  }, []);

  return (
    <Container>
      <Routing />
    </Container>
  );
};
