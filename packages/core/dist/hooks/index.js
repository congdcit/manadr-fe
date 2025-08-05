"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSessionStorage = exports.useLocalStorage = exports.useAppSelector = exports.useAppDispatch = void 0;
// Redux hooks
var hooks_1 = require("../store/hooks");
Object.defineProperty(exports, "useAppDispatch", { enumerable: true, get: function () { return hooks_1.useAppDispatch; } });
Object.defineProperty(exports, "useAppSelector", { enumerable: true, get: function () { return hooks_1.useAppSelector; } });
// Custom hooks
var use_local_storage_1 = require("./use-local-storage");
Object.defineProperty(exports, "useLocalStorage", { enumerable: true, get: function () { return use_local_storage_1.useLocalStorage; } });
var use_session_storage_1 = require("./use-session-storage");
Object.defineProperty(exports, "useSessionStorage", { enumerable: true, get: function () { return use_session_storage_1.useSessionStorage; } });
