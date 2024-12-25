import {z} from "zod";

import {withDates, withIds} from "../utils";

export const allPeriodStrings = [
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
] as const;

export const periodStringSchema = z.union([
    z.enum(allPeriodStrings),
    z.string().regex(/^[0-9]+-(day|week|month)$/)
]);

export type TPeriodString = z.infer<typeof periodStringSchema>;

export function isPeriodString (periodString: string): periodString is TPeriodString {
    return periodStringSchema.safeParse(periodString).success;
}

export const sqlGameSchema = z.object({
    "name": z.string(),
    "description": z.string().nullable(),
    "startDate": z.string(),
    "endDate": z.string().nullable(),
    "regularScheduledStartTimeUtc": z.string(),
    "period": periodStringSchema,
    "isPrivate": z.boolean(),

    "adminSqlId": z.string()
})
    .merge(withDates).merge(withIds);

export type TSqlGame = z.infer<typeof sqlGameSchema>;