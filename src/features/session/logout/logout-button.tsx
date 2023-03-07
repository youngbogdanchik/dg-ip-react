import React from 'react';
import { Button } from 'shared/ui';
import * as model from './model';

export const LogoutButton = () => {
  return (
    <Button variant="contained" color="error" onClick={() => model.logoutRequested()}>
      Logout
    </Button>
  );
};
