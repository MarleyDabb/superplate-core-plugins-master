"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.GET_LAUNCHES = void 0;
var graphql_request_1 = require("graphql-request");
exports.GET_LAUNCHES = graphql_request_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    query GetLaunches($limit: Int) {\n        launchesPast(limit: $limit) {\n            mission_name\n            links {\n                mission_patch_small\n                mission_patch\n            }\n            launch_year\n            rocket {\n                rocket_name\n            }\n            id\n        }\n    }\n"], ["\n    query GetLaunches($limit: Int) {\n        launchesPast(limit: $limit) {\n            mission_name\n            links {\n                mission_patch_small\n                mission_patch\n            }\n            launch_year\n            rocket {\n                rocket_name\n            }\n            id\n        }\n    }\n"])));
var templateObject_1;
