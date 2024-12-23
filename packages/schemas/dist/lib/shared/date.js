"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validDateString = exports.validDateTimeString = void 0;
const zod_1 = require("zod");
const typeUtils_1 = require("@potw/typeUtils");
const validDateTimeString = () => zod_1.z.string().refine((value) => {
    try {
        return !isNaN(new Date(value).getTime());
    }
    catch {
        return false;
    }
}, {
    "message": "Invalid date string"
});
exports.validDateTimeString = validDateTimeString;
const validDateString = () => zod_1.z.string().refine((value) => {
    return (0, typeUtils_1.isDateString)(value);
}, {
    "message": "Invalid date string"
});
exports.validDateString = validDateString;
