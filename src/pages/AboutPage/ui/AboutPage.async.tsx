import { lazy } from "react";

export const AboutPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      // to imitate an async  action
      setTimeout(() => resolve(import("./AboutPage")), 1500);
    })
);
