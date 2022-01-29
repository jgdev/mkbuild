import React from "react";
import { Routes, Route } from "react-router-dom";

import paths from "./paths";
import DashboardLayout from "./Layout";
import { withUiContext } from "../contexts/ui";

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

export default withUiContext(App);
