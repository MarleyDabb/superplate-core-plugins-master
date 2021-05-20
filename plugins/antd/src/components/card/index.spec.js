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
        <  % _;
}
_ %  >
;
var index_1 = require("./index");
    <  % _;
if (testing === 'testing-library') {
    _ %  >
        describe("Wrapper component testing with testing-library", function () {
            var component = _test_1.render(<index_1.Card />);
            it("renders without crashing", function () {
                expect(component).toBeTruthy();
            });
        });
        <  % _;
}
else if (testing === 'enzyme') {
    _ %  >
        describe("Wrapper component testing with enzyme", function () {
            var component = mount_1["default"](<index_1.Card />);
            it("renders without crashing", function () {
                expect(component).toBeTruthy();
            });
        });
        <  % _;
}
_ %  > ;
