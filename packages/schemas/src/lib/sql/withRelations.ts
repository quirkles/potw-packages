import {z} from "zod";

import {sqlGameSchema} from "./game";
import {sqlGameWeekSchema} from "./gameWeek";
import {sqlPickSchema} from "./pick";
import {sqlUserSchema} from "./user";

export const sqlUserWithRelationsSchema = sqlUserSchema.extend({
    "gamesAsAdmin": z.array(sqlGameSchema).optional(),
    "gamesAsParticipant": z.array(sqlGameSchema).optional(),
    "picks": z.array(sqlPickSchema).optional()
});

export type TSqlUserWithRelations = z.infer<typeof sqlUserWithRelationsSchema>;

export const sqlGameWithRelationsSchema = sqlGameSchema.extend({
    "admin": sqlUserSchema.optional(),
    "players": z.array(sqlUserSchema).optional(),
    "gameWeeks": z.array(sqlGameWeekSchema).optional()
});

export type TSqlGameWithRelations = z.infer<typeof sqlGameWithRelationsSchema>;

export const sqlGameWeekWithRelationsSchema = sqlGameWeekSchema.extend({
    "picks": z.array(sqlPickSchema).optional(),
    "game": sqlGameSchema.optional()
});

export type TSqlGameWeekWithRelations = z.infer<typeof sqlGameWeekWithRelationsSchema>;

export const sqlPickWithRelationsSchema = sqlPickSchema.extend({
    "user": sqlUserSchema.optional(),
    "gameWeek": sqlGameWeekSchema.optional()
});

export type TSqlPickWithRelations = z.infer<typeof sqlPickWithRelationsSchema>;