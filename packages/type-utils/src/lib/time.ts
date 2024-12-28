import {z} from "zod";

export const timeStringRegex = /^([01][0-9]|2[0123]):[0-5][0-9]:00$/;

const timeStringSchema = z.string().regex(timeStringRegex);

export type TTimeString = z.infer<typeof timeStringSchema>;

export function isTimeString (time: string | TTimeString): time is TTimeString {
    return timeStringSchema.safeParse(time).success;
}

export function stringToTimeString (time: string): TTimeString {
    return timeStringSchema.parse(time);
}