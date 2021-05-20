"use strict";
exports.__esModule = true;
var actions_1 = require("./actions");
describe("Redux Actions", function () {
    describe("Counter Actions", function () {
        it("increase should return increase.type", function () {
            var action = actions_1.increase();
            expect(action.type).toBe(actions_1.increase.type);
        });
        it("decrease should return decrease.type", function () {
            var action = actions_1.decrease();
            expect(action.type).toBe(actions_1.decrease.type);
        });
    });
});
