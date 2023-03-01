import React, { useEffect } from 'react';
import { Container } from 'shared/ui';
import { Routing } from 'pages';
import { getUserFx, isAuthenticatedFx } from 'entities/session';

export const App = () => {
  useEffect(() => {
    (async () => {
      await isAuthenticatedFx();
      await getUserFx();
    })();
  });

  return (
    <Container>
      <Routing />
    </Container>
  );
};
