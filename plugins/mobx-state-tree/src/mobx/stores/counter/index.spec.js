"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
describe("Mobx Counter Store", function () {
    it("increases counter by 1", function () {
        var store = index_1.CounterStore.create();
        expect(store.count).toBe(0);
        store.increase();
        expect(store.count).toBe(1);
    });
    it("decreases counter by 1", function () {
        var store = index_1.CounterStore.create();
        expect(store.count).toBe(0);
        store.decrease();
        expect(store.count).toBe(-1);
    });
});
