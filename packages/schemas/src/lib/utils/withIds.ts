import {z} from "zod";

export const withIds = z.object({
    "sqlId": z.string(),
    "firestoreId": z.string()
});
