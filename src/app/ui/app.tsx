import React, { useEffect } from 'react';
import { Container } from 'shared/ui';
import { Routing } from 'pages';
import { isAuthenticatedRequested } from 'entities/session';

export const App = () => {
  useEffect(() => {
    isAuthenticatedRequested();
  });

  return (
    <Container>
      <Routing />
    </Container>
  );
};
