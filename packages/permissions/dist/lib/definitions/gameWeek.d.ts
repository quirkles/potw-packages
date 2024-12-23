export declare const gameWeekPermissions: {
    readonly CAN_CREATE_THEME_POLL: number;
    readonly CAN_VOTE_IN_THEME_POLL: number;
    readonly CAN_COMMENT: number;
    readonly CAN_SUBMIT_PICK: number;
    readonly CAN_VOTE_FOR_PICK: number;
};
export type GameWeekPermissionName = keyof typeof gameWeekPermissions;
export type GameWeekPermissionValue = (typeof gameWeekPermissions)[GameWeekPermissionName];
//# sourceMappingURL=gameWeek.d.ts.map