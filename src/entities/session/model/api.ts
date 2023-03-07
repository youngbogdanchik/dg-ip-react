import { createAuth0Client } from '@auth0/auth0-spa-js';
import { auth } from 'shared/config';
import { CurrentUser } from 'entities/session/model/types';

const whenAuth0Client = createAuth0Client(auth);

export const logout = async () => {
  const auth0Client = await whenAuth0Client;

  try {
    await auth0Client.logout();
  } catch (err) {
    return Promise.reject(new Error(`Not authenticated: ${err}`));
  }
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
