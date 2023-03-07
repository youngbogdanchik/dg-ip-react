import { createDomain, sample } from 'effector';
import { getCurrentUser, logout } from './api';
import { CurrentUser } from './types';

const domain = createDomain('entities/session');

export const appMounted = domain.event();

export const logoutFx = domain.effect(logout);
const getCurrentUserFx = domain.effect(getCurrentUser);

export const $user = domain.store<CurrentUser | null>(null);

sample({ clock: appMounted, target: getCurrentUserFx });

$user.on(getCurrentUserFx.doneData, (_, obj) => obj);
