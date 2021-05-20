"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("isomorphic-unfetch");
var nock_1 = require("nock");
var dotenv_1 = require("dotenv");
var enzyme_1 = require("enzyme");
var enzyme_adapter_react_17_1 = require("@wojtekmaj/enzyme-adapter-react-17");
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
    enzyme_1.default.configure({ adapter: new enzyme_adapter_react_17_1.default() });
afterAll(function () {
    nock_1.default.cleanAll();
    nock_1.default.restore();
});
window.matchMedia = jest.fn().mockImplementation(function (query) {
    return {
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
    };
});
window.scroll = jest.fn();
window.alert = jest.fn();
