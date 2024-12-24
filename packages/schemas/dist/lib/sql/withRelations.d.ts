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
        firestoreId: string;
        createdAt: string;
        updatedAt: string;
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
        firestoreId: string;
        createdAt: string;
        updatedAt: string;
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
        firestoreId: string;
        createdAt: string;
        updatedAt: string;
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
        firestoreId: string;
        createdAt: string;
        updatedAt: string;
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
    firestoreId: string;
    email: string;
    username: string | null;
    aboutMe: string | null;
    avatarUrl: string | null;
    createdAt: string;
    updatedAt: string;
    gamesAsAdmin?: {
        sqlId: string;
        firestoreId: string;
        createdAt: string;
        updatedAt: string;
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
        firestoreId: string;
        createdAt: string;
        updatedAt: string;
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
    firestoreId: string;
    email: string;
    username: string | null;
    aboutMe: string | null;
    avatarUrl: string | null;
    createdAt: string;
    updatedAt: string;
    gamesAsAdmin?: {
        sqlId: string;
        firestoreId: string;
        createdAt: string;
        updatedAt: string;
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
        firestoreId: string;
        createdAt: string;
        updatedAt: string;
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
        firestoreId: string;
        email: string;
        username: string | null;
        aboutMe: string | null;
        avatarUrl: string | null;
        createdAt: string;
        updatedAt: string;
    }, {
        sqlId: string;
        firestoreId: string;
        email: string;
        username: string | null;
        aboutMe: string | null;
        avatarUrl: string | null;
        createdAt: string;
        updatedAt: string;
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
        firestoreId: string;
        email: string;
        username: string | null;
        aboutMe: string | null;
        avatarUrl: string | null;
        createdAt: string;
        updatedAt: string;
    }, {
        sqlId: string;
        firestoreId: string;
        email: string;
        username: string | null;
        aboutMe: string | null;
        avatarUrl: string | null;
        createdAt: string;
        updatedAt: string;
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
        startDateTime: Date;
        theme: string | null;
        meetingLink: string | null;
        gameSqlId: string;
        status: "complete" | "overdue" | "pending" | "current";
        sqlId: string;
        firestoreId: string;
    }, {
        startDateTime: Date;
        theme: string | null;
        meetingLink: string | null;
        gameSqlId: string;
        status: "complete" | "overdue" | "pending" | "current";
        sqlId: string;
        firestoreId: string;
    }>, "many">>;
}>, "strip", z.ZodTypeAny, {
    sqlId: string;
    firestoreId: string;
    createdAt: string;
    updatedAt: string;
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
        firestoreId: string;
        email: string;
        username: string | null;
        aboutMe: string | null;
        avatarUrl: string | null;
        createdAt: string;
        updatedAt: string;
    } | undefined;
    players?: {
        sqlId: string;
        firestoreId: string;
        email: string;
        username: string | null;
        aboutMe: string | null;
        avatarUrl: string | null;
        createdAt: string;
        updatedAt: string;
    }[] | undefined;
    gameWeeks?: {
        startDateTime: Date;
        theme: string | null;
        meetingLink: string | null;
        gameSqlId: string;
        status: "complete" | "overdue" | "pending" | "current";
        sqlId: string;
        firestoreId: string;
    }[] | undefined;
}, {
    sqlId: string;
    firestoreId: string;
    createdAt: string;
    updatedAt: string;
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
        firestoreId: string;
        email: string;
        username: string | null;
        aboutMe: string | null;
        avatarUrl: string | null;
        createdAt: string;
        updatedAt: string;
    } | undefined;
    players?: {
        sqlId: string;
        firestoreId: string;
        email: string;
        username: string | null;
        aboutMe: string | null;
        avatarUrl: string | null;
        createdAt: string;
        updatedAt: string;
    }[] | undefined;
    gameWeeks?: {
        startDateTime: Date;
        theme: string | null;
        meetingLink: string | null;
        gameSqlId: string;
        status: "complete" | "overdue" | "pending" | "current";
        sqlId: string;
        firestoreId: string;
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
        firestoreId: string;
        gameWeekSqlId: string;
        userSqlId: string;
        createdAt: string;
        updatedAt: string;
        spotifyTrackId: string | null;
        youtubeVideoId: string | null;
        youtubeTrackId: string | null;
        artist: string;
        title: string;
    }, {
        sqlId: string;
        firestoreId: string;
        gameWeekSqlId: string;
        userSqlId: string;
        createdAt: string;
        updatedAt: string;
        spotifyTrackId: string | null;
        youtubeVideoId: string | null;
        youtubeTrackId: string | null;
        artist: string;
        title: string;
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
        firestoreId: string;
        createdAt: string;
        updatedAt: string;
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
        firestoreId: string;
        createdAt: string;
        updatedAt: string;
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
    startDateTime: Date;
    theme: string | null;
    meetingLink: string | null;
    gameSqlId: string;
    status: "complete" | "overdue" | "pending" | "current";
    sqlId: string;
    firestoreId: string;
    picks?: {
        sqlId: string;
        firestoreId: string;
        gameWeekSqlId: string;
        userSqlId: string;
        createdAt: string;
        updatedAt: string;
        spotifyTrackId: string | null;
        youtubeVideoId: string | null;
        youtubeTrackId: string | null;
        artist: string;
        title: string;
    }[] | undefined;
    game?: {
        sqlId: string;
        firestoreId: string;
        createdAt: string;
        updatedAt: string;
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
    startDateTime: Date;
    theme: string | null;
    meetingLink: string | null;
    gameSqlId: string;
    status: "complete" | "overdue" | "pending" | "current";
    sqlId: string;
    firestoreId: string;
    picks?: {
        sqlId: string;
        firestoreId: string;
        gameWeekSqlId: string;
        userSqlId: string;
        createdAt: string;
        updatedAt: string;
        spotifyTrackId: string | null;
        youtubeVideoId: string | null;
        youtubeTrackId: string | null;
        artist: string;
        title: string;
    }[] | undefined;
    game?: {
        sqlId: string;
        firestoreId: string;
        createdAt: string;
        updatedAt: string;
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
        firestoreId: string;
        email: string;
        username: string | null;
        aboutMe: string | null;
        avatarUrl: string | null;
        createdAt: string;
        updatedAt: string;
    }, {
        sqlId: string;
        firestoreId: string;
        email: string;
        username: string | null;
        aboutMe: string | null;
        avatarUrl: string | null;
        createdAt: string;
        updatedAt: string;
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
        startDateTime: Date;
        theme: string | null;
        meetingLink: string | null;
        gameSqlId: string;
        status: "complete" | "overdue" | "pending" | "current";
        sqlId: string;
        firestoreId: string;
    }, {
        startDateTime: Date;
        theme: string | null;
        meetingLink: string | null;
        gameSqlId: string;
        status: "complete" | "overdue" | "pending" | "current";
        sqlId: string;
        firestoreId: string;
    }>>;
}>, "strip", z.ZodTypeAny, {
    sqlId: string;
    firestoreId: string;
    gameWeekSqlId: string;
    userSqlId: string;
    createdAt: string;
    updatedAt: string;
    spotifyTrackId: string | null;
    youtubeVideoId: string | null;
    youtubeTrackId: string | null;
    artist: string;
    title: string;
    user?: {
        sqlId: string;
        firestoreId: string;
        email: string;
        username: string | null;
        aboutMe: string | null;
        avatarUrl: string | null;
        createdAt: string;
        updatedAt: string;
    } | undefined;
    gameWeek?: {
        startDateTime: Date;
        theme: string | null;
        meetingLink: string | null;
        gameSqlId: string;
        status: "complete" | "overdue" | "pending" | "current";
        sqlId: string;
        firestoreId: string;
    } | undefined;
}, {
    sqlId: string;
    firestoreId: string;
    gameWeekSqlId: string;
    userSqlId: string;
    createdAt: string;
    updatedAt: string;
    spotifyTrackId: string | null;
    youtubeVideoId: string | null;
    youtubeTrackId: string | null;
    artist: string;
    title: string;
    user?: {
        sqlId: string;
        firestoreId: string;
        email: string;
        username: string | null;
        aboutMe: string | null;
        avatarUrl: string | null;
        createdAt: string;
        updatedAt: string;
    } | undefined;
    gameWeek?: {
        startDateTime: Date;
        theme: string | null;
        meetingLink: string | null;
        gameSqlId: string;
        status: "complete" | "overdue" | "pending" | "current";
        sqlId: string;
        firestoreId: string;
    } | undefined;
}>;
export type TSqlPickWithRelations = z.infer<typeof sqlPickWithRelationsSchema>;
//# sourceMappingURL=withRelations.d.ts.map