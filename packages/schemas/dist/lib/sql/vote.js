"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqlVoteSchema = void 0;
const zod_1 = require("zod");
const utils_1 = require("../utils");
exports.sqlVoteSchema = zod_1.z.object({
    "gameSqlId": zod_1.z.string(),
    "gameFirestoreId": zod_1.z.string(),
    "gameWeekSqlId": zod_1.z.string(),
    "gameWeekFirestoreId": zod_1.z.string(),
    "userSqlId": zod_1.z.string(),
    "userFirestoreId": zod_1.z.string(),
    "pickSqlId": zod_1.z.string(),
    "pickFirestoreId": zod_1.z.string()
}).merge(utils_1.withIds);
