import React from "react";
import { Routes, Route } from "react-router-dom";

import paths from "./paths";
import DashboardLayout from "@mkbuild/components/Layout";
import { withUiContext } from "@mkbuild/contexts/UiContext";
import { withApplicationContext } from "@mkbuild/contexts/ApplicationContext";

export const defaultFallback = <>Loading ...</>;

export const withSuspense = (
  component: React.ReactNode,
  fallback = defaultFallback
) => {
  return <React.Suspense fallback={fallback}>{component}</React.Suspense>;
};

const withLayout = (component: any) => (
  <DashboardLayout navigation={paths} userNavigation={[]} user={null}>
    {component}
  </DashboardLayout>
);

export const App = () => {
  return (
    <Routes>
      {paths.map((n) => {
        const Component = n.component;
        return (
          <Route
            key={n.key}
            path={n.path || ""}
            element={withLayout(withSuspense(<Component />))}
          />
        );
      })}
    </Routes>
  );
};

export default withApplicationContext(withUiContext(App));
