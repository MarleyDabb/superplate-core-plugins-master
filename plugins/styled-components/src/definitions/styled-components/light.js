"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.light = void 0;
// #endregion Global Imports
var common_1 = require("./common");
var light = {
    colors: __assign(__assign({}, common_1.common.colors), { toggleBorder: '#ABB7C4', gradient: 'linear-gradient(#39598A, #79D7ED)', background: "#282C34", headerBg: "#20232A", cardsBg: "#FFFFFF", textColor: "#000000", dodgerBlue: "#007BFF" }),
};
exports.light = light;
