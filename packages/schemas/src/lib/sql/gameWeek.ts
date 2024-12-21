import {z} from "zod";
import {withIds} from "../shared";

export const gameWeekSqlSchema = z.object({
    "startDateTime": z.date(),
    "theme": z.string().nullable(),
    "meetingLink": z.string().nullable(),

    "gameSqlId": z.string(),
    "status": z.enum(["complete", "overdue", "pending", "current"])
}).merge(withIds);

export type SqlGameWeek = z.infer<typeof gameWeekSqlSchema>;
