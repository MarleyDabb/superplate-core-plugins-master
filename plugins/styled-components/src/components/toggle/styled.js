"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.ToggleContainer = void 0;
var styled_components_1 = require("styled-components");
exports.ToggleContainer = styled_components_1["default"].button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: ", ";\n  border: 1px solid ", ";\n  border-radius: 30px;\n  cursor: pointer;\n  display: flex;\n  font-size: 0.5rem;\n  justify-content: space-between;\n  align-items: center;\n  overflow: hidden;\n  padding: 0.5rem;\n  position: relative;\n  width: 4rem;\n  height: 2rem;\n\n  &:focus {\n    outline: none;\n  }\n\n  <%_ if (features.includes(\"svgr\")) { _%>\n    svg\n  <%_ } else { _%>\n    div\n  <%_ } _%> {\n    height: auto;\n    width: 2.5rem;\n    transition: all 0.3s linear;\n    \n    // sun icon\n    &:first-child {\n      transform: ", ";\n    }\n    \n    // moon icon\n    &:nth-child(2) {\n      transform: ", ";\n    }\n  }\n"], ["\n  background: ", ";\n  border: 1px solid ", ";\n  border-radius: 30px;\n  cursor: pointer;\n  display: flex;\n  font-size: 0.5rem;\n  justify-content: space-between;\n  align-items: center;\n  overflow: hidden;\n  padding: 0.5rem;\n  position: relative;\n  width: 4rem;\n  height: 2rem;\n\n  &:focus {\n    outline: none;\n  }\n\n  <%_ if (features.includes(\"svgr\")) { _%>\n    svg\n  <%_ } else { _%>\n    div\n  <%_ } _%> {\n    height: auto;\n    width: 2.5rem;\n    transition: all 0.3s linear;\n    \n    // sun icon\n    &:first-child {\n      transform: ", ";\n    }\n    \n    // moon icon\n    &:nth-child(2) {\n      transform: ", ";\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.gradient;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.toggleBorder;
}, function (_a) {
    var themeName = _a.themeName;
    return (themeName === "light" ? 'translateY(0)' : 'translateY(100px)');
}, function (_a) {
    var themeName = _a.themeName;
    return (themeName === "light" ? 'translateY(-100px)' : 'translateY(0)');
});
var templateObject_1;
