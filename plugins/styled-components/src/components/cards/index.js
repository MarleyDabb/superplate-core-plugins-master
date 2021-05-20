"use strict";
exports.__esModule = true;
exports.Cards = void 0;
var react_1 = require("react");
var meta_json_1 = require("@public/meta.json");
var styled_1 = require("./styled");
var Cards = function () {
    var _a;
    return (<styled_1.Container>
            <styled_1.Row>
                {((_a = meta_json_1["default"] === null || meta_json_1["default"] === void 0 ? void 0 : meta_json_1["default"].plugins) !== null && _a !== void 0 ? _a : []).map(function (plugin) { return (<styled_1.Col key={plugin.name}/>
            ,
                < /> % _); })} if (testing === 'testing-library') {_ %  >
            meta_json_1["default"] - testid}="container"
                        < />_ } _%>
                    >
                        <styled_1.Card>
                            <styled_1.CardBody>
                                <styled_1.CardTitle>{plugin.name}</styled_1.CardTitle>
                                <styled_1.CardText>{plugin.description}</styled_1.CardText>
                            </styled_1.CardBody>
                        </styled_1.Card>
                    </styled_1.Col>
                ))}
            </styled_1.Row>);
};
exports.Cards = Cards;
styled_1.Container >
;
;
;
