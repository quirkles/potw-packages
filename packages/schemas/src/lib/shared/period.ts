import {z} from "zod";

export const periodSchema = z.union([
    z.literal("daily"),
    z.literal("biWeekly"),
    z.literal("weekly"),
    z.literal("monthly"),
    z.object({
        "quantity": z.number(),
        "unit": z.union([z.literal("day"), z.literal("week"), z.literal("month")])
    }),
    z.object({
        "recurrence": z.union([z.literal("every"), z.literal("everyOther")]),
        "dayOfWeek": z.union([
            z.literal("sunday"),
            z.literal("monday"),
            z.literal("tuesday"),
            z.literal("wednesday"),
            z.literal("thursday"),
            z.literal("friday"),
            z.literal("saturday")
        ])
    })
]);

export type TPeriod = z.infer<typeof periodSchema>;