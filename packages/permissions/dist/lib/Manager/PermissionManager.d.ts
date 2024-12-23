import { PermissionMap, Scope, ScopeDefinitions } from "../definitions";
export declare class PermissionManager<T extends Scope> {
    private permissions;
    private readonly scope;
    constructor(scope: T, permissions?: number);
    getPermissionMap(): PermissionMap<ScopeDefinitions[T]>;
    hasPermission(permission: number): boolean;
    togglePermission(permission: number): void;
    addPermission(permission: number): void;
    removePermission(permission: number): void;
    getPermissions(): number;
}
//# sourceMappingURL=PermissionManager.d.ts.map