"use strict";
exports.__esModule = true;
 <  % _;
if (testing === 'testing-library') {
    _ %  >
    ;
    import { fireEvent, render } from "@test";
        <  % _;
}
else if (testing === 'enzyme') {
    _ %  >
    ;
    import mount from "@test/mount";
        <  % _;
}
_ %  >
;
var index_1 = require("./index");
    <  % _;
if (testing === 'testing-library') {
    _ %  >
        describe("Button component testing with testing-library", function () {
            it("renders without crashing", function () {
                var component = _test_1.render(<index_1.Button onClick={function () { return undefined; }}/>);
                expect(component).toBeTruthy();
            });
            it("button is clickable", function () {
                var mockFn = jest.fn();
                var getByTestId = _test_1.render(<index_1.Button onClick={mockFn}/>).getByTestId;
                var btn = getByTestId("btn");
                _test_1.fireEvent.click(btn);
                expect(mockFn).toHaveBeenCalledTimes(1);
            });
        });
        <  % _;
}
else if (testing === 'enzyme') {
    _ %  >
        describe("Button component testing with enzyme", function () {
            it("renders without crashing", function () {
                var component = mount_1["default"](<index_1.Button onClick={function () { return undefined; }}/>);
                expect(component).toBeTruthy();
            });
            it("button is clickable", function () {
                var mockFn = jest.fn();
                var btn = mount_1["default"](<index_1.Button onClick={mockFn}/>);
                btn.simulate("click");
                expect(mockFn).toHaveBeenCalledTimes(1);
            });
        });
        <  % _;
}
_ %  > ;
