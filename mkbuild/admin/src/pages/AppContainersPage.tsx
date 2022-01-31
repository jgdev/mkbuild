import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { useUiContext } from "@mkbuild/contexts/UiContext";
import { useApplicationContext } from "@mkbuild/contexts/ApplicationContext";
import AppContainerList from "@mkbuild/components/AppContainerList";
import AppContainerDetails from "@mkbuild/components/AppContainerDetails";

export const AppContainersPage = () => {
  const { appContainerId } = useParams();
  const { setUiHeader } = useUiContext();
  const {
    appContainers,
    environments,
    currentEnvironment,
    setCurrentEnvironment,
  } = useApplicationContext();

  useEffect(() => {
    if (!currentEnvironment && environments.length)
      setCurrentEnvironment(environments[0].id);

    setUiHeader({
      header: "App Containers",
      breadcrumLinks: [
        { href: "/", title: "List", id: "app-containers-list" },
        {
          title: "Details",
          href: "/1",
          id: "app-container-details",
          showIf: () => !!appContainerId,
        },
      ],
      actions: !appContainerId && [
        {
          id: "create-application",
          children: "Create App Container",
        },
      ],
    });
  }, [environments, currentEnvironment, appContainerId]);

  return (
    <>
      {!appContainerId && <AppContainerList data={appContainers} />}
      {appContainerId && <AppContainerDetails />}
    </>
  );
};

export default AppContainersPage;
