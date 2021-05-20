"use strict";
exports.__esModule = true;
var redux_1 = require("redux");
var counter_1 = require("@redux/slices/counter");
var rootReducer = redux_1.combineReducers({ counter: counter_1["default"] });
exports["default"] = rootReducer;
