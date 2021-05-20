"use strict";
exports.__esModule = true;
var index_1 = require("./index");
describe("Redux Counter Reducer", function () {
    it("should create reducer with initial props", function () {
        var initial = {
            count: 0,
        };
        var reducer = index_1["default"](initial, {});
        expect(reducer).toEqual(initial);
    });
    it("increase action should increase counter by 1", function () {
        var initial = {
            count: 0,
        };
        var expected = {
            count: 1,
        };
        var reducer = index_1["default"](initial, index_1.increase());
        expect(reducer).toEqual(expected);
    });
    it("decrease action should decrease counter by 1", function () {
        var initial = {
            count: 0,
        };
        var expected = {
            count: -1,
        };
        var reducer = index_1["default"](initial, index_1.decrease());
        expect(reducer).toEqual(expected);
    });
});
