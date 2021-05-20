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
var react_1 = require("@chakra-ui/react");
var styles_1 = require("./styles");
var colors_1 = require("./foundations/colors");
var fontSizes_1 = require("./foundations/fontSizes");
/**
 * This file is generated for providing a custom theme to Chakra UI
 *
 * To learn more about custom themes
 * please visit https://chakra-ui.com/docs/getting-started#add-custom-theme-optional
 */
var overrides = __assign(__assign({}, styles_1["default"]), { colors: colors_1["default"],
    fontSizes: fontSizes_1["default"] });
var theme = react_1.extendTheme(overrides);
exports["default"] = theme;
