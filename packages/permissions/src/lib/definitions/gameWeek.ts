import {PermissionDefinition} from "./base";

export const gameWeekPermissions = {
    "CAN_CREATE_THEME_POLL": 1 << 1,
    "CAN_VOTE_IN_THEME_POLL": 1 << 2,
    "CAN_COMMENT": 1 << 3,
    "CAN_SUBMIT_PICK": 1 << 4,
    "CAN_VOTE_FOR_PICK": 1 << 5
} as const satisfies PermissionDefinition;

export type GameWeekPermissionName = keyof typeof gameWeekPermissions;
export type GameWeekPermissionValue =
  (typeof gameWeekPermissions)[GameWeekPermissionName];
