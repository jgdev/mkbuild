import React from "react";

export type NavigationLink = {
  key: string;
  title: string;
  href?: string;
  path?: string;
  component?: React.ReactNode;
  fallback?: React.ReactNode;
  current?: boolean;
};

export { default } from "./App";
