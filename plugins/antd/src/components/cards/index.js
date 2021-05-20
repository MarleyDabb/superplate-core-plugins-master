"use strict";
exports.__esModule = true;
exports.Cards = void 0;
var react_1 = require("react");
var antd_1 = require("antd");
var _components_1 = require("@components");
var meta_json_1 = require("@public/meta.json");
var Cards = function () {
    var _a;
    return (<antd_1.Row style={{ flex: 1 }}>
      {((_a = meta_json_1["default"] === null || meta_json_1["default"] === void 0 ? void 0 : meta_json_1["default"].plugins) !== null && _a !== void 0 ? _a : []).map(function (plugin) { return (<antd_1.Col md={6} key={plugin.name}/>, < /> % ); })} if (testing === 'testing-library') { %  > meta_json_1["default"] - testid}="container" < /> } %> >
          <_components_1.Card title={plugin.name}>{plugin.description}</_components_1.Card>
        </antd_1.Col>);
};
exports.Cards = Cards;
antd_1.Row >
;
;
;
