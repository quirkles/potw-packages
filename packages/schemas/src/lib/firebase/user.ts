import {z} from "zod";

import {withTimestampDates} from "../utils";


export const firebaseUserSchema = z.object({
    "sqlId": z.string(),
    "email": z.string()

}).merge(withTimestampDates);

export type TFirebaseUser = z.infer<typeof firebaseUserSchema>;


