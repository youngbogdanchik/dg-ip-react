import { createAuth0Client } from '@auth0/auth0-spa-js';
import { auth } from 'shared/config';

const auth0 = await createAuth0Client(auth);

export const login = async () => {
  try {
    await auth0.loginWithRedirect();
  } catch (err) {
    console.error('Log in failed', err);
  }
};

export const logout = async () => {
  try {
    await auth0.logout();
  } catch (e) {
    console.error(e);
  }
};

export const isAuthenticated = async () => {
  try {
    const isAuth = await auth0.isAuthenticated();

    if (!isAuth) {
      await auth0.handleRedirectCallback();
      window.history.replaceState({}, '', '/home');
      return true;
    } else {
      return isAuth;
    }
  } catch (err) {
    return false;
  }
};

export const getUser = async () => {
  try {
    return await auth0.getUser();
  } catch (e) {
    console.error(e);
  }
};
