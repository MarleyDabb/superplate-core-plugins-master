"use strict";
exports.__esModule = true;
exports.counter = void 0;
var recoil_1 = require("recoil");
var constants_1 = require("@recoil/constants");
/**
 * This file is generated as an example of Recoil Atoms
 *
 * To learn more about Recoil and state management,
 * please visit https://recoiljs.org/
 */
exports.counter = recoil_1.atom({
    key: constants_1.Atoms.Counter,
    "default": 0,
});
