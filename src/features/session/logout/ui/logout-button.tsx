import React from 'react';
import { Button } from 'shared/ui';
import { logoutFx } from 'entities/session';

export const LogoutButton = () => {
  const logoutHandler = async () => {
    await logoutFx();
  };

  return (
    <Button variant="contained" color="error" onClick={logoutHandler}>
      Logout
    </Button>
  );
};
