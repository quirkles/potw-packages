"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionManager = void 0;
const utils_1 = require("../utils/utils");
class PermissionManager {
    permissions;
    scope;
    constructor(scope, permissions) {
        this.scope = scope;
        this.permissions = permissions || 0 << 0;
    }
    getPermissionMap() {
        return (0, utils_1.getPermissionMap)(this.permissions, this.scope);
    }
    hasPermission(permission) {
        return (0, utils_1.hasPermission)(this.permissions, permission);
    }
    togglePermission(permission) {
        this.permissions = (0, utils_1.togglePermission)(this.permissions, permission);
    }
    addPermission(permission) {
        this.permissions = (0, utils_1.addPermission)(this.permissions, permission);
    }
    removePermission(permission) {
        this.permissions = (0, utils_1.removePermission)(this.permissions, permission);
    }
    getPermissions() {
        return this.permissions;
    }
}
exports.PermissionManager = PermissionManager;
