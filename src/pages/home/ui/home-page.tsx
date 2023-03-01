import React from 'react';
import { LoginButton } from 'features/session';
import { LogoutButton } from 'features/session';
import { $auth, $user } from 'entities/session';
import { Grid, Box, Typography } from 'shared/ui';
import { useStore } from 'effector-react';

export const Home = () => {
  const isAuth = useStore($auth);
  const user = useStore($user);

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh' }}
    >
      <Grid item xs={3}>
        {isAuth ? (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <Typography
              sx={{
                display: 'inline-block',
              }}
              variant="h4"
            >
              Hello, {user.nickname}!
            </Typography>
            <LogoutButton />
          </Box>
        ) : (
          <LoginButton />
        )}
      </Grid>
    </Grid>
  );
};
