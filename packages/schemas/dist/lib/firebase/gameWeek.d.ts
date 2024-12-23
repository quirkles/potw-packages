import { z } from "zod";
export declare const firebaseGameWeekSchema: z.ZodObject<{
    gameFirestoreId: z.ZodString;
    gameSqlId: z.ZodString;
    sqlId: z.ZodString;
    theme: z.ZodOptional<z.ZodString>;
    themePoll: z.ZodOptional<z.ZodObject<{
        options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            votes: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            votes: string[];
        }, {
            votes: string[];
        }>>>;
        status: z.ZodEnum<["open", "closed"]>;
    }, "strip", z.ZodTypeAny, {
        status: "open" | "closed";
        options?: Record<string, {
            votes: string[];
        }> | undefined;
    }, {
        status: "open" | "closed";
        options?: Record<string, {
            votes: string[];
        }> | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    gameFirestoreId: string;
    gameSqlId: string;
    sqlId: string;
    theme?: string | undefined;
    themePoll?: {
        status: "open" | "closed";
        options?: Record<string, {
            votes: string[];
        }> | undefined;
    } | undefined;
}, {
    gameFirestoreId: string;
    gameSqlId: string;
    sqlId: string;
    theme?: string | undefined;
    themePoll?: {
        status: "open" | "closed";
        options?: Record<string, {
            votes: string[];
        }> | undefined;
    } | undefined;
}>;
export type TFirebaseGameWeek = z.infer<typeof firebaseGameWeekSchema>;
//# sourceMappingURL=gameWeek.d.ts.map