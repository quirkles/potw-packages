import { z } from "zod";
export declare const firebaseUserSchema: z.ZodObject<z.objectUtil.extendShape<{
    sqlId: z.ZodString;
    email: z.ZodString;
}, {
    createdAt: z.ZodEffects<z.ZodObject<{
        seconds: z.ZodNumber;
        nanoseconds: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        seconds: number;
        nanoseconds: number;
    }, {
        seconds: number;
        nanoseconds: number;
    }>, Date, {
        seconds: number;
        nanoseconds: number;
    }>;
    updatedAt: z.ZodEffects<z.ZodObject<{
        seconds: z.ZodNumber;
        nanoseconds: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        seconds: number;
        nanoseconds: number;
    }, {
        seconds: number;
        nanoseconds: number;
    }>, Date, {
        seconds: number;
        nanoseconds: number;
    }>;
}>, "strip", z.ZodTypeAny, {
    sqlId: string;
    createdAt: Date;
    updatedAt: Date;
    email: string;
}, {
    sqlId: string;
    createdAt: {
        seconds: number;
        nanoseconds: number;
    };
    updatedAt: {
        seconds: number;
        nanoseconds: number;
    };
    email: string;
}>;
export type TFirebaseUser = z.infer<typeof firebaseUserSchema>;
//# sourceMappingURL=user.d.ts.map