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
exports.dark = void 0;
// #endregion Global Imports
var common_1 = require("./common");
var dark = {
    colors: __assign(__assign({}, common_1.common.colors), { toggleBorder: '#556678', gradient: 'linear-gradient(#091236, #1E215D)', background: "#20232A", headerBg: "#1A1C22", cardsBg: "#1A1C22", textColor: "#FFFFFF", dodgerBlue: "#0062CC" }),
};
exports.dark = dark;
