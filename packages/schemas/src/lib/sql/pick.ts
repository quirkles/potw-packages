import {z} from "zod";

import {withDates, withIds} from "../shared";

export const pickSchema = z.object({
    "spotifyTrackId": z.string().nullable(),
    "youtubeVideoId": z.string().nullable(),
    "youtubeTrackId": z.string().nullable(),
    "artist": z.string(),
    "title": z.string(),

    "userSqlId": z.string(),
    "gameWeekSqlId": z.string()
}).merge(withDates).merge(withIds);

export type Pick = z.infer<typeof pickSchema>;
