"use strict";
exports.__esModule = true;
var react_1 = require("react");
var scss_1 = require("@components/scss");
var Home = function () {
    return (<div style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
        }}>
            <scss_1.Header />
            <scss_1.Main />
            <scss_1.Cards />
            <scss_1.Footer />
        </div>);
};
exports["default"] = Home;
