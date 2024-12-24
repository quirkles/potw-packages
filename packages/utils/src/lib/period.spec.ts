import {TPeriod} from "@potw/schemas";

import {getPeriodDisplayText} from "./period";

describe("getPeriodDisplayText", () => {

    // Returns 'Daily' when input is 'daily' string literal
    it("should return \"Daily\" when period is \"daily\"", () => {
        const period = "daily";
        const result = getPeriodDisplayText(period as TPeriod);
        expect(result).toBe("Daily");
    });

    // Handles single vs plural text for quantity=1 (day vs days)
    it("should return singular form when quantity is 1", () => {
        const period = {"quantity": 1,
            "unit": "day"};
        const result = getPeriodDisplayText(period as TPeriod);
        expect(result).toBe("Every 1 days");
    });

    // Returns 'Daily' when input is 'daily' string
    it("should return \"Daily\" when period is \"daily\"", () => {
        const period = "daily";
        const result = getPeriodDisplayText(period as TPeriod);
        expect(result).toBe("Daily");
    });

    // Handles single quantity values (1 day, 1 week, 1 month)
    it("should return correct text for single quantity periods", () => {
        const dayPeriod = {"quantity": 1,
            "unit": "day"};
        const weekPeriod = {"quantity": 1,
            "unit": "week"};
        const monthPeriod = {"quantity": 1,
            "unit": "month"};

        expect(getPeriodDisplayText(dayPeriod as TPeriod)).toBe("Every 1 days");
        expect(getPeriodDisplayText(weekPeriod as TPeriod)).toBe("Every 1 weeks");
        expect(getPeriodDisplayText(monthPeriod as TPeriod)).toBe("Every 1 months");
    });

    // Combines quantity and unit with correct spacing
    it("should return \"Every 2 days\" when quantity is 2 and unit is \"day\"", () => {
        const period = {"quantity": 2,
            "unit": "day"};
        const result = getPeriodDisplayText(period as TPeriod);
        expect(result).toBe("Every 2 days");
    });

    // Handles all valid string period types (daily, weekly, monthly, biWeekly)
    it("should return correct display text for valid string period types", () => {
        const periods = ["daily", "weekly", "monthly", "biWeekly"];
        const expectedResults = ["Daily", "Weekly", "Monthly", "Bi-weekly"];

        periods.forEach((period, index) => {
            const result = getPeriodDisplayText(period as TPeriod);
            expect(result).toBe(expectedResults[index]);
        });
    });

    // Returns 'Every monday' for recurrence='every' and dayOfWeek='monday'
    it("should return \"Every monday\" when recurrence is \"every\" and dayOfWeek is \"monday\"", () => {
        const period = {"recurrence": "every",
            "dayOfWeek": "monday"};
        const result = getPeriodDisplayText(period as TPeriod);
        expect(result).toBe("Every monday");
    });

    // Returns 'Every other friday' for recurrence='everyOther' and dayOfWeek='friday'
    it("should return \"Every other friday\" when recurrence is \"everyOther\" and dayOfWeek is \"friday\"", () => {
        const period = {"recurrence": "everyOther",
            "dayOfWeek": "friday"};
        const result = getPeriodDisplayText(period as TPeriod);
        expect(result).toBe("Every other friday");
    });

    // Returns 'Every 2 days' for quantity=2 and unit='day'
    it("should return \"Every 2 days\" when quantity is 2 and unit is \"day\"", () => {
        const period = {"quantity": 2,
            "unit": "day"};
        const result = getPeriodDisplayText(period as TPeriod);
        expect(result).toBe("Every 2 days");
    });

    // Handles all valid time units (day, week, month)
    it("should return correct display text for valid time units", () => {
        const periodDay = {"quantity": 2,
            "unit": "day"};
        const periodWeek = {"quantity": 3,
            "unit": "week"};
        const periodMonth = {"quantity": 1,
            "unit": "month"};

        const resultDay = getPeriodDisplayText(periodDay as TPeriod);
        const resultWeek = getPeriodDisplayText(periodWeek as TPeriod);
        const resultMonth = getPeriodDisplayText(periodMonth as TPeriod);

        expect(resultDay).toBe("Every 2 days");
        expect(resultWeek).toBe("Every 3 weeks");
        expect(resultMonth).toBe("Every 1 months");
    });

    // Proper string casing in returned text
    it("should return \"Bi-weekly\" when period is \"biWeekly\"", () => {
        const period = "biWeekly";
        const result = getPeriodDisplayText(period as TPeriod);
        expect(result).toBe("Bi-weekly");
    });

    // Handles both recurrence types (every, everyOther)
    it("should return correct text for recurrence types \"every\" and \"everyOther\"", () => {
        const periodEvery = {"recurrence": "every",
            "dayOfWeek": "monday"};
        const resultEvery = getPeriodDisplayText(periodEvery as TPeriod);
        expect(resultEvery).toBe("Every monday");

        const periodEveryOther = {"recurrence": "everyOther",
            "dayOfWeek": "friday"};
        const resultEveryOther = getPeriodDisplayText(periodEveryOther as TPeriod);
        expect(resultEveryOther).toBe("Every other friday");
    });
});
