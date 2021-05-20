"use strict";
exports.__esModule = true;
exports.DynamicVariables = void 0;
var react_1 = require("react");
var addon_knobs_1 = require("@storybook/addon-knobs");
var index_1 = require("../card/index");
exports["default"] = {
    title: "Card",
    component: index_1.Card,
    decorators: [addon_knobs_1.withKnobs],
};
var DynamicVariables = function () {
    var label = addon_knobs_1.select("title", ["Title 1", "Title 2"], "Title Test");
    return (<div style={{ width: "25%" }}>
            <index_1.Card title={label}>
                <div>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quasi quidem culpa adipisci eveniet ipsa ea incidunt
                    corrupti vero perferendis blanditiis!
                </div>
            </index_1.Card>
        </div>);
};
exports.DynamicVariables = DynamicVariables;
