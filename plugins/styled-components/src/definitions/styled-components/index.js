"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
exports.__esModule = true;
exports.StyledThemeProvider = exports.useTheme = exports.ThemeContext = void 0;
__exportStar(require("./common"), exports);
__exportStar(require("./dark"), exports);
__exportStar(require("./light"), exports);
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var dark_1 = require("./dark");
var light_1 = require("./light");
exports.ThemeContext = react_1["default"].createContext({
    theme: "light",
    toggle: function () { return undefined; },
});
var useTheme = function () {
    var _a = react_1["default"].useContext(exports.ThemeContext), theme = _a.theme, toggle = _a.toggle;
    return { theme: theme === "light" ? light_1.light : dark_1.dark, toggle: toggle, themeName: theme };
};
exports.useTheme = useTheme;
var StyledThemeProvider = function (_a) {
    var children = _a.children;
    var _b = react_1["default"].useState("light"), theme = _b[0], setTheme = _b[1];
    var toggle = function () {
        setTheme(function (theme) { return (theme === "light" ? "dark" : "light"); });
    };
    var values = react_1["default"].useMemo(function () { return ({
        theme: theme,
        toggle: toggle,
    }); }, [toggle, theme]);
    return (<exports.ThemeContext.Provider value={values}>
        <styled_components_1.ThemeProvider theme={theme === "light" ? light_1.light : dark_1.dark}>
          {children}
        </styled_components_1.ThemeProvider>
      </exports.ThemeContext.Provider>);
};
exports.StyledThemeProvider = StyledThemeProvider;
