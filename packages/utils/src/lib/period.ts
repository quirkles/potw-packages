import {TPeriod, TPeriodString} from "@potw/schemas";

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