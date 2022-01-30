import { createContext, useContext, useState } from "react";
import { Environment } from "@mkbuild/lib/services/environments";
import { AppContainer } from "@mkbuild/lib/services/appContainers";

export type ApplicationContext = {
  environments: Environment[];
  addEnvironment: (environment: Partial<Environment>) => void;
  currentEnvironment?: Environment;
  appContainers: AppContainer[];
  setCurrentEnvironment: (environmentId: string) => void;
};

export const initialState: Partial<ApplicationContext> = {};

export const UiContext = createContext(initialState as ApplicationContext);

export const useApplicationContext = () => useContext(UiContext);

export const withApplicationContext =
  (Component: any, value?: Partial<ApplicationContext>) => (props: any) => {
    const [appContainers] = useState<AppContainer[]>([]);
    const [environments, setEnvironments] = useState<Environment[]>([]);
    const [currentEnvironment, _setCurrentEnvironment] = useState<
      Environment | undefined
    >();

    const setCurrentEnvironment = (environmentId: string) => {
      _setCurrentEnvironment(
        environments.find((env) => env.id === environmentId)
      );
    };

    const addEnvironment = (environment: Partial<Environment>) =>
      setEnvironments([...environments, environment as Environment]);

    return (
      <UiContext.Provider
        value={{
          appContainers,
          environments,
          addEnvironment,
          currentEnvironment,
          setCurrentEnvironment,
          ...value,
        }}
      >
        <Component {...props} />
      </UiContext.Provider>
    );
  };
