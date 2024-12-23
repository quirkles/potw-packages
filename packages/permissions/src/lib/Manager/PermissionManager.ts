import {PermissionMap, Scope, ScopeDefinitions} from "../definitions";
import {
    hasPermission,
    removePermission,
    togglePermission,
    addPermission,
    getPermissionMap
} from "../utils/utils";

export class PermissionManager<T extends Scope> {
    private permissions: number;

    private readonly scope: T;

    constructor ( scope: T, permissions?: number) {
        this.scope = scope;
        this.permissions = permissions || 0 << 0;
    }

    public getPermissionMap (): PermissionMap<ScopeDefinitions[T]> {
        return getPermissionMap(this.permissions, this.scope);
    }

    public hasPermission (permission: number): boolean {
        return hasPermission(this.permissions, permission);
    }

    public togglePermission (permission: number): void {
        this.permissions = togglePermission(this.permissions, permission);
    }

    public addPermission (permission: number): void {
        this.permissions = addPermission(this.permissions, permission);
    }

    public removePermission (permission: number): void {
        this.permissions = removePermission(this.permissions, permission);
    }

    public getPermissions (): number {
        return this.permissions;
    }
}
