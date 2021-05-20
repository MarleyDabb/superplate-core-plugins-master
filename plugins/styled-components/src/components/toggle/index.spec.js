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
        describe("Toggle component testing with testing-library", function () {
            it("renders without crashing", function () {
                var component = _test_1.render(<index_1.Toggle />);
                expect(component).toBeTruthy();
            });
            it("button is clickable", function () {
                var mockFn = jest.fn();
                var getByTestId = _test_1.render(<index_1.Toggle onClick={mockFn}/>).getByTestId;
                var toggleBtn = getByTestId("toggle");
                _test_1.fireEvent.click(toggleBtn);
            });
            it("renders toggle button contain 2 images", function () {
                var getByTestId = _test_1.render(<index_1.Toggle />).getByTestId;
                var toggleBtn = getByTestId("toggle");
                expect(toggleBtn.children).toHaveLength(2);
            });
        });
        <  % _;
}
else if (testing === 'enzyme') {
    _ %  >
        describe("Toggle component testing with enzyme", function () {
            var mockFn = jest.fn();
            var component = mount_1["default"](<index_1.Toggle onClick={mockFn}/>);
            it("renders without crashing", function () {
                expect(component).toBeTruthy();
            });
            it("toggle button is clickable", function () {
                var toggleBtn = component.find("button");
                toggleBtn.simulate("click");
            });
        });
        <  % _;
}
_ %  > ;
