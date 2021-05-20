"use strict";
exports.__esModule = true;
exports.Basic = void 0;
var react_1 = require("react");
var addon_knobs_1 = require("@storybook/addon-knobs");
var index_1 = require("./index");
exports["default"] = {
    title: "Button",
    component: index_1.Button,
    decorators: [addon_knobs_1.withKnobs],
};
var Basic = function () { return <index_1.Button>Button</index_1.Button>; };
exports.Basic = Basic;
