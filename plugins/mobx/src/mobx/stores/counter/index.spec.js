"use strict";
var _this = this;
exports.__esModule = true;
var index_1 = require("./index");
describe("Mobx Counter Store", function () {
    it("increases counter by 1", function () {
        var store = new index_1.CounterStore(_this);
        expect(store.count).toBe(0);
        store.increase();
        expect(store.count).toBe(1);
    });
    it("decreases counter by 1", function () {
        var store = new index_1.CounterStore(_this);
        expect(store.count).toBe(0);
        store.decrease();
        expect(store.count).toBe(-1);
    });
});
