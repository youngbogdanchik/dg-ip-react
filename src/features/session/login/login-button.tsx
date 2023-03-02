import React from 'react';
import { Button } from 'shared/ui';
import { loginRequested } from 'entities/session';

export const LoginButton = () => {
  const loginHandler = () => {
    loginRequested();
  };

  return (
    <Button variant="contained" onClick={loginHandler}>
      Login
    </Button>
  );
};
