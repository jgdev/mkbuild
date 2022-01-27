export type AppContainer = {
  name: string;
  dependsOf: string[];
  variables: Array<{
    name: string;
    value: string;
  }>;
  recreate?: boolean;
};

export interface AppContainerService {
  createAppContainer(name: string, copyFrom?: string): Promise<AppContainer>;
  removeAppContainer(name: string): Promise<void>;
  addEnvironmentVariable(
    appContainerId: string,
    name: string,
    value: string
  ): Promise<void>;
  removeEnvironmentVariable(
    appContainerId: string,
    name: string
  ): Promise<void>;
}
