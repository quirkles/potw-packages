"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.periodSchema = void 0;
exports.getPeriodDisplayText = getPeriodDisplayText;
const zod_1 = require("zod");
exports.periodSchema = zod_1.z.union([
    zod_1.z.literal("daily"),
    zod_1.z.literal("biWeekly"),
    zod_1.z.literal("weekly"),
    zod_1.z.literal("monthly"),
    zod_1.z.object({
        "quantity": zod_1.z.number(),
        "unit": zod_1.z.union([zod_1.z.literal("day"), zod_1.z.literal("week"), zod_1.z.literal("month")])
    }),
    zod_1.z.object({
        "recurrence": zod_1.z.union([zod_1.z.literal("every"), zod_1.z.literal("everyOther")]),
        "dayOfWeek": zod_1.z.union([
            zod_1.z.literal("sunday"),
            zod_1.z.literal("monday"),
            zod_1.z.literal("tuesday"),
            zod_1.z.literal("wednesday"),
            zod_1.z.literal("thursday"),
            zod_1.z.literal("friday"),
            zod_1.z.literal("saturday")
        ])
    })
]);
function getPeriodDisplayText(period) {
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
