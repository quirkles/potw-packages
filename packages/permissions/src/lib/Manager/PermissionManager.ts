import { PermissionMap, Scope, ScopeDefinitions } from "../definitions";
import {
  hasPermission,
  removePermission,
  togglePermission,
  addPermission,
  getPermissionMap,
} from "../utils/utils";

export class PermissionManager<T extends Scope> {
  private permissions: number;
  private readonly scope: T;

  constructor(permissions: number, scope: T) {
    this.permissions = permissions;
    this.scope = scope;
  }

  public getPermissionMap(): PermissionMap<ScopeDefinitions[T]> {
    return getPermissionMap(this.permissions, this.scope);
  }

  public hasPermission(permission: number): boolean {
    return hasPermission(this.permissions, permission);
  }
}
