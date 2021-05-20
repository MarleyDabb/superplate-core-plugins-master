"use strict";
exports.__esModule = true;
exports.RecoilExample = void 0;
var react_1 = require("react");
var hooks_1 = require("@recoil/hooks");
/**
 * This component is provided as an example usage of Recoil in components
 *
 * To learn more about Recoil and state management
 * please visit https://recoiljs.org
 */
var RecoilExample = function () {
    var _a = hooks_1.useCounter(), count = _a[0], _b = _a[1], increase = _b.increase, decrease = _b.decrease;
    return (<div>
            <div>
                <h2>Recoil Counter</h2>
                <button type="button" onClick={increase}>
                    +
                </button>
                <span>{count}</span>
                <button type="button" onClick={decrease}>
                    -
                </button>
            </div>
            <a href="https://recoiljs.org/" target="_blank">
                Go To Documentation
            </a>
        </div>);
};
exports.RecoilExample = RecoilExample;
