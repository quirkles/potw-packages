import { z } from "zod";
export declare const withDates: z.ZodObject<{
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    createdAt: string;
    updatedAt: string;
}, {
    createdAt: string;
    updatedAt: string;
}>;
export declare const withTimestampDates: z.ZodObject<{
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
}, "strip", z.ZodTypeAny, {
    createdAt: Date;
    updatedAt: Date;
}, {
    createdAt: {
        seconds: number;
        nanoseconds: number;
    };
    updatedAt: {
        seconds: number;
        nanoseconds: number;
    };
}>;
//# sourceMappingURL=withDates.d.ts.map