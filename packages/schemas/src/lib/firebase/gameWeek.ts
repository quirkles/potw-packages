import {z} from "zod";

const firebaseGameWeekThemePollSchema = z.object({
    "options": z.record(
        // the theme
        z.string(),
        z.object({
            // array of user ids who voted for the theme
            "votes": z.array(z.string())
        })
    ),
    "status": z.enum(["open", "closed"])
});

export type TFirebaseGameWeekThemePollSchema = z.infer<typeof firebaseGameWeekThemePollSchema>;

export const firebaseGameWeekSchema = z.object({
    "gameFirestoreId": z.string(),
    "gameSqlId": z.string(),
    "sqlId": z.string(),
    "theme": z.string().optional(),
    "themePoll": firebaseGameWeekThemePollSchema
});

export type TFirebaseGameWeek = z.infer<typeof firebaseGameWeekSchema>;
