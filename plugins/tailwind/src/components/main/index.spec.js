"use strict";
exports.__esModule = true;
 <  % _;
if (testing === 'testing-library') {
    _ %  >
    ;
    import { render } from "@test";
        <  % _;
}
else if (testing === 'enzyme') {
    _ %  >
    ;
    import mount from "@test/mount";
    import { Button } from "@components";
        <  % _;
}
_ %  >
;
var index_1 = require("./index");
    <  % _;
if (testing === 'testing-library') {
    _ %  >
        describe("Main component testing with testing-library", function () {
            it("renders without crashing", function () {
                var component = _test_1.render(<index_1.Main />);
                expect(component).toBeTruthy();
            });
            it("renders texts successfuly", function () {
                var getByText = _test_1.render(<index_1.Main />).getByText;
                getByText("superplate");
                getByText("The frontend boilerplate with superpowers!");
            });
            it("renders button successfuly", function () {
                var getByText = _test_1.render(<index_1.Main />).getByText;
                getByText("Docs");
            });
        });
        <  % _;
}
else if (testing === 'enzyme') {
    _ %  >
        describe("Main component testing with enzyme", function () {
            var component = mount_1["default"](<index_1.Main />);
            it("renders without crashing", function () {
                expect(component).toBeTruthy();
            });
            it("renders texts successfuly", function () {
                expect(component.html()).toContain("The frontend boilerplate with superpowers!");
            });
            it("renders button successfuly", function () {
                expect(component.find(_components_1.Button)).toBeDefined();
            });
        });
        <  % _;
}
_ %  >
;
