import {z} from "zod";

import {sqlUserSchema} from "../sql";

export const userUpdateSchema = sqlUserSchema
    .pick({
        "sqlId": true,
        "username": true,
        "aboutMe": true,
        "avatarUrl": true
    })
    .partial();

export type TUserUpdate = z.infer<typeof userUpdateSchema>;