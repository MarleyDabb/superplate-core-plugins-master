"use strict";
exports.__esModule = true;
exports.Wrapper = void 0;
var react_1 = require("react");
var styled_1 = require("./styled");
var Wrapper = function (_a) {
    var children = _a.children;
    return <styled_1.Container>{children}</styled_1.Container>;
};
exports.Wrapper = Wrapper;
