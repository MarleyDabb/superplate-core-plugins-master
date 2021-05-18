"use strict";
exports.__esModule = true;
exports.Cards = void 0;
var react_1 = require("react");
var Card_1 = require("@material-ui/core/Card");
var CardActions_1 = require("@material-ui/core/CardActions");
var CardContent_1 = require("@material-ui/core/CardContent");
var Button_1 = require("@material-ui/core/Button");
var meta_json_1 = require("@public/meta.json");
var Cards = function () {
    var _a;
    return (react_1["default"].createElement("div", null, ((_a = meta_json_1["default"] === null || meta_json_1["default"] === void 0 ? void 0 : meta_json_1["default"].plugins) !== null && _a !== void 0 ? _a : []).map(function (plugin) { return (react_1["default"].createElement(Card_1["default"], null,
        react_1["default"].createElement(CardContent_1["default"], null,
            react_1["default"].createElement("h1", null, plugin.name),
            react_1["default"].createElement("p", null, plugin.description)),
        react_1["default"].createElement(CardActions_1["default"], null,
            react_1["default"].createElement(Button_1["default"], { size: 'small' }, "Learn More")))); })));
};
exports.Cards = Cards;
