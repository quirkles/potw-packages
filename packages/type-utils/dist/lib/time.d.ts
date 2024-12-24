import { z } from "zod";
export declare const timeStringRegex: RegExp;
declare const timeStringSchema: z.ZodString;
type TimeString = z.infer<typeof timeStringSchema>;
export declare function isTimeString(time: string | TimeString): time is TimeString;
export {};
//# sourceMappingURL=time.d.ts.map