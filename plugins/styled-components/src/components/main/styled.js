"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Container = exports.Wrapper = void 0;
var styled_components_1 = require("styled-components");
exports.Wrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    justify-content: center;\n    background-color: ", ";\n    padding: 2rem 0;\n    color: ", ";\n"], ["\n    display: flex;\n    justify-content: center;\n    background-color: ", ";\n    padding: 2rem 0;\n    color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.white;
});
exports.Container = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    text-align: center;\n    max-width: 71rem;\n\n    h1 {\n        font-size: 5.5rem;\n        font-weight: 300;\n        line-height: 1.2rem;\n        padding-bottom: .75rem;\n    }\n    p {\n        font-size: 1.25rem;\n        font-weight: 300;\n    }\n"], ["\n    text-align: center;\n    max-width: 71rem;\n\n    h1 {\n        font-size: 5.5rem;\n        font-weight: 300;\n        line-height: 1.2rem;\n        padding-bottom: .75rem;\n    }\n    p {\n        font-size: 1.25rem;\n        font-weight: 300;\n    }\n"])));
var templateObject_1, templateObject_2;
