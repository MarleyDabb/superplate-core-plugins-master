"use strict";
var _a;
exports.__esModule = true;
exports.decrease = exports.increase = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    count: 20,
};
var counterSlice = toolkit_1.createSlice({
    name: "counter",
    initialState: initialState,
    reducers: {
        increase: function (state) {
            state.count++;
        },
        decrease: function (state) {
            state.count--;
        },
    },
});
exports.increase = (_a = counterSlice.actions, _a.increase), exports.decrease = _a.decrease;
exports["default"] = counterSlice.reducer;
