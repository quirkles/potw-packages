"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.combinePermissions = combinePermissions;
exports.addPermission = addPermission;
exports.togglePermission = togglePermission;
exports.removePermission = removePermission;
exports.hasPermission = hasPermission;
exports.hasAnyPermission = hasAnyPermission;
exports.getPermissionMap = getPermissionMap;
const definitions_1 = require("../definitions");
function combinePermissions(...args) {
    return args
        .flat()
        .reduce((acc, permission) => addPermission(acc, permission), 0);
}
function addPermission(base, permissionToAdd) {
    return base | permissionToAdd;
}
function togglePermission(base, permissionToToggle) {
    return base ^ permissionToToggle;
}
function removePermission(base, permissionToRemove) {
    return base & ~permissionToRemove;
}
function hasPermission(base, permissionToCheck) {
    return (base & permissionToCheck) === permissionToCheck;
}
function hasAnyPermission(base, ...permissionsToCheck) {
    return permissionsToCheck.some((permission) => hasPermission(base, permission));
}
function getPermissionMap(permissions, scope) {
    const pm = {};
    for (const key in definitions_1.scopeDefinitions[scope]) {
        if (Object.prototype.hasOwnProperty.call(definitions_1.scopeDefinitions[scope], key)) {
            pm[key] = hasPermission(permissions, definitions_1.scopeDefinitions[scope][key]);
        }
    }
    return pm;
}
