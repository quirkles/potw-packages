import {TPeriod, TPeriodString} from "@potw/schemas";

import {capitalize} from "./string";
export function getPeriodDisplayText (period: TPeriod | TPeriodString): string {
    if (typeof period === "string") {
        switch (period) {
            case "daily":
                return "Daily";
            case "weekly":
                return "Weekly";
            case "monthly":
                return "Monthly";
            case "biWeekly":
                return "Bi-weekly";
        }
        const [recurrence, dayOfWeek] = period.split("-");
        if (!["every", "everyOther"].includes(recurrence)) {
            throw new Error("Invalid period string");
        }
        if (!["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"].includes(dayOfWeek)) {
            throw new Error("Invalid period string");
        }
        return `${capitalize(recurrence)} ${capitalize(dayOfWeek)}`;
    } else if ("quantity" in period) {
        switch (period.unit) {
            case "day":
                return `Every ${period.quantity} days`;
            case "week":
                return `Every ${period.quantity} weeks`;
            case "month":
                return `Every ${period.quantity} months`;
        }
    } else if ("recurrence" in period) {
        switch (period.recurrence) {
            case "every":
                return `Every ${period.dayOfWeek}`;
            case "everyOther":
                return `Every other ${period.dayOfWeek}`;
        }
    }
    throw new Error("Invalid period");
}