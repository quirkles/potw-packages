"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withTimestampDates = exports.withDates = void 0;
const zod_1 = require("zod");
exports.withDates = zod_1.z.object({
    "createdAt": zod_1.z.string(),
    "updatedAt": zod_1.z.string()
});
const timestampToDateField = zod_1.z.object({
    "seconds": zod_1.z.number(),
    "nanoseconds": zod_1.z.number()
}).transform((val) => {
    return new Date(val.seconds * 1000);
});
exports.withTimestampDates = zod_1.z.object({
    "createdAt": timestampToDateField,
    "updatedAt": timestampToDateField
});
