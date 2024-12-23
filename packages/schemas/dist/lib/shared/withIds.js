"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withIds = void 0;
const zod_1 = require("zod");
exports.withIds = zod_1.z.object({
    "sqlId": zod_1.z.string(),
    "firestoreId": zod_1.z.string()
});
