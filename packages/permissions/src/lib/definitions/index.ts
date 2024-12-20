import { PermissionDefinition } from "./base";
import { gameWeekPermissions } from "./gameWeek";
import { gamePermissions } from "./game";
import { userPermissions } from "./user";

export type Scope = "user" | "game" | "gameWeek";

export type ScopeDefinitions = {
  [scope in Scope]: PermissionDefinition;
};

export const scopeDefinitions = {
  user: userPermissions,
  game: gamePermissions,
  gameWeek: gameWeekPermissions,
} as const satisfies ScopeDefinitions;

export type PermissionValueForScope<scope extends Scope> =
  ScopeDefinitions[scope][keyof ScopeDefinitions[scope]];

export { type PermissionDefinition, type PermissionMap } from "./base";
export {
  type GamePermissionName,
  type GamePermissionValue,
  gamePermissions,
} from "./game";
export {
  type GameWeekPermissionName,
  type GameWeekPermissionValue,
  gameWeekPermissions,
} from "./gameWeek";
export {
  type UserPermissionName,
  type UserPermissionValue,
  userPermissions,
} from "./user";
