import {isDateString} from "@potw/type-utils";
import {z} from "zod";

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