"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
 <  % _;
if (testing === 'enzyme') {
    _ %  >
    ;
    import { act } from "react-dom/test-utils";
        <  % _;
}
else if (testing === 'testing-library') {
    _ %  >
    ;
    import { renderHook, act } from "testing-library/react-hooks";
        <  % _;
}
_ %  >
    <  % _;
if (testing === 'enzyme') {
    _ %  >
    ;
    import mount from "@test/mount";
        <  % _;
}
else if (testing === 'testing-library') {
    _ %  >
    ;
    import { AllTheProviders } from "@test";
        <  % _;
}
_ %  >
;
var useCounter_1 = require("./useCounter");
/**
 * This test is provided as an example.
 * You can test your custom recoil hooks and their behaviors,
 * also you can create snapshot tests for your selectors.
 */
    <  % _;
if (testing === 'enzyme') {
    _ %  >
    ;
    var HookWrapper_1 = function (_a) {
        var hook = _a.hook;
        var val = hook();
        // @ts-expect-error add custom property to access in the wrapper
        return <div hook={val}/>;
    };
    describe("Recoil useCounter Hook", function () {
        var wrapper = mount_1["default"](<HookWrapper_1 hook={useCounter_1.useCounter}/>);
        var _a = wrapper.find("div").props().hook, _ = _a[0], _b = _a[1], increase = _b.increase, decrease = _b.decrease;
        it("should set initial count to 0", function () {
            var count = wrapper.find("div").props().hook[0];
            expect(count).toEqual(0);
        });
        it("should increase count by 1", function () {
            test_utils_1.act(function () {
                increase();
            });
            wrapper.update();
            var count = wrapper.find("div").props().hook[0];
            expect(count).toEqual(1);
        });
        it("should increase count by 1", function () {
            test_utils_1.act(function () {
                decrease();
            });
            wrapper.update();
            var count = wrapper.find("div").props().hook[0];
            expect(count).toEqual(0);
        });
    });
        <  % _;
}
else if (testing === 'testing-library') {
    _ %  >
        describe("Recoil useCounter Hook", function () {
            it("should set initial value to 0", function () { return __awaiter(void 0, void 0, void 0, function () {
                var result, count;
                return __generator(this, function (_a) {
                    result = react_hooks_1.renderHook(function () { return useCounter_1.useCounter(); }, {
                        wrapper: _test_1.AllTheProviders,
                    }).result;
                    count = result.current[0];
                    expect(count).toEqual(0);
                    return [2 /*return*/];
                });
            }); });
            it("should increment counter by 1", function () { return __awaiter(void 0, void 0, void 0, function () {
                var result, _a, _, increase, count;
                return __generator(this, function (_b) {
                    result = react_hooks_1.renderHook(function () { return useCounter_1.useCounter(); }, {
                        wrapper: _test_1.AllTheProviders,
                    }).result;
                    _a = result.current, _ = _a[0], increase = _a[1].increase;
                    test_utils_1.act(function () {
                        increase();
                    });
                    count = result.current[0];
                    expect(count).toBe(1);
                    return [2 /*return*/];
                });
            }); });
            it("should decrement counter by 1", function () { return __awaiter(void 0, void 0, void 0, function () {
                var result, _a, _, decrease, count;
                return __generator(this, function (_b) {
                    result = react_hooks_1.renderHook(function () { return useCounter_1.useCounter(); }, {
                        wrapper: _test_1.AllTheProviders,
                    }).result;
                    _a = result.current, _ = _a[0], decrease = _a[1].decrease;
                    test_utils_1.act(function () {
                        decrease();
                    });
                    count = result.current[0];
                    expect(count).toBe(-1);
                    return [2 /*return*/];
                });
            }); });
        });
        <  % _;
}
_ %  >
;
