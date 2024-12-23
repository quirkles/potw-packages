import {z} from "zod";

import {isDateString} from "@potw/type-utils";

export const validDateTimeString = () =>
    z.string().refine(
        (value) => {
            try {
                return !isNaN(new Date(value).getTime());
            } catch {
                return false;
            }
        },
        {
            "message": "Invalid date string"
        }
    );

export const validDateString = () =>
    z.string().refine(
        (value) => {
            return isDateString(value);
        },
        {
            "message": "Invalid date string"
        }
    );