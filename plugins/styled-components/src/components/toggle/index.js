"use strict";
exports.__esModule = true;
exports.Toggle = void 0;
var react_1 = require("react");
    <  % _;
if (!features.includes("svgr")) {
    _ %  >
    ;
    import Image from "next/image";
        <  % _;
}
_ %  >
    <  % _;
if (features.includes("svgr")) {
    _ %  >
    ;
    import { SunIcon, MoonIcon } from "@components/icons";
        <  % _;
}
_ %  >
;
var styled_components_1 = require("@definitions/styled-components");
var styled_1 = require("./styled");
var Toggle = function () {
    var _a = styled_components_1.useTheme(), toggle = _a.toggle, themeName = _a.themeName;
    return (<styled_1.ToggleContainer themeName={themeName} onClick={toggle}/>
        ,
            < /> % _);
    if (testing === 'testing-library') {
        _ %  >
            meta_json_1["default"] - testid;
        "toggle"
            <  % _;
    }
    _ %  >
        >
        <  % _;
    if (features.includes("svgr")) {
        _ %  >
            <icons_1.SunIcon width="32" height="32"/>
                ,
                    < /> % _;
    }
    else {
        _ %  >
            <image_1["default"] src="/icons/sun-icon.svg" alt="sun" width="32" height="32"/>
                ,
                    < /> % _;
    }
    _ %  >
        <  % _;
    if (features.includes("svgr")) {
        _ %  >
            <icons_1.MoonIcon width="32" height="32"/>
                ,
                    < /> % _;
    }
    else {
        _ %  >
            <image_1["default"] src="/icons/moon-icon.svg" alt="moon" width="32" height="32"/>
                ,
                    < /> % _;
    }
    _ %  >
    ;
};
exports.Toggle = Toggle;
styled_1.ToggleContainer >
;
;
;
