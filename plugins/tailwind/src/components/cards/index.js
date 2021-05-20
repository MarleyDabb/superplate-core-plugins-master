"use strict";
exports.__esModule = true;
exports.Cards = void 0;
var react_1 = require("react");
var meta_json_1 = require("@public/meta.json");
var Cards = function () {
    var _a;
    return (<div className="flex-1 container my-8 max-w-screen-lg mx-auto p-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {((_a = meta_json_1["default"] === null || meta_json_1["default"] === void 0 ? void 0 : meta_json_1["default"].plugins) !== null && _a !== void 0 ? _a : []).map(function (plugin) { return (<div key={plugin.name} className="col-span-1 rounded-md border border-gray-300 p-5"/>
            ,
                < /> % ); })} if (testing === 'testing-library') { %  > meta_json_1["default"] - testid}="container" < /> } %>
                    >
                        <h2 className="text-xl font-semibold mb-2">
                            {plugin.name}
                        </h2>
                        <p className="m-0">{plugin.description}</p>
                    </div>
                ))}
            </div>);
};
exports.Cards = Cards;
div >
;
;
;
