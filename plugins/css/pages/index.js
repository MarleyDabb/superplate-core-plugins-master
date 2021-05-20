"use strict";
exports.__esModule = true;
var react_1 = require("react");
var css_1 = require("@components/css");
var Home = function () {
    return (<div style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
        }}>
            <css_1.Header />
            <css_1.Main />
            <css_1.Cards />
            <css_1.Footer />
        </div>);
};
exports["default"] = Home;
