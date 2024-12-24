"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeStringRegex = void 0;
exports.isTimeString = isTimeString;
const zod_1 = require("zod");
exports.timeStringRegex = /^([01][0-9]|2[0123]):[0-5][0-9]:00$/;
const timeStringSchema = zod_1.z.string().regex(exports.timeStringRegex);
function isTimeString(time) {
    return timeStringSchema.safeParse(time).success;
}
