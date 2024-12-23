"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firebaseGameWeekSchema = void 0;
const zod_1 = require("zod");
exports.firebaseGameWeekSchema = zod_1.z.object({
    "gameFirestoreId": zod_1.z.string(),
    "gameSqlId": zod_1.z.string(),
    "sqlId": zod_1.z.string(),
    "theme": zod_1.z.string().optional(),
    "themePoll": zod_1.z.object({
        "options": zod_1.z.record(zod_1.z.string(), zod_1.z.object({
            // Votes is an array of user sql IDs
            "votes": zod_1.z.array(zod_1.z.string())
        })).optional(),
        "status": zod_1.z.enum(["open", "closed"])
    }).optional()
});
