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
}>;
export type TSqlGameWeek = z.infer<typeof sqlGameWeekSchema>;
//# sourceMappingURL=gameWeek.d.ts.map