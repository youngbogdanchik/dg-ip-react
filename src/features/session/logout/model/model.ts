import { createDomain, sample } from 'effector';
import { logoutFx } from 'entities/session/model';

const domain = createDomain('features/session/logout');

export const logoutRequested = domain.event();

sample({ clock: logoutRequested, target: logoutFx });
