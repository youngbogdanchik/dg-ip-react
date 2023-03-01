import { createDomain, createEffect } from 'effector';
import { login, logout, isAuthenticated, getUser } from './api';
import { User } from './types';

const domain = createDomain('entities/session');

export const loginFx = createEffect(login);
export const logoutFx = createEffect(logout);
export const isAuthenticatedFx = createEffect(isAuthenticated);
export const getUserFx = createEffect(getUser);
export const $auth = domain
  .createStore(false)
  .on(isAuthenticatedFx.doneData, (_, isAuth) => isAuth);

export const $user = domain
  .createStore<User>({})
  .on(logoutFx.doneData, () => ({}))
  .on(getUserFx.doneData, (_, obj) => obj);
