"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGamePayloadSchema = void 0;
const tslib_1 = require("tslib");
const zod_1 = tslib_1.__importDefault(require("zod"));
const typeUtils_1 = require("@potw/typeUtils");
const sql_1 = require("../sql");
const date_1 = require("../shared/date");
exports.createGamePayloadSchema = zod_1.default.object({
    "name": zod_1.default.string(),
    "description": zod_1.default.string().or(zod_1.default.null()),
    "isPrivate": zod_1.default.boolean(),
    "adminId": zod_1.default.string(),
    "startDate": (0, date_1.validDateTimeString)(),
    "endDate": (0, date_1.validDateString)().or(zod_1.default.null()),
    "addAdminAsPlayer": zod_1.default.boolean(),
    "period": sql_1.periodStringSchema,
    "regularScheduledStartTimeUtc": zod_1.default.string().refine(typeUtils_1.isTimeString),
    "players": zod_1.default.array(zod_1.default.object({
        "email": zod_1.default.string(),
        "firestoreId": zod_1.default.string().or(zod_1.default.null())
    }))
});
