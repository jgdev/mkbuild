import { Entity } from "../entity";

export type AppContainer = Partial<Entity> & {
  name: string;
  key: string;
  dependsOf: string[];
  variables: Array<{
    name: string;
    value: string;
  }>;
  recreate?: boolean;
  type: "android" | "ios" | "web" | "server" | "cronjob" | "labda";
  url?: string;
  status: string
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
