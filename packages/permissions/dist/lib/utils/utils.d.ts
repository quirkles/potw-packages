import { type Scope, type PermissionValueForScope, PermissionMap, ScopeDefinitions } from "../definitions";
export declare function combinePermissions<T extends Scope | undefined = undefined>(...permissions: T extends undefined ? number[] : PermissionValueForScope<Exclude<T, undefined>>[]): number;
export declare function combinePermissions<T extends Scope | undefined = undefined>(permissions: T extends undefined ? number[] : PermissionValueForScope<Exclude<T, undefined>>[]): number;
export declare function addPermission<T extends Scope | undefined = undefined>(base: number, permissionToAdd: T extends undefined ? number : PermissionValueForScope<Exclude<T, undefined>>): number;
export declare function togglePermission<T extends Scope | undefined = undefined>(base: number, permissionToToggle: T extends undefined ? number : PermissionValueForScope<Exclude<T, undefined>>): number;
export declare function removePermission<T extends Scope | undefined = undefined>(base: number, permissionToRemove: T extends undefined ? number : PermissionValueForScope<Exclude<T, undefined>>): number;
export declare function hasPermission<T extends Scope | undefined = undefined>(base: number, permissionToCheck: T extends undefined ? number : PermissionValueForScope<Exclude<T, undefined>>): boolean;
export declare function hasAnyPermission<T extends Scope | undefined>(base: number, ...permissionsToCheck: T extends undefined ? number[] : PermissionValueForScope<Exclude<T, undefined>>[]): boolean;
export declare function getPermissionMap<T extends Scope>(permissions: number, scope: T): PermissionMap<ScopeDefinitions[T]>;
//# sourceMappingURL=utils.d.ts.map