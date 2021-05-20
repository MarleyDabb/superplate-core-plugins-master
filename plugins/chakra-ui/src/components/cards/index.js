"use strict";
exports.__esModule = true;
exports.Cards = void 0;
var react_1 = require("react");
var react_2 = require("@chakra-ui/react");
var meta_json_1 = require("@public/meta.json");
var Cards = function () {
    var _a;
    return (<react_2.SimpleGrid columns={4} spacing={10} px={20} py={10}>
      {((_a = meta_json_1["default"] === null || meta_json_1["default"] === void 0 ? void 0 : meta_json_1["default"].plugins) !== null && _a !== void 0 ? _a : []).map(function (plugin) { return (<react_2.Box key={plugin.name}/>, < /> % ); })} if (testing === 'testing-library') { %  > meta_json_1["default"] - testid}="container" < /> } %> >
          <react_2.Heading fontSize={16} fontWeight="500" py={5}>
            {plugin.name}
          </react_2.Heading>
          <react_2.Text fontSize={14}>{plugin.description}</react_2.Text>
        </react_2.Box>);
};
exports.Cards = Cards;
react_2.SimpleGrid >
;
;
;
