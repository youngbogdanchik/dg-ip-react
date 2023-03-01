import React from 'react';
import { Button } from 'shared/ui';
import { loginFx } from 'entities/session';

export const LoginButton = () => {
  const loginHandler = async () => {
    await loginFx();
  };

  return (
    <Button variant="contained" onClick={loginHandler}>
      Login
    </Button>
  );
};
