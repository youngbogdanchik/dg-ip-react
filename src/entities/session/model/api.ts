import { createAuth0Client } from '@auth0/auth0-spa-js';
import { auth0Config } from 'shared/config';
import { CurrentUser } from './types';

const whenAuth0Client = createAuth0Client(auth0Config);

export const logout = async () => {
  const auth0Client = await whenAuth0Client;

  await auth0Client.logout();
};

export const getCurrentUser = async (): Promise<CurrentUser> => {
  const auth0Client = await whenAuth0Client;
  const isAuth = await auth0Client.isAuthenticated();

  if (isAuth) {
    return getUser();
  }

  if (isRedirected()) {
    await auth0Client.handleRedirectCallback();
    return getUser();
  }

  await auth0Client.loginWithRedirect();

  throw new Error('Authorization error');
};

const getUser = async (): Promise<CurrentUser> => {
  const auth0Client = await whenAuth0Client;
  const user = await auth0Client.getUser();

  return {
    nickname: user?.nickname || '',
  };
};

const isRedirected = () => {
  const query = window.location.search;

  return query.includes('code=') && query.includes('state=');
};
