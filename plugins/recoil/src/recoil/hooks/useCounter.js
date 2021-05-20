"use strict";
exports.__esModule = true;
exports.useCounter = void 0;
var recoil_1 = require("recoil");
var atoms_1 = require("@recoil/atoms");
var useCounter = function () {
    var _a = recoil_1.useRecoilState(atoms_1.counter), count = _a[0], setCount = _a[1];
    var increase = function () {
        setCount(function (current) { return current + 1; });
    };
    var decrease = function () {
        setCount(function (current) { return current - 1; });
    };
    return [count, { increase: increase, decrease: decrease }];
};
exports.useCounter = useCounter;
