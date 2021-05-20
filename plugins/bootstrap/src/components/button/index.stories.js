"use strict";
exports.__esModule = true;
exports.DynamicVariables = exports.Basic = void 0;
var react_1 = require("react");
var addon_knobs_1 = require("@storybook/addon-knobs");
var index_1 = require("./index");
exports["default"] = {
    title: "Button",
    component: index_1.Button,
    decorators: [addon_knobs_1.withKnobs],
};
var Basic = function () { return <index_1.Button>Submit</index_1.Button>; };
exports.Basic = Basic;
var DynamicVariables = function () {
    var label = addon_knobs_1.text("label", "Submit");
    var variant = addon_knobs_1.select("variant", [
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
        "info",
        "light",
        "dark",
        "link",
    ], "primary");
    var size = addon_knobs_1.select("size", ["sm", "lg"], undefined);
    return (<index_1.Button variant={variant} size={size}>
      {label}
    </index_1.Button>);
};
exports.DynamicVariables = DynamicVariables;
