import {
    addPermission,
    combinePermissions,
    hasAnyPermission,
    hasPermission,
    removePermission,
    togglePermission,
    getPermissionMap
} from "./utils";

import {gamePermissions, gameWeekPermissions, userPermissions} from "../definitions";

describe("getPermissionMap", () => {
    describe("scope: user", () => {
    // These tests use the actual app permissions
        it("should return correct permission, all false, app perms with no permissions set", () => {
            const permissions = combinePermissions();

            const result = getPermissionMap(permissions, "user");

            expect(result).toEqual({
                "CAN_SPOOF_ANY_USER": false
            });
        });
        it("should return correct permission, all true, app perms with all permissions set", () => {
            const permissions = combinePermissions(Object.values(userPermissions));
            const result = getPermissionMap(permissions, "user");
            expect(result).toEqual({
                "CAN_SPOOF_ANY_USER": true
            });
        });
    });
    describe("scope: game", () => {
    // These tests use the actual app permissions
        it("should return correct permission, all false, game perms with no permissions set", () => {
            const permissions = combinePermissions();
            const result = getPermissionMap(permissions, "game");
            expect(result).toEqual({
                "CAN_COMMENT": false,
                "CAN_EDIT": false
            });
        });
        it("should return correct permission, all true, app perms with all permissions set", () => {
            const permissions = combinePermissions(Object.values(gamePermissions));
            const result = getPermissionMap(permissions, "game");
            expect(result).toEqual({
                "CAN_COMMENT": true,
                "CAN_EDIT": true
            });
        });
    });
    describe("scope: game weeks", () => {
        it("should return correct permissions, all false, gameWeek perms with no permissions set", () => {
            const permissions = combinePermissions();
            const result = getPermissionMap(permissions, "gameWeek");
            expect(result).toEqual({
                "CAN_COMMENT": false,
                "CAN_CREATE_THEME_POLL": false,
                "CAN_SUBMIT_PICK": false,
                "CAN_VOTE_FOR_PICK": false,
                "CAN_VOTE_IN_THEME_POLL": false
            });
        });
        it("should return correct permissions, all true, gameWeek perms with all permissions set", () => {
            const permissions = combinePermissions(
                Object.values(gameWeekPermissions)
            );
            const result = getPermissionMap(permissions, "gameWeek");
            expect(result).toEqual({
                "CAN_COMMENT": true,
                "CAN_CREATE_THEME_POLL": true,
                "CAN_SUBMIT_PICK": true,
                "CAN_VOTE_FOR_PICK": true,
                "CAN_VOTE_IN_THEME_POLL": true
            });
        });
    });
});

describe("permissions", () => {
    // These tests don't rely on any specific permission values so we can just use this dummy map
    enum Permissions {
        "READ" = 1 << 0, // 1
        "WRITE" = 1 << 1, // 2
        "EXECUTE" = 1 << 2, // 4
        "ADMIN" = 1 << 3 // 8
    }
    describe("combinePermissions", () => {
        it("should compute permissions correctly for a single AppPermission", () => {
            const result = combinePermissions([Permissions.READ]);
            expect(result).toBe(1);
        });

        it("should compute permissions correctly for multiple Permissions", () => {
            const result = combinePermissions([Permissions.READ, Permissions.WRITE]);
            expect(result).toBe(3);
        });

        it("should compute permissions correctly for all Permissions combined", () => {
            const result = combinePermissions([
                Permissions.READ,
                Permissions.WRITE,
                Permissions.EXECUTE
            ]);
            expect(result).toBe(7);
        });

        it("should compute permissions correctly for an empty array", () => {
            const result = combinePermissions([]);
            expect(result).toBe(0);
        });
        it("accept an array or multiple arguments", () => {
            expect(combinePermissions(Permissions.READ, Permissions.WRITE)).toEqual(
                combinePermissions([Permissions.READ, Permissions.WRITE])
            );
        });
    });

    describe("togglePermission", () => {
        it("should toggle a single AppPermission ON when it is OFF in the permissions bitfield", () => {
            const initialPermissions = 0;
            const result = togglePermission(initialPermissions, Permissions.READ);
            expect(result).toBe(1);
        });

        it("should toggle a single AppPermission OFF when it is ON in the permissions bitfield", () => {
            const initialPermissions = Permissions.READ;
            const result = togglePermission(initialPermissions, Permissions.READ);
            expect(result).toBe(0);
        });

        it("should only toggle the specified permission and leave other permissions unchanged", () => {
            const initialPermissions = Permissions.READ | Permissions.WRITE;
            const result = togglePermission(initialPermissions, Permissions.WRITE);
            expect(result).toBe(Permissions.READ);
        });

        it("should toggle multiple different permissions correctly in sequence", () => {
            let permissions = 0;
            permissions = togglePermission(permissions, Permissions.READ);
            expect(permissions).toBe(Permissions.READ);
            permissions = togglePermission(permissions, Permissions.WRITE);
            expect(permissions).toBe(3);
            permissions = togglePermission(permissions, Permissions.READ);
            expect(permissions).toBe(2);
        });
    });
    describe("addPermission", () => {
        it("should add a single AppPermission to an existing permissions bitfield", () => {
            const initialPermissions = 0;
            const result = addPermission(initialPermissions, Permissions.READ);
            expect(result).toBe(1);
        });

        it("should combine multiple Permissions correctly in a permissions bitfield", () => {
            const initialPermissions = Permissions.READ;
            const result = addPermission(initialPermissions, Permissions.WRITE);
            expect(result).toBe(3);
        });

        it("should not duplicate an existing AppPermission in the permissions bitfield", () => {
            const initialPermissions = Permissions.READ;
            const result = addPermission(initialPermissions, Permissions.READ);
            expect(result).toBe(1);
        });
    });
    describe("removePermission", () => {
        it("should remove a single AppPermission when it is present in the permissions bitfield", () => {
            const initialPermissions = Permissions.READ | Permissions.WRITE;
            const result = removePermission(initialPermissions, Permissions.READ);
            expect(result).toBe(Permissions.WRITE);
        });

        it("should do nothing when attempting to remove an AppPermission not in the permissions bitfield", () => {
            const initialPermissions = Permissions.WRITE;
            const result = removePermission(initialPermissions, Permissions.READ);
            expect(result).toBe(Permissions.WRITE);
        });
    });

    describe("hasPermission", () => {
        it("should return true when the specified AppPermission is present in the permissions bitfield", () => {
            const permissions = Permissions.READ | Permissions.WRITE;
            const result = hasPermission(permissions, Permissions.READ);
            expect(result).toBe(true);
        });

        it("should return false when the specified AppPermission is not present in the permissions bitfield", () => {
            const permissions = Permissions.WRITE;
            const result = hasPermission(permissions, Permissions.EXECUTE);
            expect(result).toBe(false);
        });

        it("should return false for an empty permissions bitfield", () => {
            const permissions = 0;
            const result = hasPermission(permissions, Permissions.READ);
            expect(result).toBe(false);
        });

        it("should return true when all bits of a combined permission are set in the bitfield", () => {
            const permissions = combinePermissions(
                Permissions.READ,
                Permissions.WRITE,
                Permissions.EXECUTE
            );
            expect(hasPermission(permissions, Permissions.READ)).toBe(true);
            expect(hasPermission(permissions, Permissions.ADMIN)).toBe(false);
        });

        it("should return false when not all bits of a combined permission are set in the bitfield", () => {
            const permissions = Permissions.READ | Permissions.WRITE;
            const result = hasPermission(
                permissions,
                combinePermissions(Permissions.WRITE, Permissions.EXECUTE)
            );
            expect(result).toBe(false);
        });
    });

    describe("hasAnyPermission", () => {
        it("should return true when at least one specified permission is present", () => {
            const permissions = Permissions.READ | Permissions.WRITE;
            const result = hasAnyPermission(
                permissions,
                Permissions.READ,
                Permissions.EXECUTE
            );
            expect(result).toBe(true);
        });

        it("should return false if none of the specified permissions are present", () => {
            const permissions = Permissions.READ;
            const result = hasAnyPermission(
                permissions,
                Permissions.EXECUTE,
                Permissions.ADMIN
            );
            expect(result).toBe(false);
        });

        it("should return true for a single permission present in the bitfield", () => {
            const permissions = Permissions.ADMIN;
            const result = hasAnyPermission(permissions, Permissions.ADMIN);
            expect(result).toBe(true);
        });

        it("should return false for an empty permissions bitfield regardless of permissions checked", () => {
            const permissions = 0;
            const result = hasAnyPermission(
                permissions,
                Permissions.READ,
                Permissions.WRITE,
                Permissions.EXECUTE
            );
            expect(result).toBe(false);
        });

        it("should return true for multiple permissions when at least one is present", () => {
            const permissions = Permissions.READ | Permissions.WRITE;
            const result = hasAnyPermission(
                permissions,
                Permissions.WRITE,
                Permissions.EXECUTE
            );
            expect(result).toBe(true);
        });
    });
});
