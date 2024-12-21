import {z} from "zod";

import {withDates, withIds} from "../shared";

export const sqlUserSchema = z.object({
    "email": z.string(),
    "username": z.string().nullable(),
    "aboutMe": z.string().nullable(),
    "avatarUrl": z.string().nullable()

}).merge(withDates).merge(withIds);

export type SqlUser = z.infer<typeof sqlUserSchema>;
