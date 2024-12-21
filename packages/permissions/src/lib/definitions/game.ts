import {PermissionDefinition} from "./base";

export const gamePermissions = {
    "CAN_EDIT": 1 << 1,
    "CAN_COMMENT": 1 << 2
} as const satisfies PermissionDefinition;

export type GamePermissionName = keyof typeof gamePermissions;
export type GamePermissionValue = (typeof gamePermissions)[GamePermissionName];
