"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var enzyme_1 = require("enzyme");
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
 * Custom renderer example with enzyme
 * You can customize it to your needs.
 *
 * To learn more about customizing renderer,
 * please visit https://enzymejs.github.io/enzyme/
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
var mount = function (node, options) {
    return enzyme_1.mount(<AllTheProviders>{node}</AllTheProviders>, options);
};
// override render method
exports.default = mount;
