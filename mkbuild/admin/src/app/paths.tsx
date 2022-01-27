import React from "react";
import NotFound from "../components/NotFound";
const BuildContainer = React.lazy(() => import("../pages/BuildContainers"));

export default [
  {
    title: "Build Containers 2",
    component: BuildContainer,
    href: "/test/lol1",
    path: "/test/:name",
    key: "build-container-details",
  },
  {
    title: "Build Containers",
    component: BuildContainer,
    href: "/test",
    path: "/test",
    key: "build-container-list",
  },
  {
    title: "Not Found",
    key: "not-found",
    component: NotFound,
    path: "*",
  },
];
