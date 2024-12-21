import {PermissionManager} from "./PermissionManager";
import {PermissionMap, Scope, ScopeDefinitions} from "../definitions";
import {gamePermissions, userPermissions, gameWeekPermissions} from "../definitions";
import {expect} from "vitest";

const expectedDefaultPermissionMapByScope: {
    [scope in Scope]: PermissionMap<ScopeDefinitions[Scope]>;
} = {
    "game": {
        "CAN_COMMENT": false,
        "CAN_EDIT": false
    },
    "user": {
        "CAN_SPOOF_ANY_USER": false
    },
    "gameWeek": {
        "CAN_COMMENT": false,
        "CAN_CREATE_THEME_POLL": false,
        "CAN_SUBMIT_PICK": false,
        "CAN_VOTE_FOR_PICK": false,
        "CAN_VOTE_IN_THEME_POLL": false
    }
};

describe("PermissionManager", () => {
    describe.each([
        ["game", gamePermissions],
        ["user", userPermissions],
        ["gameWeek", gameWeekPermissions]
    ])("for scope %s", (scopeName, permissions) => {
        it("can be initialized with no permissions", () => {
            const permissionManager = new PermissionManager(scopeName as Scope);
            expect(permissionManager.getPermissions()).toBe(0);

            // This functions as a de facto contract test, if the default permissions change, this test will fail
            expect(
                permissionManager.getPermissionMap()
            ).toEqual(
                expectedDefaultPermissionMapByScope[scopeName as Scope]
            );
        });

        it("getPermissionMap returns correct permission map", () => {
            const permissionManager = new PermissionManager(scopeName as Scope);
            const permissionMap = permissionManager.getPermissionMap();
            Object.keys(permissionMap).forEach((key) => {
                expect(permissionMap[key]).toBe(false);
            });
        });

        it("hasPermission returns false for all permissions initially", () => {
            const permissionManager = new PermissionManager(scopeName as Scope);
            Object.values(permissions).forEach((permission) => {
                expect(permissionManager.hasPermission(permission)).toBe(false);
            });
        });

        it("addPermission adds a permission", () => {
            const permissionManager = new PermissionManager(scopeName as Scope);
            const permission = Object.values(permissions)[0];
            permissionManager.addPermission(permission);
            expect(permissionManager.hasPermission(permission)).toBe(true);
        });

        it("removePermission removes a permission", () => {
            const permissionManager = new PermissionManager(scopeName as Scope);
            const permission = Object.values(permissions)[0];
            permissionManager.addPermission(permission);
            permissionManager.removePermission(permission);
            expect(permissionManager.hasPermission(permission)).toBe(false);
        });

        it("togglePermission toggles a permission", () => {
            const permissionManager = new PermissionManager(scopeName as Scope);
            const permission = Object.values(permissions)[0];
            permissionManager.togglePermission(permission);
            expect(permissionManager.hasPermission(permission)).toBe(true);
            permissionManager.togglePermission(permission);
            expect(permissionManager.hasPermission(permission)).toBe(false);
        });
    });
});