 <  % _;
if (testing === 'testing-library') {
    _ %  >
    ;
    import { render } from "@test";
    import data from "@public/meta.json";
    import { Cards } from "./index";
        <  % _;
}
else if (testing === 'enzyme') {
    _ %  >
    ;
    import mount from "@test/mount";
    import data from "@public/meta.json";
    import { Cards } from "./index";
    import { Card } from "./styled";
        <  % _;
}
_ %  >
    <  % _;
if (testing === 'testing-library') {
    _ %  >
        describe("Cards component testing with testing-library", function () {
            it("renders without crashing", function () {
                var component = _test_1.render(<index_1.Cards />);
                expect(component).toBeTruthy();
            });
            it("cards length must be equal to the length of the meta data ", function () {
                var getAllByTestId = _test_1.render(<index_1.Cards />).getAllByTestId;
                var cardContainer = getAllByTestId("container");
                expect(cardContainer).toHaveLength(meta_json_1["default"].plugins.length);
            });
        });
        <  % _;
}
else if (testing === 'enzyme') {
    _ %  >
        describe("Cards component testing with enzyme", function () {
            var component = mount_1["default"](<index_1.Cards />);
            it("renders without crashing", function () {
                expect(component).toBeTruthy();
            });
            it("cards length must be equal to the length of the meta data ", function () {
                expect(component.find(styled_1.Card).length).toEqual(meta_json_1["default"].plugins.length);
            });
        });
        <  % _;
}
_ %  >
;
