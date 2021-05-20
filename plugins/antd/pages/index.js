"use strict";
exports.__esModule = true;
var react_1 = require("react");
var _components_1 = require("@components");
var Home = function () {
    return (<div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <_components_1.Header />
            <_components_1.Main />
            <_components_1.Cards />
            <_components_1.Footer />
        </div>);
};
exports["default"] = Home;
