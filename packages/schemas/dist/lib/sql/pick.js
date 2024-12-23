"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqlPickSchema = void 0;
const zod_1 = require("zod");
const utils_1 = require("../utils");
exports.sqlPickSchema = zod_1.z.object({
    "spotifyTrackId": zod_1.z.string().nullable(),
    "youtubeVideoId": zod_1.z.string().nullable(),
    "youtubeTrackId": zod_1.z.string().nullable(),
    "artist": zod_1.z.string(),
    "title": zod_1.z.string(),
    "userSqlId": zod_1.z.string(),
    "gameWeekSqlId": zod_1.z.string()
}).merge(utils_1.withDates).merge(utils_1.withIds);
