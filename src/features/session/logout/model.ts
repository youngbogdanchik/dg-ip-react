import { attach, createDomain, sample } from 'effector';
import { sessionModel } from 'entities/session';

const domain = createDomain('features/session/logout');

export const logoutRequested = domain.event();

const logoutFx = attach({ effect: sessionModel.logoutFx });

sample({ clock: logoutRequested, target: logoutFx });
sample({ clock: logoutFx.done, target: sessionModel.sessionClosed });
