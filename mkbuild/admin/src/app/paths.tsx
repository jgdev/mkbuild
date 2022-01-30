import React from "react";
import NotFound from "../components/NotFound";
const AppContainer = React.lazy(() => import("../pages/AppContainersPage"));

export default [
  {
    title: "App Containers",
    component: AppContainer,
    href: "/",
    path: "/",
    key: "app-containers-list",
  },
  {
    key: "not-found",
    component: NotFound,
    path: "*",
  },
];
