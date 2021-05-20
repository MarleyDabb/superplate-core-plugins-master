"use strict";
exports.__esModule = true;
exports.Cards = void 0;
var react_1 = require("react");
var react_bootstrap_1 = require("react-bootstrap");
var meta_json_1 = require("@public/meta.json");
var Cards = function () {
    var _a;
    return (<react_bootstrap_1.Container className="my-5 flex-grow-1">
      <react_bootstrap_1.Row>
        {((_a = meta_json_1["default"] === null || meta_json_1["default"] === void 0 ? void 0 : meta_json_1["default"].plugins) !== null && _a !== void 0 ? _a : []).map(function (plugin) { return (<react_bootstrap_1.Col md={4} key={plugin.name} className="mb-3"/>, < /> % ); })} if (testing === 'testing-library') { %  > meta_json_1["default"] - testid}="container" < /> } %> >
            <react_bootstrap_1.Card className="border-none">
              <react_bootstrap_1.Card.Body>
                <react_bootstrap_1.Card.Title>{plugin.name}</react_bootstrap_1.Card.Title>
                <react_bootstrap_1.Card.Text>{plugin.description}</react_bootstrap_1.Card.Text>
              </react_bootstrap_1.Card.Body>
            </react_bootstrap_1.Card>
          </react_bootstrap_1.Col>
        ))}
      </react_bootstrap_1.Row>);
};
exports.Cards = Cards;
react_bootstrap_1.Container >
;
;
;
