"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockResponse = void 0;
var nock_1 = require("nock");
exports.mockResponse = [
    {
        id: 74,
        type: "programming",
        setup: "Why do C# and Java developers keep breaking their keyboards?",
        punchline: "Because they use a strongly typed language.",
    },
];
nock_1.default("https://official-joke-api.appspot.com")
    .get("/jokes/programming/random")
    .reply(200, exports.mockResponse);
