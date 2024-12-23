import { z } from "zod";
export declare const sqlUserWithRelationsSchema: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<z.objectUtil.extendShape<{
    email: z.ZodString;
    username: z.ZodNullable<z.ZodString>;
    aboutMe: z.ZodNullable<z.ZodString>;
    avatarUrl: z.ZodNullable<z.ZodString>;
}, {
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}>, {
    sqlId: z.ZodString;
    firestoreId: z.ZodString;
}>, {
    gamesAsAdmin: z.ZodOptional<z.ZodArray<z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        name: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        startDate: z.ZodString;
        endDate: z.ZodNullable<z.ZodString>;
        regularScheduledStartTimeUtc: z.ZodString;
        period: z.ZodUnion<[z.ZodEnum<["daily", "biWeekly", "weekly", "monthly", "every-sunday", "every-monday", "every-tuesday", "every-wednesday", "every-thursday", "every-friday", "every-saturday", "everyOther-sunday", "everyOther-monday", "everyOther-tuesday", "everyOther-wednesday", "everyOther-thursday", "everyOther-friday", "everyOther-saturday"]>, z.ZodString]>;
        isPrivate: z.ZodBoolean;
        adminSqlId: z.ZodString;
    }, {
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }>, {
        sqlId: z.ZodString;
        firestoreId: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        sqlId: string;
        createdAt: string;
        updatedAt: string;
        firestoreId: string;
        name: string;
        description: string | null;
        startDate: string;
        endDate: string | null;
        regularScheduledStartTimeUtc: string;
        period: string;
        isPrivate: boolean;
        adminSqlId: string;
    }, {
        sqlId: string;
        createdAt: string;
        updatedAt: string;
        firestoreId: string;
        name: string;
        description: string | null;
        startDate: string;
        endDate: string | null;
        regularScheduledStartTimeUtc: string;
        period: string;
        isPrivate: boolean;
        adminSqlId: string;
    }>, "many">>;
    gamesAsParticipant: z.ZodOptional<z.ZodArray<z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        name: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        startDate: z.ZodString;
        endDate: z.ZodNullable<z.ZodString>;
        regularScheduledStartTimeUtc: z.ZodString;
        period: z.ZodUnion<[z.ZodEnum<["daily", "biWeekly", "weekly", "monthly", "every-sunday", "every-monday", "every-tuesday", "every-wednesday", "every-thursday", "every-friday", "every-saturday", "everyOther-sunday", "everyOther-monday", "everyOther-tuesday", "everyOther-wednesday", "everyOther-thursday", "everyOther-friday", "everyOther-saturday"]>, z.ZodString]>;
        isPrivate: z.ZodBoolean;
        adminSqlId: z.ZodString;
    }, {
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }>, {
        sqlId: z.ZodString;
        firestoreId: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        sqlId: string;
        createdAt: string;
        updatedAt: string;
        firestoreId: string;
        name: string;
        description: string | null;
        startDate: string;
        endDate: string | null;
        regularScheduledStartTimeUtc: string;
        period: string;
        isPrivate: boolean;
        adminSqlId: string;
    }, {
        sqlId: string;
        createdAt: string;
        updatedAt: string;
        firestoreId: string;
        name: string;
        description: string | null;
        startDate: string;
        endDate: string | null;
        regularScheduledStartTimeUtc: string;
        period: string;
        isPrivate: boolean;
        adminSqlId: string;
    }>, "many">>;
    picks: z.ZodOptional<z.ZodArray<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>, "many">>;
}>, "strip", z.ZodTypeAny, {
    sqlId: string;
    createdAt: string;
    updatedAt: string;
    firestoreId: string;
    email: string;
    username: string | null;
    aboutMe: string | null;
    avatarUrl: string | null;
    gamesAsAdmin?: {
        sqlId: string;
        createdAt: string;
        updatedAt: string;
        firestoreId: string;
        name: string;
        description: string | null;
        startDate: string;
        endDate: string | null;
        regularScheduledStartTimeUtc: string;
        period: string;
        isPrivate: boolean;
        adminSqlId: string;
    }[] | undefined;
    gamesAsParticipant?: {
        sqlId: string;
        createdAt: string;
        updatedAt: string;
        firestoreId: string;
        name: string;
        description: string | null;
        startDate: string;
        endDate: string | null;
        regularScheduledStartTimeUtc: string;
        period: string;
        isPrivate: boolean;
        adminSqlId: string;
    }[] | undefined;
    picks?: {}[] | undefined;
}, {
    sqlId: string;
    createdAt: string;
    updatedAt: string;
    firestoreId: string;
    email: string;
    username: string | null;
    aboutMe: string | null;
    avatarUrl: string | null;
    gamesAsAdmin?: {
        sqlId: string;
        createdAt: string;
        updatedAt: string;
        firestoreId: string;
        name: string;
        description: string | null;
        startDate: string;
        endDate: string | null;
        regularScheduledStartTimeUtc: string;
        period: string;
        isPrivate: boolean;
        adminSqlId: string;
    }[] | undefined;
    gamesAsParticipant?: {
        sqlId: string;
        createdAt: string;
        updatedAt: string;
        firestoreId: string;
        name: string;
        description: string | null;
        startDate: string;
        endDate: string | null;
        regularScheduledStartTimeUtc: string;
        period: string;
        isPrivate: boolean;
        adminSqlId: string;
    }[] | undefined;
    picks?: {}[] | undefined;
}>;
export type TSqlUserWithRelations = z.infer<typeof sqlUserWithRelationsSchema>;
export declare const sqlGameWithRelationsSchema: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<z.objectUtil.extendShape<{
    name: z.ZodString;
    description: z.ZodNullable<z.ZodString>;
    startDate: z.ZodString;
    endDate: z.ZodNullable<z.ZodString>;
    regularScheduledStartTimeUtc: z.ZodString;
    period: z.ZodUnion<[z.ZodEnum<["daily", "biWeekly", "weekly", "monthly", "every-sunday", "every-monday", "every-tuesday", "every-wednesday", "every-thursday", "every-friday", "every-saturday", "everyOther-sunday", "everyOther-monday", "everyOther-tuesday", "everyOther-wednesday", "everyOther-thursday", "everyOther-friday", "everyOther-saturday"]>, z.ZodString]>;
    isPrivate: z.ZodBoolean;
    adminSqlId: z.ZodString;
}, {
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}>, {
    sqlId: z.ZodString;
    firestoreId: z.ZodString;
}>, {
    admin: z.ZodOptional<z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        email: z.ZodString;
        username: z.ZodNullable<z.ZodString>;
        aboutMe: z.ZodNullable<z.ZodString>;
        avatarUrl: z.ZodNullable<z.ZodString>;
    }, {
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }>, {
        sqlId: z.ZodString;
        firestoreId: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        sqlId: string;
        createdAt: string;
        updatedAt: string;
        firestoreId: string;
        email: string;
        username: string | null;
        aboutMe: string | null;
        avatarUrl: string | null;
    }, {
        sqlId: string;
        createdAt: string;
        updatedAt: string;
        firestoreId: string;
        email: string;
        username: string | null;
        aboutMe: string | null;
        avatarUrl: string | null;
    }>>;
    players: z.ZodOptional<z.ZodArray<z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        email: z.ZodString;
        username: z.ZodNullable<z.ZodString>;
        aboutMe: z.ZodNullable<z.ZodString>;
        avatarUrl: z.ZodNullable<z.ZodString>;
    }, {
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }>, {
        sqlId: z.ZodString;
        firestoreId: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        sqlId: string;
        createdAt: string;
        updatedAt: string;
        firestoreId: string;
        email: string;
        username: string | null;
        aboutMe: string | null;
        avatarUrl: string | null;
    }, {
        sqlId: string;
        createdAt: string;
        updatedAt: string;
        firestoreId: string;
        email: string;
        username: string | null;
        aboutMe: string | null;
        avatarUrl: string | null;
    }>, "many">>;
    gameWeeks: z.ZodOptional<z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
        startDateTime: z.ZodDate;
        theme: z.ZodNullable<z.ZodString>;
        meetingLink: z.ZodNullable<z.ZodString>;
        gameSqlId: z.ZodString;
        status: z.ZodEnum<["complete", "overdue", "pending", "current"]>;
    }, {
        sqlId: z.ZodString;
        firestoreId: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        gameSqlId: string;
        sqlId: string;
        theme: string | null;
        status: "complete" | "overdue" | "pending" | "current";
        firestoreId: string;
        startDateTime: Date;
        meetingLink: string | null;
    }, {
        gameSqlId: string;
        sqlId: string;
        theme: string | null;
        status: "complete" | "overdue" | "pending" | "current";
        firestoreId: string;
        startDateTime: Date;
        meetingLink: string | null;
    }>, "many">>;
}>, "strip", z.ZodTypeAny, {
    sqlId: string;
    createdAt: string;
    updatedAt: string;
    firestoreId: string;
    name: string;
    description: string | null;
    startDate: string;
    endDate: string | null;
    regularScheduledStartTimeUtc: string;
    period: string;
    isPrivate: boolean;
    adminSqlId: string;
    admin?: {
        sqlId: string;
        createdAt: string;
        updatedAt: string;
        firestoreId: string;
        email: string;
        username: string | null;
        aboutMe: string | null;
        avatarUrl: string | null;
    } | undefined;
    players?: {
        sqlId: string;
        createdAt: string;
        updatedAt: string;
        firestoreId: string;
        email: string;
        username: string | null;
        aboutMe: string | null;
        avatarUrl: string | null;
    }[] | undefined;
    gameWeeks?: {
        gameSqlId: string;
        sqlId: string;
        theme: string | null;
        status: "complete" | "overdue" | "pending" | "current";
        firestoreId: string;
        startDateTime: Date;
        meetingLink: string | null;
    }[] | undefined;
}, {
    sqlId: string;
    createdAt: string;
    updatedAt: string;
    firestoreId: string;
    name: string;
    description: string | null;
    startDate: string;
    endDate: string | null;
    regularScheduledStartTimeUtc: string;
    period: string;
    isPrivate: boolean;
    adminSqlId: string;
    admin?: {
        sqlId: string;
        createdAt: string;
        updatedAt: string;
        firestoreId: string;
        email: string;
        username: string | null;
        aboutMe: string | null;
        avatarUrl: string | null;
    } | undefined;
    players?: {
        sqlId: string;
        createdAt: string;
        updatedAt: string;
        firestoreId: string;
        email: string;
        username: string | null;
        aboutMe: string | null;
        avatarUrl: string | null;
    }[] | undefined;
    gameWeeks?: {
        gameSqlId: string;
        sqlId: string;
        theme: string | null;
        status: "complete" | "overdue" | "pending" | "current";
        firestoreId: string;
        startDateTime: Date;
        meetingLink: string | null;
    }[] | undefined;
}>;
export type TSqlGameWithRelations = z.infer<typeof sqlGameWithRelationsSchema>;
export declare const sqlGameWeekWithRelationsSchema: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
    startDateTime: z.ZodDate;
    theme: z.ZodNullable<z.ZodString>;
    meetingLink: z.ZodNullable<z.ZodString>;
    gameSqlId: z.ZodString;
    status: z.ZodEnum<["complete", "overdue", "pending", "current"]>;
}, {
    sqlId: z.ZodString;
    firestoreId: z.ZodString;
}>, {
    picks: z.ZodOptional<z.ZodArray<z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        spotifyTrackId: z.ZodNullable<z.ZodString>;
        youtubeVideoId: z.ZodNullable<z.ZodString>;
        youtubeTrackId: z.ZodNullable<z.ZodString>;
        artist: z.ZodString;
        title: z.ZodString;
        userSqlId: z.ZodString;
        gameWeekSqlId: z.ZodString;
    }, {
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }>, {
        sqlId: z.ZodString;
        firestoreId: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        sqlId: string;
        createdAt: string;
        updatedAt: string;
        firestoreId: string;
        spotifyTrackId: string | null;
        youtubeVideoId: string | null;
        youtubeTrackId: string | null;
        artist: string;
        title: string;
        userSqlId: string;
        gameWeekSqlId: string;
    }, {
        sqlId: string;
        createdAt: string;
        updatedAt: string;
        firestoreId: string;
        spotifyTrackId: string | null;
        youtubeVideoId: string | null;
        youtubeTrackId: string | null;
        artist: string;
        title: string;
        userSqlId: string;
        gameWeekSqlId: string;
    }>, "many">>;
    game: z.ZodOptional<z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        name: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        startDate: z.ZodString;
        endDate: z.ZodNullable<z.ZodString>;
        regularScheduledStartTimeUtc: z.ZodString;
        period: z.ZodUnion<[z.ZodEnum<["daily", "biWeekly", "weekly", "monthly", "every-sunday", "every-monday", "every-tuesday", "every-wednesday", "every-thursday", "every-friday", "every-saturday", "everyOther-sunday", "everyOther-monday", "everyOther-tuesday", "everyOther-wednesday", "everyOther-thursday", "everyOther-friday", "everyOther-saturday"]>, z.ZodString]>;
        isPrivate: z.ZodBoolean;
        adminSqlId: z.ZodString;
    }, {
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }>, {
        sqlId: z.ZodString;
        firestoreId: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        sqlId: string;
        createdAt: string;
        updatedAt: string;
        firestoreId: string;
        name: string;
        description: string | null;
        startDate: string;
        endDate: string | null;
        regularScheduledStartTimeUtc: string;
        period: string;
        isPrivate: boolean;
        adminSqlId: string;
    }, {
        sqlId: string;
        createdAt: string;
        updatedAt: string;
        firestoreId: string;
        name: string;
        description: string | null;
        startDate: string;
        endDate: string | null;
        regularScheduledStartTimeUtc: string;
        period: string;
        isPrivate: boolean;
        adminSqlId: string;
    }>>;
}>, "strip", z.ZodTypeAny, {
    gameSqlId: string;
    sqlId: string;
    theme: string | null;
    status: "complete" | "overdue" | "pending" | "current";
    firestoreId: string;
    startDateTime: Date;
    meetingLink: string | null;
    picks?: {
        sqlId: string;
        createdAt: string;
        updatedAt: string;
        firestoreId: string;
        spotifyTrackId: string | null;
        youtubeVideoId: string | null;
        youtubeTrackId: string | null;
        artist: string;
        title: string;
        userSqlId: string;
        gameWeekSqlId: string;
    }[] | undefined;
    game?: {
        sqlId: string;
        createdAt: string;
        updatedAt: string;
        firestoreId: string;
        name: string;
        description: string | null;
        startDate: string;
        endDate: string | null;
        regularScheduledStartTimeUtc: string;
        period: string;
        isPrivate: boolean;
        adminSqlId: string;
    } | undefined;
}, {
    gameSqlId: string;
    sqlId: string;
    theme: string | null;
    status: "complete" | "overdue" | "pending" | "current";
    firestoreId: string;
    startDateTime: Date;
    meetingLink: string | null;
    picks?: {
        sqlId: string;
        createdAt: string;
        updatedAt: string;
        firestoreId: string;
        spotifyTrackId: string | null;
        youtubeVideoId: string | null;
        youtubeTrackId: string | null;
        artist: string;
        title: string;
        userSqlId: string;
        gameWeekSqlId: string;
    }[] | undefined;
    game?: {
        sqlId: string;
        createdAt: string;
        updatedAt: string;
        firestoreId: string;
        name: string;
        description: string | null;
        startDate: string;
        endDate: string | null;
        regularScheduledStartTimeUtc: string;
        period: string;
        isPrivate: boolean;
        adminSqlId: string;
    } | undefined;
}>;
export type TSqlGameWeekWithRelations = z.infer<typeof sqlGameWeekWithRelationsSchema>;
export declare const sqlPickWithRelationsSchema: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<z.objectUtil.extendShape<{
    spotifyTrackId: z.ZodNullable<z.ZodString>;
    youtubeVideoId: z.ZodNullable<z.ZodString>;
    youtubeTrackId: z.ZodNullable<z.ZodString>;
    artist: z.ZodString;
    title: z.ZodString;
    userSqlId: z.ZodString;
    gameWeekSqlId: z.ZodString;
}, {
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}>, {
    sqlId: z.ZodString;
    firestoreId: z.ZodString;
}>, {
    user: z.ZodOptional<z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        email: z.ZodString;
        username: z.ZodNullable<z.ZodString>;
        aboutMe: z.ZodNullable<z.ZodString>;
        avatarUrl: z.ZodNullable<z.ZodString>;
    }, {
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }>, {
        sqlId: z.ZodString;
        firestoreId: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        sqlId: string;
        createdAt: string;
        updatedAt: string;
        firestoreId: string;
        email: string;
        username: string | null;
        aboutMe: string | null;
        avatarUrl: string | null;
    }, {
        sqlId: string;
        createdAt: string;
        updatedAt: string;
        firestoreId: string;
        email: string;
        username: string | null;
        aboutMe: string | null;
        avatarUrl: string | null;
    }>>;
    gameWeek: z.ZodOptional<z.ZodObject<z.objectUtil.extendShape<{
        startDateTime: z.ZodDate;
        theme: z.ZodNullable<z.ZodString>;
        meetingLink: z.ZodNullable<z.ZodString>;
        gameSqlId: z.ZodString;
        status: z.ZodEnum<["complete", "overdue", "pending", "current"]>;
    }, {
        sqlId: z.ZodString;
        firestoreId: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        gameSqlId: string;
        sqlId: string;
        theme: string | null;
        status: "complete" | "overdue" | "pending" | "current";
        firestoreId: string;
        startDateTime: Date;
        meetingLink: string | null;
    }, {
        gameSqlId: string;
        sqlId: string;
        theme: string | null;
        status: "complete" | "overdue" | "pending" | "current";
        firestoreId: string;
        startDateTime: Date;
        meetingLink: string | null;
    }>>;
}>, "strip", z.ZodTypeAny, {
    sqlId: string;
    createdAt: string;
    updatedAt: string;
    firestoreId: string;
    spotifyTrackId: string | null;
    youtubeVideoId: string | null;
    youtubeTrackId: string | null;
    artist: string;
    title: string;
    userSqlId: string;
    gameWeekSqlId: string;
    user?: {
        sqlId: string;
        createdAt: string;
        updatedAt: string;
        firestoreId: string;
        email: string;
        username: string | null;
        aboutMe: string | null;
        avatarUrl: string | null;
    } | undefined;
    gameWeek?: {
        gameSqlId: string;
        sqlId: string;
        theme: string | null;
        status: "complete" | "overdue" | "pending" | "current";
        firestoreId: string;
        startDateTime: Date;
        meetingLink: string | null;
    } | undefined;
}, {
    sqlId: string;
    createdAt: string;
    updatedAt: string;
    firestoreId: string;
    spotifyTrackId: string | null;
    youtubeVideoId: string | null;
    youtubeTrackId: string | null;
    artist: string;
    title: string;
    userSqlId: string;
    gameWeekSqlId: string;
    user?: {
        sqlId: string;
        createdAt: string;
        updatedAt: string;
        firestoreId: string;
        email: string;
        username: string | null;
        aboutMe: string | null;
        avatarUrl: string | null;
    } | undefined;
    gameWeek?: {
        gameSqlId: string;
        sqlId: string;
        theme: string | null;
        status: "complete" | "overdue" | "pending" | "current";
        firestoreId: string;
        startDateTime: Date;
        meetingLink: string | null;
    } | undefined;
}>;
export type TSqlPickWithRelations = z.infer<typeof sqlPickWithRelationsSchema>;
//# sourceMappingURL=withRelations.d.ts.map