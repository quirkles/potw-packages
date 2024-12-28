import {z} from "zod";

import {withDates} from "../utils";
export const firebaseCommentSchema = z
    .object({
        "firestoreId": z.string(),
        "title": z.string().nullable(),
        "content": z.string(),
        "taggedUserFirestoreIds": z.array(z.string()),
        "replyCommentFirestoreIds": z.array(z.string()),
        "parentCommentFirestoreId": z.string().nullable(),
        "authorFirestoreId": z.string(),
        "authorSqlId": z.string()
    })
    .merge(withDates);

export type TFirebaseComment = z.infer<typeof firebaseCommentSchema>;