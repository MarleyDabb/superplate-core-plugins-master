"use strict";
exports.__esModule = true;
var mount_1 = require("@test/mount");
var index_1 = require("./index");
/**
 * This test file is generated as an example for enzyme with jest
 *
 * To learn more about enzyme and it's usage
 * please visit https://enzymejs.github.io/enzyme/
 */
describe("Component testing with enzyme", function () {
    it("renders without crashing", function () {
        var wrapper = mount_1["default"](<index_1.EnzymeExample onClick={function () { }}/>);
        expect(wrapper.find("button")).toBeDefined();
    });
    it("button is clickable", function () {
        var mockFn = jest.fn();
        var wrapper = mount_1["default"](<index_1.EnzymeExample onClick={mockFn}/>);
        var btn = wrapper.find("button");
        btn.simulate("click");
        expect(mockFn).toHaveBeenCalledTimes(1);
    });
});
