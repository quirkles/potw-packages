"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqlUserSchema = void 0;
const zod_1 = require("zod");
const utils_1 = require("../utils");
exports.sqlUserSchema = zod_1.z.object({
    "email": zod_1.z.string(),
    "username": zod_1.z.string().nullable(),
    "aboutMe": zod_1.z.string().nullable(),
    "avatarUrl": zod_1.z.string().nullable()
}).merge(utils_1.withDates).merge(utils_1.withIds);
