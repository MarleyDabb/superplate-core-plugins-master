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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.render = exports.AllTheProviders = void 0;
var react_1 = require("react");
var react_2 = require("@testing-library/react");
    <  % ;
var testSetup = typeof testSetup === "undefined" ? {} : testSetup %  >
    <  % -testSetup ? testSetup.import ? testSetup.import.join("\n") : "" : "" %  >
    <  %
;
var top = testSetup ? testSetup.wrapper ? testSetup.wrapper.map(function (wrapper) { return wrapper[0] || ""; }) : [] : [];
var bottom = testSetup ? testSetup.wrapper ? testSetup.wrapper.map(function (wrapper) { return wrapper[1] || ""; }).reverse() : [] : [];
    %  >
;
/**
 * Custom renderer example with @testing-library/react
 * You can customize it to your needs.
 *
 * To learn more about customizing renderer,
 * please visit https://testing-library.com/docs/react-testing-library/setup
 */
var AllTheProviders = function (_a) {
    var children = _a.children;
        <  % -testSetup ? testSetup.inner ? testSetup.inner.join("\n") : "" : "" %  >
    ;
    return (<>
            < />- top.join("\n") %>
                {children}
            < />- bottom.join("\n") %>
        </>);
};
exports.AllTheProviders = AllTheProviders;
var render = function (ui, options) {
    return react_2.render(ui, __assign({ wrapper: exports.AllTheProviders }, options));
};
exports.render = render;
// re-export everything
__exportStar(require("@testing-library/react"), exports);
