"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeStringRegex = void 0;
exports.isTimeString = isTimeString;
const tslib_1 = require("tslib");
const zod_1 = tslib_1.__importDefault(require("zod"));
exports.timeStringRegex = /^([01][0-9]|2[0123]):[0-5][0-9]:00$/;
const timeStringSchema = zod_1.default.string().regex(exports.timeStringRegex);
function isTimeString(time) {
    return timeStringSchema.safeParse(time).success;
}
