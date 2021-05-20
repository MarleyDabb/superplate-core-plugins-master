"use strict";
exports.__esModule = true;
var _test_1 = require("@test");
var index_1 = require("./index");
/**
 * This test file is generated as an example for testing-library/react with jest
 *
 * To learn more about testing-library and it's environment
 * please visit https://testing-library.com/docs/react-testing-library/intro/
 */
describe("Component testing with testing-library", function () {
    it("renders without crashing", function () {
        var getByText = _test_1.render(<index_1.TestingLibraryExample onClick={function () { return undefined; }}/>).getByText;
        expect(getByText("Click Me!")).toBeDefined();
    });
    it("button is clickable", function () {
        var mockFn = jest.fn();
        var getByText = _test_1.render(<index_1.TestingLibraryExample onClick={mockFn}/>).getByText;
        var btn = getByText("Click Me!");
        _test_1.fireEvent.click(btn);
        expect(mockFn).toHaveBeenCalledTimes(1);
    });
});
