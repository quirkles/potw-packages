import {z} from "zod";

import {withIds} from "../utils";

export const sqlVoteSchema = z.object({
    "gameSqlId": z.string(),
    "gameFirestoreId": z.string(),

    "gameWeekSqlId": z.string(),
    "gameWeekFirestoreId": z.string(),

    "userSqlId": z.string(),
    "userFirestoreId": z.string(),

    "pickSqlId": z.string(),
    "pickFirestoreId": z.string()
}).merge(withIds);

export type TSqlVote = z.infer<typeof sqlVoteSchema>;
