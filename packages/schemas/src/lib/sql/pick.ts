import {z} from "zod";

import {withDates, withIds} from "../utils";

export const sqlPickSchema = z.object({
    "spotifyTrackId": z.string().nullable(),
    "youtubeVideoId": z.string().nullable(),
    "youtubeTrackId": z.string().nullable(),
    "artist": z.string(),
    "title": z.string(),

    "userSqlId": z.string(),
    "gameWeekSqlId": z.string()
}).merge(withDates).merge(withIds);

export type TSqlPick = z.infer<typeof sqlPickSchema>;
