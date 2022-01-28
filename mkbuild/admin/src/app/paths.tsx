import React from "react";
import NotFound from "../components/NotFound";
const BuildContainer = React.lazy(() => import("../pages/BuildContainers"));

export default [
  {
    title: "Buid Containers",
    component: BuildContainer,
    href: "/",
    path: "/",
    key: "build-containers-list",
  },
  {
    key: "not-found",
    component: NotFound,
    path: "*",
  },
];
