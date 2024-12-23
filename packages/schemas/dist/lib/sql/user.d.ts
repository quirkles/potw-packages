import { z } from "zod";
export declare const sqlUserSchema: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
    email: z.ZodString;
    username: z.ZodNullable<z.ZodString>;
    aboutMe: z.ZodNullable<z.ZodString>;
    avatarUrl: z.ZodNullable<z.ZodString>;
}, {
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}>, {
    sqlId: z.ZodString;
    firestoreId: z.ZodString;
}>, "strip", z.ZodTypeAny, {
    sqlId: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    firestoreId: string;
    username: string | null;
    aboutMe: string | null;
    avatarUrl: string | null;
}, {
    sqlId: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    firestoreId: string;
    username: string | null;
    aboutMe: string | null;
    avatarUrl: string | null;
}>;
export type TSqlUser = z.infer<typeof sqlUserSchema>;
//# sourceMappingURL=user.d.ts.map