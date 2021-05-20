"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
describe("Mobx - MST Root Store", function () {
    it("should create CounterStore instance as a property", function () {
        var store = index_1.createRootStore();
        expect(store.counterStore).toBeDefined();
    });
});
