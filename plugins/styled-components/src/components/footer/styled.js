"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.ListItem = exports.List = exports.LogoButton = exports.Container = void 0;
var styled_components_1 = require("styled-components");
exports.Container = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    text-align: center;\n    padding: 2rem 0;\n    background-color: ", ";\n"], ["\n    text-align: center;\n    padding: 2rem 0;\n    background-color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.background;
});
exports.LogoButton = styled_components_1["default"].a(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: block;\n    margin-bottom: .19rem;\n"], ["\n    display: block;\n    margin-bottom: .19rem;\n"])));
exports.List = styled_components_1["default"].ul(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    display: flex;\n    justify-content: center;\n    list-style: none;\n"], ["\n    display: flex;\n    justify-content: center;\n    list-style: none;\n"])));
exports.ListItem = styled_components_1["default"].li(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    margin: 0 .5rem;\n"], ["\n    margin: 0 .5rem;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
