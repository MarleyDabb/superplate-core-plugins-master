"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CounterStore = void 0;
var mobx_state_tree_1 = require("mobx-state-tree");
/**
 * This file is generated as an example of Mobx State Tree Stores
 *
 * To learn more about Mobx and Mobx State Tree,
 * please visit https://mobx-state-tree.js.org/intro/welcome
 */
exports.CounterStore = mobx_state_tree_1.types
    .model("Counter", {
    count: 0,
})
    .actions(function (counter) { return ({
    increase: function () {
        counter.count += 1;
    },
    decrease: function () {
        counter.count -= 1;
    },
}); });
