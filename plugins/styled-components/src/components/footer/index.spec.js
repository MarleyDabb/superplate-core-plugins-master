 <  % _;
if (testing === 'testing-library') {
    _ %  >
    ;
    import { render } from "@test";
    import { Footer } from "./index";
        <  % _;
}
else if (testing === 'enzyme') {
    _ %  >
    ;
    import mount from "@test/mount";
    import { Footer } from "./index";
    import { ListItem } from "./styled";
        <  % _;
}
_ %  >
    <  % _;
if (testing === 'testing-library') {
    _ %  >
        describe("Footer component testing with testing-library", function () {
            it("renders without crashing", function () {
                var component = _test_1.render(<index_1.Footer />);
                expect(component).toBeTruthy();
            });
            it("renders pankod logo and directed to the correct url", function () {
                var getByTestId = _test_1.render(<index_1.Footer />).getByTestId;
                expect(getByTestId("pankod-logo").getAttribute("href")).toStrictEqual("https://github.com/pankod");
            });
            it("should render 4 icons successfully", function () {
                var getByTestId = _test_1.render(<index_1.Footer />).getByTestId;
                var icons = getByTestId("icons-container");
                expect(icons.children).toHaveLength(4);
            });
        });
        <  % _;
}
else if (testing === 'enzyme') {
    _ %  >
        describe("Footer component testing with enzyme", function () {
            var component = mount_1["default"](<index_1.Footer />);
            it("renders without crashing", function () {
                expect(component).toBeTruthy();
            });
            it("renders pankod logo directed to the correct url", function () {
                expect(component.find("a").prop("href")).toContain("https://github.com/pankod");
            });
            it("should render 4 icons successfully", function () {
                expect(component.find(styled_1.ListItem)).toHaveLength(4);
            });
        });
        <  % _;
}
_ %  >
;
