"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firebaseUserSchema = void 0;
const zod_1 = require("zod");
const utils_1 = require("../utils");
exports.firebaseUserSchema = zod_1.z.object({
    "sqlId": zod_1.z.string(),
    "email": zod_1.z.string()
}).merge(utils_1.withTimestampDates);
