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
    import { Logo, Toggle } from "@components";
        <  % _;
}
_ %  >
;
var index_1 = require("./index");
    <  % _;
if (testing === 'testing-library') {
    _ %  >
        describe("Header component testing with testing-library", function () {
            var getByTestId = _test_1.render(<index_1.Header />).getByTestId;
            var container = getByTestId("container");
            it("renders without crashing", function () {
                expect(container.parentElement).toBeTruthy();
            });
            it("renders successfuly next.js logo", function () {
                expect(container.firstChild).toBeDefined();
            });
            it("renders successfuly theme switch", function () {
                expect(container.lastChild).toBeDefined();
            });
        });
        <  % _;
}
else if (testing === 'enzyme') {
    _ %  >
        describe("Header component testing with testing-library", function () {
            var component = mount_1["default"](<index_1.Header />);
            it("renders without crashing", function () {
                expect(component).toBeTruthy();
            });
            it("renders successfuly next.js logo", function () {
                expect(component.find(_components_1.Logo)).toBeDefined();
            });
            it("renders successfuly theme switch", function () {
                expect(component.find(_components_1.Toggle)).toBeDefined();
            });
        });
        <  % _;
}
_ %  >
;
