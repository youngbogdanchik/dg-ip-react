import { createDomain, createEffect, createEvent, sample } from 'effector';
import { login, logout, isAuthenticated, getUser } from './api';
import { User } from './types';

const domain = createDomain('entities/session');

export const loginRequested = createEvent();
export const logoutRequested = createEvent();
export const isAuthenticatedRequested = createEvent();

const loginFx = createEffect(login);
const logoutFx = createEffect(logout);
const isAuthenticatedFx = createEffect(isAuthenticated);
const getUserFx = createEffect(getUser);

sample({ clock: loginRequested, target: loginFx });
sample({ clock: logoutRequested, target: logoutFx });
sample({ clock: isAuthenticatedRequested, target: isAuthenticatedFx });
sample({ clock: isAuthenticatedFx.doneData, target: getUserFx });

export const $auth = domain.createStore<boolean>(false);
export const $user = domain.createStore<User>({});

$auth.on(isAuthenticatedFx.doneData, (_, isAuth) => isAuth);

$user.on(getUserFx.doneData, (_, obj) => obj);
