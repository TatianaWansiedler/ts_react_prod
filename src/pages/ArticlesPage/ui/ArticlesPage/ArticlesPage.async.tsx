import { lazy } from 'react';

export const ArticlesPageAsync = lazy(
    () => new Promise((resolve) => {
        // @ts-ignore
        // to imitate an async  action
        setTimeout(() => resolve(import('./ArticlesPage')), 1500);
    }),
);
