"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactQueryProvider = exports.queryClient = void 0;
var query_client_1 = require("./query-client");
Object.defineProperty(exports, "queryClient", { enumerable: true, get: function () { return query_client_1.queryClient; } });
var react_query_provider_1 = require("./react-query-provider");
Object.defineProperty(exports, "ReactQueryProvider", { enumerable: true, get: function () { return react_query_provider_1.ReactQueryProvider; } });
