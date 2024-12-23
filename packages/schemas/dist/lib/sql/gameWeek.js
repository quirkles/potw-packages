"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqlGameWeekSchema = void 0;
const zod_1 = require("zod");
const utils_1 = require("../utils");
exports.sqlGameWeekSchema = zod_1.z.object({
    "startDateTime": zod_1.z.date(),
    "theme": zod_1.z.string().nullable(),
    "meetingLink": zod_1.z.string().nullable(),
    "gameSqlId": zod_1.z.string(),
    "status": zod_1.z.enum(["complete", "overdue", "pending", "current"])
}).merge(utils_1.withIds);
