"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("isomorphic-unfetch");
var nock_1 = require("nock");
var dotenv_1 = require("dotenv");
 % _;
if (features.indexOf("axios") >= 0) {
    _ %  >
    ;
    import httpAdapter from "axios/lib/adapters/http";
    import axios from "axios";
     % _;
}
_ %  >
    dotenv_1.default.config({ path: ".env.test" });
 % _;
if (features.indexOf("axios") >= 0) {
    _ %  >
        axios_1.default.defaults.adapter;
    http_1.default;
     % _;
}
_ %  >
    afterAll(function () {
        nock_1.default.cleanAll();
        nock_1.default.restore();
    });
