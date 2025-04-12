import {z} from "zod";

import {withIds} from "../utils";
import {dateFromString} from "../utils/dates";

export const sqlGameWeekSchema = z.object({
    "startDateTime": dateFromString,
    "theme": z.string().nullable(),
    "meetingLink": z.string().nullable(),
    "gameSqlId": z.string(),
    "status": z.enum(["complete", "overdue", "pending", "current"])
}).merge(withIds);

export type TSqlGameWeek = z.infer<typeof sqlGameWeekSchema>;
