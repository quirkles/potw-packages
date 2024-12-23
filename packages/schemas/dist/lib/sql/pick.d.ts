import { z } from "zod";
export declare const sqlPickSchema: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
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
}>;
export type TSqlPick = z.infer<typeof sqlPickSchema>;
//# sourceMappingURL=pick.d.ts.map