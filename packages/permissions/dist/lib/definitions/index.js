"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userPermissions = exports.gameWeekPermissions = exports.gamePermissions = exports.scopeDefinitions = void 0;
const gameWeek_1 = require("./gameWeek");
const game_1 = require("./game");
const user_1 = require("./user");
exports.scopeDefinitions = {
    "user": user_1.userPermissions,
    "game": game_1.gamePermissions,
    "gameWeek": gameWeek_1.gameWeekPermissions
};
var game_2 = require("./game");
Object.defineProperty(exports, "gamePermissions", { enumerable: true, get: function () { return game_2.gamePermissions; } });
var gameWeek_2 = require("./gameWeek");
Object.defineProperty(exports, "gameWeekPermissions", { enumerable: true, get: function () { return gameWeek_2.gameWeekPermissions; } });
var user_2 = require("./user");
Object.defineProperty(exports, "userPermissions", { enumerable: true, get: function () { return user_2.userPermissions; } });
