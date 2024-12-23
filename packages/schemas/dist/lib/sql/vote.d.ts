import { z } from "zod";
export declare const sqlVoteSchema: z.ZodObject<z.objectUtil.extendShape<{
    gameSqlId: z.ZodString;
    gameFirestoreId: z.ZodString;
    gameWeekSqlId: z.ZodString;
    gameWeekFirestoreId: z.ZodString;
    userSqlId: z.ZodString;
    userFirestoreId: z.ZodString;
    pickSqlId: z.ZodString;
    pickFirestoreId: z.ZodString;
}, {
    sqlId: z.ZodString;
    firestoreId: z.ZodString;
}>, "strip", z.ZodTypeAny, {
    gameFirestoreId: string;
    gameSqlId: string;
    sqlId: string;
    firestoreId: string;
    userSqlId: string;
    gameWeekSqlId: string;
    gameWeekFirestoreId: string;
    userFirestoreId: string;
    pickSqlId: string;
    pickFirestoreId: string;
}, {
    gameFirestoreId: string;
    gameSqlId: string;
    sqlId: string;
    firestoreId: string;
    userSqlId: string;
    gameWeekSqlId: string;
    gameWeekFirestoreId: string;
    userFirestoreId: string;
    pickSqlId: string;
    pickFirestoreId: string;
}>;
export type TSqlVote = z.infer<typeof sqlVoteSchema>;
//# sourceMappingURL=vote.d.ts.map