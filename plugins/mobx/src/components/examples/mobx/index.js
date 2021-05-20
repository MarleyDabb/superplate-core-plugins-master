"use strict";
exports.__esModule = true;
exports.MobxExample = void 0;
var mobx_react_1 = require("mobx-react");
var _mobx_1 = require("@mobx");
/**
 * This component is provided as an example usage of MobX in components
 *
 * To learn more about MobX and state management
 * please visit https://mobx.js.org/README.html
 */
exports.MobxExample = mobx_react_1.observer(function () {
    var counterStore = _mobx_1.useRootStore().counterStore;
    var count = counterStore.count, increase = counterStore.increase, decrease = counterStore.decrease;
    return (<div>
            <div>
                <h2>Counter</h2>
                <button type="button" onClick={increase}>
                    +
                </button>
                <span>{count}</span>
                <button type="button" onClick={decrease}>
                    -
                </button>
            </div>
            <a href="https://mobx.js.org" target="_blank">
                Go To Documentation
            </a>
        </div>);
});
