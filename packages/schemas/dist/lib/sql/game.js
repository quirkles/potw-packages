"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqlGameSchema = exports.periodStringSchema = exports.allPeriodStrings = void 0;
const zod_1 = require("zod");
const utils_1 = require("../utils");
exports.allPeriodStrings = [
    "daily",
    "biWeekly",
    "weekly",
    "monthly",
    "every-sunday",
    "every-monday",
    "every-tuesday",
    "every-wednesday",
    "every-thursday",
    "every-friday",
    "every-saturday",
    "everyOther-sunday",
    "everyOther-monday",
    "everyOther-tuesday",
    "everyOther-wednesday",
    "everyOther-thursday",
    "everyOther-friday",
    "everyOther-saturday"
];
exports.periodStringSchema = zod_1.z.union([
    zod_1.z.enum(exports.allPeriodStrings),
    zod_1.z.string().regex(/^[0-9]+-(day|week|month)$/)
]);
exports.sqlGameSchema = zod_1.z.object({
    "name": zod_1.z.string(),
    "description": zod_1.z.string().nullable(),
    "startDate": zod_1.z.string(),
    "endDate": zod_1.z.string().nullable(),
    "regularScheduledStartTimeUtc": zod_1.z.string(),
    "period": exports.periodStringSchema,
    "isPrivate": zod_1.z.boolean(),
    "adminSqlId": zod_1.z.string()
})
    .merge(utils_1.withDates).merge(utils_1.withIds);
