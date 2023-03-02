import React from 'react';
import { Button } from 'shared/ui';
import { logoutRequested } from 'entities/session';

export const LogoutButton = () => {
  const logoutHandler = () => {
    logoutRequested();
  };

  return (
    <Button variant="contained" color="error" onClick={logoutHandler}>
      Logout
    </Button>
  );
};
