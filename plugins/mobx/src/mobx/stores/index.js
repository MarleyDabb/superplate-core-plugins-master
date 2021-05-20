"use strict";
exports.__esModule = true;
exports.RootStore = void 0;
var counter_1 = require("./counter");
var RootStore = /** @class */ (function () {
    function RootStore() {
        this.counterStore = new counter_1.CounterStore();
    }
    return RootStore;
}());
exports.RootStore = RootStore;
