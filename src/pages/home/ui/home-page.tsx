import React from 'react';
import { useStore } from 'effector-react';
import { LogoutButton } from 'features/session/logout';
import { sessionModel } from 'entities/session';
import { Grid, Box, Typography } from 'shared/ui';

export const HomePage = () => {
  const user = useStore(sessionModel.$user);

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh' }}
    >
      <Grid item xs={3}>
        {user ? (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
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
          <Typography
            sx={{
              display: 'inline-block',
            }}
            variant="h4"
          >
            Not authorized
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};
