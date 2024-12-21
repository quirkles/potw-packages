import {PermissionDefinition} from "./base";

export const userPermissions = {
    "CAN_SPOOF_ANY_USER": 1 << 1
} as const satisfies PermissionDefinition;

export type UserPermissionName = keyof typeof userPermissions;
export type UserPermissionValue = (typeof userPermissions)[UserPermissionName];
