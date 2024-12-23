import { PermissionDefinition } from "./base";
export type Scope = "user" | "game" | "gameWeek";
export type ScopeDefinitions = {
    [scope in Scope]: PermissionDefinition;
};
export declare const scopeDefinitions: {
    readonly user: {
        readonly CAN_SPOOF_ANY_USER: number;
    };
    readonly game: {
        readonly CAN_EDIT: number;
        readonly CAN_COMMENT: number;
    };
    readonly gameWeek: {
        readonly CAN_CREATE_THEME_POLL: number;
        readonly CAN_VOTE_IN_THEME_POLL: number;
        readonly CAN_COMMENT: number;
        readonly CAN_SUBMIT_PICK: number;
        readonly CAN_VOTE_FOR_PICK: number;
    };
};
export type PermissionValueForScope<scope extends Scope> = ScopeDefinitions[scope][keyof ScopeDefinitions[scope]];
export { type PermissionDefinition, type PermissionMap } from "./base";
export { type GamePermissionName, type GamePermissionValue, gamePermissions } from "./game";
export { type GameWeekPermissionName, type GameWeekPermissionValue, gameWeekPermissions } from "./gameWeek";
export { type UserPermissionName, type UserPermissionValue, userPermissions } from "./user";
//# sourceMappingURL=index.d.ts.map