import {z} from "zod";

import {withTimestampDates} from "../shared";


export const firebaseUserSchema = z.object({
    "sqlId": z.string(),
    "email": z.string()

}).merge(withTimestampDates);

export type FirebaseUser = z.infer<typeof firebaseUserSchema>;


