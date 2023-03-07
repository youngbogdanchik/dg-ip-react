import { createDomain, sample } from 'effector';
import { getCurrentUser, logout } from './api';
import { CurrentUser } from './types';
import { createGate } from 'effector-react';

const domain = createDomain('entities/session');

export const Gate = createGate();

export const logoutFx = domain.effect(logout);
const getCurrentUserFx = domain.effect(getCurrentUser);

export const $user = domain.store<CurrentUser | null>(null);

sample({ clock: Gate.open, target: getCurrentUserFx });

$user.on(getCurrentUserFx.doneData, (_, obj) => obj);
