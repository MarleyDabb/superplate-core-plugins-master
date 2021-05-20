"use strict";
exports.__esModule = true;
exports.Main = void 0;
var react_1 = require("react");
var _components_1 = require("@components");
var styled_1 = require("./styled");
var Main = function () {
    return (<styled_1.Wrapper>
      <styled_1.Container>
        <h1>superplate</h1>
        <p>
          The frontend boilerplate with superpowers!
        </p>
        <_components_1.Button>Docs</_components_1.Button>
      </styled_1.Container>
    </styled_1.Wrapper>);
};
exports.Main = Main;
