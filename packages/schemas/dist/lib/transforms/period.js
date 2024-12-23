"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformPeriodToPeriodString = exports.transformPeriodStringToPeriod = void 0;
const transformPeriodStringToPeriod = (periodString) => {
    if (!periodString) {
        throw new Error("Missing period string");
    }
    if (periodString === "daily" ||
        periodString === "biWeekly" ||
        periodString === "weekly" ||
        periodString === "monthly") {
        return periodString;
    }
    else if (periodString.startsWith("every")) {
        const [recurrence, dayOfWeek] = periodString.split("-");
        if (!["every", "everyOther"].includes(recurrence)) {
            throw new Error("Invalid period string");
        }
        if (!["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"].includes(dayOfWeek)) {
            throw new Error("Invalid period string");
        }
        return {
            "recurrence": recurrence,
            "dayOfWeek": dayOfWeek
        };
    }
    else {
        const [quantity, unit] = periodString.split("-");
        if (isNaN(Number(quantity)) || !["day", "week", "month"].includes(unit)) {
            throw new Error("Invalid period string");
        }
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
