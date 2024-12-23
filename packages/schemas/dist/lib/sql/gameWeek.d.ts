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
}>;
export type TSqlGameWeek = z.infer<typeof sqlGameWeekSchema>;
//# sourceMappingURL=gameWeek.d.ts.map