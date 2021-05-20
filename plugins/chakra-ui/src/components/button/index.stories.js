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
var Basic = function () { return <index_1.Button variant="solid">Submit</index_1.Button>; };
exports.Basic = Basic;
var DynamicVariables = function () {
    var label = addon_knobs_1.text("label", "Submit");
    var variant = addon_knobs_1.select("variant", ["solid", "ghost", "outline", "link", "unstyled"], "solid");
    var size = addon_knobs_1.select("size", ["sm", "md", "lg", "xs"], "md");
    var colorScheme = addon_knobs_1.select("colorScheme", ["blue", "teal"], "teal");
    return (<index_1.Button variant={variant} size={size} colorScheme={colorScheme}>
            {label}
        </index_1.Button>);
};
exports.DynamicVariables = DynamicVariables;
