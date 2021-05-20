"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRootStore = exports.RootStoreProvider = void 0;
var react_1 = require("react");
var stores_1 = require("./stores");
var StoreContext = react_1.default.createContext(undefined);
var RootStoreProvider = function (_a) {
    var children = _a.children;
    var root = stores_1.createRootStore();
    return (<StoreContext.Provider value={root}>{children}</StoreContext.Provider>);
};
exports.RootStoreProvider = RootStoreProvider;
var useRootStore = function () {
    var context = react_1.default.useContext(StoreContext);
    if (context === undefined) {
        throw new Error("useRootStore must be used within RootStoreProvider");
    }
    return context;
};
exports.useRootStore = useRootStore;
