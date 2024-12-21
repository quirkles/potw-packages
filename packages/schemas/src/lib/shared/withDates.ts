import {z} from "zod";

export const withDates = z.object({
    "createdAt": z.string(),
    "updatedAt": z.string()
});

const timestampToDateField = z.object({
    "seconds": z.number(),
    "nanoseconds": z.number()
}).transform((val) => {
    return new Date(val.seconds * 1000);
});

export const withTimestampDates = z.object({
    "createdAt": timestampToDateField,
    "updatedAt": timestampToDateField
});
