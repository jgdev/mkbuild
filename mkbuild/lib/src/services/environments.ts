import { Entity } from "../entity";

export type Environment = Partial<Entity> & {
  name: string;
};
