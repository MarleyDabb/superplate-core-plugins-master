"use strict";
exports.__esModule = true;
var store_1 = require("./store");
describe("Redux Store", function () {
    it("should create store with counter reducer", function () {
        var currentState = store_1["default"].getState();
        expect(currentState).toHaveProperty("counter");
    });
});
