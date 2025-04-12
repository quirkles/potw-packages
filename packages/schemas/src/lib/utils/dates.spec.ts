import {describe, expect} from "vitest";

import {dateFromString} from "./dates";

describe("Dates", () => {
    test("should return the current date", () => {
        const input = "2025-04-24T21:00:00.000Z";
        const output = dateFromString.parse(input);
        expect(output).toBeInstanceOf(Date);
        expect(output.getFullYear()).toBe(2025);
        expect(output.getMonth()).toBe(3);
        expect(output.getDate()).toBe(24);
    });
});