import {
    type Scope,
    type PermissionValueForScope,
    PermissionMap,
    ScopeDefinitions,
    scopeDefinitions
} from "../definitions";

export function combinePermissions<T extends Scope | undefined = undefined> (
    ...permissions: T extends undefined
        ? number[]
        : PermissionValueForScope<Exclude<T, undefined>>[]
): number;
export function combinePermissions<T extends Scope | undefined = undefined> (
    permissions: T extends undefined
        ? number[]
        : PermissionValueForScope<Exclude<T, undefined>>[],
): number;
export function combinePermissions<T extends Scope | undefined = undefined> (
    ...args: T extends undefined
        ? number[]
        : PermissionValueForScope<Exclude<T, undefined>>[][]
): number {
    return args
        .flat()
        .reduce((acc, permission) => addPermission(acc, permission), 0);
}

export function addPermission<T extends Scope | undefined = undefined> (
    base: number,
    permissionToAdd: T extends undefined
        ? number
        : PermissionValueForScope<Exclude<T, undefined>>
): number {
    return base | permissionToAdd;
}

export function togglePermission<T extends Scope | undefined = undefined> (
    base: number,
    permissionToToggle: T extends undefined
        ? number
        : PermissionValueForScope<Exclude<T, undefined>>
): number {
    return base ^ permissionToToggle;
}

export function removePermission<T extends Scope | undefined = undefined> (
    base: number,
    permissionToRemove: T extends undefined
        ? number
        : PermissionValueForScope<Exclude<T, undefined>>
): number {
    return base & ~permissionToRemove;
}

export function hasPermission<T extends Scope | undefined = undefined> (
    base: number,
    permissionToCheck: T extends undefined
        ? number
        : PermissionValueForScope<Exclude<T, undefined>>
): boolean {
    return (base & permissionToCheck) === permissionToCheck;
}

export function hasAnyPermission<T extends Scope | undefined> (
    base: number,
    ...permissionsToCheck: T extends undefined
        ? number[]
        : PermissionValueForScope<Exclude<T, undefined>>[]
): boolean {
    return permissionsToCheck.some((permission) =>
        hasPermission<T>(
            base,
            permission as T extends undefined
                ? number
                : PermissionValueForScope<Exclude<T, undefined>>
        )
    );
}

export function getPermissionMap<T extends Scope> (
    permissions: number,
    scope: T
): PermissionMap<ScopeDefinitions[T]> {
    const pm: Partial<PermissionMap<ScopeDefinitions[T]>> = {};

    for (const key in scopeDefinitions[scope]) {
        if (Object.prototype.hasOwnProperty.call(scopeDefinitions[scope], key)) {
            pm[key] = hasPermission(
                permissions,
                scopeDefinitions[scope][key] as number
            );
        }
    }

    return pm as PermissionMap<ScopeDefinitions[T]>;
}
