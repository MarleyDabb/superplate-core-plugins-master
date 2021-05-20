"use strict";
exports.__esModule = true;
var index_1 = require("./index");
describe("Mobx Root Store", function () {
    it("should create CounterStore instance as a property", function () {
        var store = new index_1.RootStore();
        expect(store.counterStore).toBeDefined();
    });
});
