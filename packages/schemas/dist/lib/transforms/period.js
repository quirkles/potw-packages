"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformPeriodToPeriodString = exports.transformPeriodStringToPeriod = void 0;
const transformPeriodStringToPeriod = (periodString) => {
    if (periodString === "daily" ||
        periodString === "biWeekly" ||
        periodString === "weekly" ||
        periodString === "monthly") {
        return periodString;
    }
    else if (periodString.startsWith("every")) {
        const [recurrence, dayOfWeek] = periodString.split("-");
        return {
            "recurrence": recurrence,
            "dayOfWeek": dayOfWeek
        };
    }
    else {
        const [quantity, unit] = periodString.split("-");
        return {
            "quantity": Number(quantity),
            "unit": unit
        };
    }
};
exports.transformPeriodStringToPeriod = transformPeriodStringToPeriod;
const transformPeriodToPeriodString = (period) => {
    if (typeof period === "string") {
        return period;
    }
    else if ("recurrence" in period) {
        return `${period.recurrence}-${period.dayOfWeek}`;
    }
    else if ("quantity" in period) {
        return `${period.quantity}-${period.unit}`;
    }
    throw new Error("Invalid period");
};
exports.transformPeriodToPeriodString = transformPeriodToPeriodString;
