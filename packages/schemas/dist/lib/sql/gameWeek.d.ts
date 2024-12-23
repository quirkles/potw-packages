import { z } from "zod";
export declare const sqlGameWeekSchema: z.ZodObject<z.objectUtil.extendShape<{
    startDateTime: z.ZodDate;
    theme: z.ZodNullable<z.ZodString>;
    meetingLink: z.ZodNullable<z.ZodString>;
    gameSqlId: z.ZodString;
    status: z.ZodEnum<["complete", "overdue", "pending", "current"]>;
}, {
    sqlId: z.ZodString;
    firestoreId: z.ZodString;
}>, "strip", z.ZodTypeAny, {
    sqlId: string;
    status: "complete" | "overdue" | "pending" | "current";
    gameSqlId: string;
    theme: string | null;
    firestoreId: string;
    startDateTime: Date;
    meetingLink: string | null;
}, {
    sqlId: string;
    status: "complete" | "overdue" | "pending" | "current";
    gameSqlId: string;
    theme: string | null;
    firestoreId: string;
    startDateTime: Date;
    meetingLink: string | null;
}>;
export type TSqlGameWeek = z.infer<typeof sqlGameWeekSchema>;
//# sourceMappingURL=gameWeek.d.ts.map