import { z } from "zod";
export declare const allPeriodStrings: readonly ["daily", "biWeekly", "weekly", "monthly", "every-sunday", "every-monday", "every-tuesday", "every-wednesday", "every-thursday", "every-friday", "every-saturday", "everyOther-sunday", "everyOther-monday", "everyOther-tuesday", "everyOther-wednesday", "everyOther-thursday", "everyOther-friday", "everyOther-saturday"];
export declare const periodStringSchema: z.ZodUnion<[z.ZodEnum<["daily", "biWeekly", "weekly", "monthly", "every-sunday", "every-monday", "every-tuesday", "every-wednesday", "every-thursday", "every-friday", "every-saturday", "everyOther-sunday", "everyOther-monday", "everyOther-tuesday", "everyOther-wednesday", "everyOther-thursday", "everyOther-friday", "everyOther-saturday"]>, z.ZodString]>;
export type TPeriodString = z.infer<typeof periodStringSchema>;
export declare const sqlGameSchema: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
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
    name: string;
    description: string | null;
    startDate: string;
    endDate: string | null;
    regularScheduledStartTimeUtc: string;
    period: string;
    isPrivate: boolean;
    adminSqlId: string;
    firestoreId: string;
}, {
    sqlId: string;
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
    firestoreId: string;
}>;
export type TSqlGame = z.infer<typeof sqlGameSchema>;
//# sourceMappingURL=game.d.ts.map