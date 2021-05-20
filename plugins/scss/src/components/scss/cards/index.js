"use strict";
exports.__esModule = true;
exports.Cards = void 0;
var react_1 = require("react");
var index_module_scss_1 = require("./index.module.scss");
var meta_json_1 = require("@public/meta.json");
var scss_1 = require("@components/scss");
var Cards = function () {
    var _a;
    return (<div className={index_module_scss_1["default"].cards}>
            {((_a = meta_json_1["default"] === null || meta_json_1["default"] === void 0 ? void 0 : meta_json_1["default"].plugins) !== null && _a !== void 0 ? _a : []).map(function (plugin) { return ((<div key={"key-" + plugin.name} className={index_module_scss_1["default"].cardWrapper}/>
            ,
                < />) % _); })} if (testing === 'testing-library') {_ %  >
            meta_json_1["default"] - testid}="container"
                    < />_ } _%>
                >
                    <scss_1.Card title={plugin.name}>{plugin.description}</scss_1.Card>
                </div>);
};
exports.Cards = Cards;
div >
;
;
;
