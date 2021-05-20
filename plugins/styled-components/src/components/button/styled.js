"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.BaseButton = void 0;
var styled_components_1 = require("styled-components");
exports.BaseButton = styled_components_1["default"].button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    font-size: 1.25rem;\n    line-height: 1.5rem;\n    color: ", ";\n    background-color: ", ";\n    border-radius: .3rem;\n    border: none;\n    padding: .5rem 1rem;\n    margin-bottom: 1rem;\n"], ["\n    font-size: 1.25rem;\n    line-height: 1.5rem;\n    color: ", ";\n    background-color: ", ";\n    border-radius: .3rem;\n    border: none;\n    padding: .5rem 1rem;\n    margin-bottom: 1rem;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.white;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.dodgerBlue;
});
var templateObject_1;
