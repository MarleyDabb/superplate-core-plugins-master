"use strict";
exports.__esModule = true;
exports.Card = void 0;
var react_1 = require("react");
var index_module_css_1 = require("./index.module.css");
var Card = function (_a) {
    var title = _a.title, children = _a.children;
    return (<div className={index_module_css_1["default"].card}>
            <div className={index_module_css_1["default"].header}>{title}</div>
            <div>{children}</div>
        </div>);
};
exports.Card = Card;
