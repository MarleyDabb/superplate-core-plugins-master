"use strict";
exports.__esModule = true;
exports.Logo = void 0;
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
    import { NextjsIcon } from "@components/icons";
        <  % _;
}
_ %  >
;
var Logo = function () {
    return (
        <  % _);
    if (features.includes("svgr")) {
        _ %  >
            <icons_1.NextjsIcon /> % ;
        if (!(e2etest === "none")) {
             %  > data - test;
            "icon" <  % ;
        }
         %  > className;
        "text-white mx-auto";
        width = "96";
        height = "58" /  >
            <  % _;
    }
    else {
        _ %  >
            <image_1["default"] /> % ;
        if (!(e2etest === "none")) {
             %  > data - test;
            "icon" <  % ;
        }
         %  > src;
        "/icons/nextjs-icon.svg";
        alt = "nextjs";
        width = "96";
        height = "58" /  >
            <  % _;
    }
    _ %  >
    ;
};
exports.Logo = Logo;
;
;
