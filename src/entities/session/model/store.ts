import { createDomain } from 'effector';
import { createGate } from 'effector-react';
import { getCurrentUser, logout } from './api';
import { CurrentUser } from './types';

const domain = createDomain('entities/session');

export const Gate = createGate();

export const logoutFx = domain.effect(logout);
const getCurrentUserFx = domain.effect(getCurrentUser);

export const $user = domain.store<CurrentUser | null>(null);

Gate.open(getCurrentUserFx());

$user.on(getCurrentUserFx.doneData, (_, obj) => obj);
