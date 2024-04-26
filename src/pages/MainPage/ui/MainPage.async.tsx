import { lazy } from "react";

export const MainPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      // to imitate an async  action
      setTimeout(() => resolve(import("./MainPage")), 1500);
    })
);

