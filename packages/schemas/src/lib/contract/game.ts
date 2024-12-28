import {isTimeString} from "@potw/type-utils";
import {default as z} from "zod";

import {validDateString, validDateTimeString} from "../shared/date";
import {periodStringSchema} from "../sql";


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
export type TCreateGamePayload = z.infer<typeof createGamePayloadSchema>;