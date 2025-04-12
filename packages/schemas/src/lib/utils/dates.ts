import {z} from "zod";

export const withDates = z.object({
    "createdAt": z.string(),
    "updatedAt": z.string()
});

export const timestampToDateField = z.object({
    "seconds": z.number(),
    "nanoseconds": z.number()
}).transform((val) => {
    return new Date(val.seconds * 1000);
});

export const withTimestampDates = z.object({
    "createdAt": timestampToDateField,
    "updatedAt": timestampToDateField
});

const dateTimeRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;

export const dateFromString = z.string().regex(dateTimeRegex).transform((val) => {
    return new Date(val);
});