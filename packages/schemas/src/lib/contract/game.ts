import z from "zod";

import {isTimeString} from "@potw/type-utils";

import {periodStringSchema} from "../sql";
import {validDateString, validDateTimeString} from "../shared/date";

export const createGamePayloadSchema = z.object({
    "name": z.string(),
    "description": z.string().or(z.null()),
    "isPrivate": z.boolean(),
    "adminId": z.string(),
    "startDate": validDateTimeString(),
    "endDate": validDateString().or(z.null()),
    "addAdminAsPlayer": z.boolean(),
    "period": periodStringSchema,
    "regularScheduledStartTimeUtc": z.string().refine(isTimeString),
    "players": z.array(
        z.object({
            "email": z.string(),
            "firestoreId": z.string().or(z.null())
        })
    )
});
export type CreateGamePayload = z.infer<typeof createGamePayloadSchema>;