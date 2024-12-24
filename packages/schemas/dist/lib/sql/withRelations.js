"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqlPickWithRelationsSchema = exports.sqlGameWeekWithRelationsSchema = exports.sqlGameWithRelationsSchema = exports.sqlUserWithRelationsSchema = void 0;
const zod_1 = require("zod");
const game_1 = require("./game");
const gameWeek_1 = require("./gameWeek");
const pick_1 = require("./pick");
const user_1 = require("./user");
exports.sqlUserWithRelationsSchema = user_1.sqlUserSchema.extend({
    "gamesAsAdmin": zod_1.z.array(game_1.sqlGameSchema).optional(),
    "gamesAsParticipant": zod_1.z.array(game_1.sqlGameSchema).optional(),
    "picks": zod_1.z.array(zod_1.z.object({})).optional()
});
exports.sqlGameWithRelationsSchema = game_1.sqlGameSchema.extend({
    "admin": user_1.sqlUserSchema.optional(),
    "players": zod_1.z.array(user_1.sqlUserSchema).optional(),
    "gameWeeks": zod_1.z.array(gameWeek_1.sqlGameWeekSchema).optional()
});
exports.sqlGameWeekWithRelationsSchema = gameWeek_1.sqlGameWeekSchema.extend({
    "picks": zod_1.z.array(pick_1.sqlPickSchema).optional(),
    "game": game_1.sqlGameSchema.optional()
});
exports.sqlPickWithRelationsSchema = pick_1.sqlPickSchema.extend({
    "user": user_1.sqlUserSchema.optional(),
    "gameWeek": gameWeek_1.sqlGameWeekSchema.optional()
});
