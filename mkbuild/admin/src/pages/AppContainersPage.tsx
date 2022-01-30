import { useEffect } from "react";
import { useUiContext } from "../contexts/UiContext";
import { useApplicationContext } from "../contexts/ApplicationContext";

import AppContainerList from "../components/AppContainerList";
import AppContainerDetails from "../components/AppContainerDetails";

export const PageBuildContainers = () => {
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
      actions: [
        {
          id: "create-application",
          children: "Create App Container",
        },
      ],
    });
  }, [environments, currentEnvironment]);
  return (
    <>
      <AppContainerList data={appContainers} />
    </>
  );
};

export default PageBuildContainers;
