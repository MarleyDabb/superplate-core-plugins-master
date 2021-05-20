"use strict";
exports.__esModule = true;
exports.CounterStore = void 0;
var mobx_1 = require("mobx");
/**
 * This file is generated as an example of Mobx Stores
 *
 * To learn more about Mobx and state management,
 * please visit https://mobx.js.org/README.html
 */
var CounterStore = /** @class */ (function () {
    function CounterStore() {
        var _this = this;
        this.count = 0;
        this.increase = function () {
            _this.count++;
        };
        this.decrease = function () {
            _this.count--;
        };
        mobx_1.makeAutoObservable(this);
    }
    return CounterStore;
}());
exports.CounterStore = CounterStore;
