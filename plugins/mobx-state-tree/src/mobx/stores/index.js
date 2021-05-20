"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRootStore = exports.RootStore = void 0;
var mobx_state_tree_1 = require("mobx-state-tree");
var counter_1 = require("./counter");
exports.RootStore = mobx_state_tree_1.types.model("RootStore", {
    counterStore: counter_1.CounterStore,
});
var createRootStore = function () {
    return exports.RootStore.create({
        counterStore: counter_1.CounterStore.create(),
    });
};
exports.createRootStore = createRootStore;
