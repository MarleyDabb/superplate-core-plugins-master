"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var actions_1 = require("@redux/actions");
var store_1 = require("@redux/store");
function Counter() {
    var dispatch = store_1.useAppDispatch();
    var count = react_redux_1.useSelector(function (state) { return state.counter.count; });
    return (<div>
            <div>
                <h2>Counter</h2>
                <button type="button" onClick={function () { return dispatch(actions_1.increase()); }}>
                    +
                </button>
                <span>{count}</span>
                <button type="button" onClick={function () { return dispatch(actions_1.decrease()); }}>
                    -
                </button>
            </div>
            <a href="https://react-redux.js.org/" target="_blank">
                Go To Documentation
            </a>
        </div>);
}
exports["default"] = Counter;
