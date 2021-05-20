"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = exports.CardFooter = exports.CardContent = exports.CardHeader = exports.Card = void 0;
var styled_components_1 = require("styled-components");
var styled_system_1 = require("styled-system");
exports.Card = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    ", "\n    ", "\n  ", "\n  ", "\n"], ["\n    ", "\n    ", "\n  ", "\n  ", "\n"])), styled_system_1.border, styled_system_1.color, styled_system_1.layout, styled_system_1.space);
exports.CardHeader = styled_components_1.default.header(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    h2 {\n        font-weight: 600;\n    }\n\n    ", "\n    ", "\n"], ["\n    h2 {\n        font-weight: 600;\n    }\n\n    ", "\n    ", "\n"])), styled_system_1.border, styled_system_1.space);
exports.CardContent = styled_components_1.default.main(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    p {\n        margin-bottom: 1rem;\n        color: darkslategrey;\n    }\n\n    ", "\n"], ["\n    p {\n        margin-bottom: 1rem;\n        color: darkslategrey;\n    }\n\n    ", "\n"])), styled_system_1.space);
exports.CardFooter = styled_components_1.default.footer(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    ", "\n    ", "\n  ", "\n"], ["\n    ", "\n    ", "\n  ", "\n"])), styled_system_1.border, styled_system_1.space, styled_system_1.typography);
exports.Button = styled_components_1.default.a(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    text-decoration: none;\n\n    ", "\n    ", "\n  ", "\n  ", "\n"], ["\n    text-decoration: none;\n\n    ", "\n    ", "\n  ", "\n  ", "\n"])), styled_system_1.border, styled_system_1.color, styled_system_1.space, styled_system_1.typography);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
