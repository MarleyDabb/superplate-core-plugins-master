"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("@chakra-ui/react");
var _components_1 = require("@components");
var Home = function () {
    return (<react_2.Flex direction="column" minH="100vh">
            <_components_1.Header />
            <_components_1.Main />
            <_components_1.Cards />
            <react_2.Spacer />
            <_components_1.Footer />
        </react_2.Flex>);
};
exports["default"] = Home;
