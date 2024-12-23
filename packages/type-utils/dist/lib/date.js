"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDateString = isDateString;
function isDateString(date) {
    return /^2\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/.test(date);
}
