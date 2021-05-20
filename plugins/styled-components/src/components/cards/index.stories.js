"use strict";
exports.__esModule = true;
exports.Basic = void 0;
var react_1 = require("react");
var addon_knobs_1 = require("@storybook/addon-knobs");
var styled_1 = require("./styled");
exports["default"] = {
    title: "Cards",
    decorators: [addon_knobs_1.withKnobs],
};
var Basic = function () {
    return (<styled_1.Col>
      <styled_1.Card>
        <styled_1.CardBody>
          <styled_1.CardTitle>Styled Components</styled_1.CardTitle>
          <styled_1.CardText>Utilising tagged template literals (a recent addition to JavaScript) and the power of CSS, styled-components allows you to write actual CSS code to style your components.</styled_1.CardText>
        </styled_1.CardBody>
      </styled_1.Card>
    </styled_1.Col>);
};
exports.Basic = Basic;
