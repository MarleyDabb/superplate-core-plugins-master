"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Container = exports.Wrapper = void 0;
var styled_components_1 = require("styled-components");
exports.Wrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  background-color: ", ";\n"], ["\n  display: flex;\n  justify-content: center;\n  background-color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.headerBg;
});
exports.Container = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  text-align: center;\n  max-width: 71rem;\n  min-width: 71rem;\n\n  @media (max-width: 575px) {\n    min-width: 22rem;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  text-align: center;\n  max-width: 71rem;\n  min-width: 71rem;\n\n  @media (max-width: 575px) {\n    min-width: 22rem;\n  }\n"])));
var templateObject_1, templateObject_2;
