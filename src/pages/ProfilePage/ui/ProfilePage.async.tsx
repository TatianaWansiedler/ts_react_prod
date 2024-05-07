import { lazy } from 'react';

export const ProfilePageAsync = lazy(
    () => new Promise((resolve) => {
        // @ts-ignore
        // to imitate an async  action
        setTimeout(() => resolve(import('./ProfilePage')), 1500);
    }),
);
