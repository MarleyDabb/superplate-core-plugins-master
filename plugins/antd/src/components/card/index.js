"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
exports.Card = void 0;
var react_1 = require("react");
var antd_1 = require("antd");
var Card = function (_a) {
    var title = _a.title, children = _a.children, rest = __rest(_a, ["title", "children"]);
    return (<antd_1.Card title={title} bordered={false}>
      {children}
    </antd_1.Card>);
};
exports.Card = Card;
