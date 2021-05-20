"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.CardText = exports.CardTitle = exports.CardBody = exports.Card = exports.Col = exports.Row = exports.Container = void 0;
var styled_components_1 = require("styled-components");
exports.Container = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    flex: 1;\n    justify-content: center;\n    align-item: center;\n    padding-bottom: 3rem;\n    background-color: ", "\n"], ["\n    display: flex;\n    flex: 1;\n    justify-content: center;\n    align-item: center;\n    padding-bottom: 3rem;\n    background-color: ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.cardsBg;
});
exports.Row = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: flex;\n    flex-wrap: wrap;\n    max-width: 71rem;\n\n    @media (max-width: 575px) {\n        flex-direction: column;\n    }\n"], ["\n    display: flex;\n    flex-wrap: wrap;\n    max-width: 71rem;\n\n    @media (max-width: 575px) {\n        flex-direction: column;\n    }\n"])));
exports.Col = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    flex: 0 0 25%;\n    max-width: 25%;\n\n    @media (max-width: 575px) {\n        max-width: 100%;\n    }\n"], ["\n    flex: 0 0 25%;\n    max-width: 25%;\n\n    @media (max-width: 575px) {\n        max-width: 100%;\n    }\n"])));
exports.Card = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    padding: 1rem;\n    box-sizing: border-box;\n"], ["\n    padding: 1rem;\n    box-sizing: border-box;\n"])));
exports.CardBody = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n"], ["\n    display: flex;\n    flex-direction: column;\n"])));
exports.CardTitle = styled_components_1["default"].h3(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    font-size: 1.75rem;\n    margin-bottom: .5rem;\n    font-weight: 500;\n    color: ", ";\n"], ["\n    font-size: 1.75rem;\n    margin-bottom: .5rem;\n    font-weight: 500;\n    color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textColor;
});
exports.CardText = styled_components_1["default"].p(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    margin-top: .5rem;\n    margin-bottom: 1rem;\n    line-height: 1.5rem;\n    color: ", ";\n"], ["\n    margin-top: .5rem;\n    margin-bottom: 1rem;\n    line-height: 1.5rem;\n    color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textColor;
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
