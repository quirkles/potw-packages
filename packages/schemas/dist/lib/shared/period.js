"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.periodSchema = void 0;
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
