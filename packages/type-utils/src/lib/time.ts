import {z} from "zod";

export const timeStringRegex = /^([01][0-9]|2[0123]):[0-5][0-9]:00$/;

const timeStringSchema = z.string().regex(timeStringRegex);

type TimeString = z.infer<typeof timeStringSchema>;

export function isTimeString (time: string | TimeString): time is TimeString {
    return timeStringSchema.safeParse(time).success;
}