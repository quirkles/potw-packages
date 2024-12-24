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

export function getPeriodDisplayText (period: TPeriod): string {
    if (typeof period === "string") {
        switch (period) {
            case "daily":
                return "Daily";
            case "weekly":
                return "Weekly";
            case "monthly":
                return "Monthly";
            case "biWeekly":
                return "Bi-weekly";
        }
    }
    if ("quantity" in period) {
        switch (period.unit) {
            case "day":
                return `Every ${period.quantity} days`;
            case "week":
                return `Every ${period.quantity} weeks`;
            case "month":
                return `Every ${period.quantity} months`;
        }
    }
    switch (period.recurrence) {
        case "every":
            return `Every ${period.dayOfWeek}`;
        case "everyOther":
            return `Every other ${period.dayOfWeek}`;
    }
}