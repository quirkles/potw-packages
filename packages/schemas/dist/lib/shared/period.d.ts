import { z } from "zod";
export declare const periodSchema: z.ZodUnion<[z.ZodLiteral<"daily">, z.ZodLiteral<"biWeekly">, z.ZodLiteral<"weekly">, z.ZodLiteral<"monthly">, z.ZodObject<{
    quantity: z.ZodNumber;
    unit: z.ZodUnion<[z.ZodLiteral<"day">, z.ZodLiteral<"week">, z.ZodLiteral<"month">]>;
}, "strip", z.ZodTypeAny, {
    quantity: number;
    unit: "day" | "week" | "month";
}, {
    quantity: number;
    unit: "day" | "week" | "month";
}>, z.ZodObject<{
    recurrence: z.ZodUnion<[z.ZodLiteral<"every">, z.ZodLiteral<"everyOther">]>;
    dayOfWeek: z.ZodUnion<[z.ZodLiteral<"sunday">, z.ZodLiteral<"monday">, z.ZodLiteral<"tuesday">, z.ZodLiteral<"wednesday">, z.ZodLiteral<"thursday">, z.ZodLiteral<"friday">, z.ZodLiteral<"saturday">]>;
}, "strip", z.ZodTypeAny, {
    recurrence: "every" | "everyOther";
    dayOfWeek: "sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday";
}, {
    recurrence: "every" | "everyOther";
    dayOfWeek: "sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday";
}>]>;
export type TPeriod = z.infer<typeof periodSchema>;
export declare function getPeriodDisplayText(period: TPeriod): string;
//# sourceMappingURL=period.d.ts.map