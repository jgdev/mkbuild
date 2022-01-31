import React from "react";

const NotFound = React.lazy(() => import("@mkbuild/pages/NotFound"));
const AppContainersPage = React.lazy(
  () => import("@mkbuild/pages/AppContainersPage")
);

export default [
  {
    title: "App Containers",
    component: AppContainersPage,
    href: "/",
    path: "/",
    key: "app-containers-list",
  },
  {
    title: "App Details",
    component: AppContainersPage,
    path: "/:appContainerId",
    key: "app-containers-list",
  },
  {
    key: "not-found",
    component: NotFound,
    path: "*",
  },
];
