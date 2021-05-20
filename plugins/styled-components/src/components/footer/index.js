"use strict";
exports.__esModule = true;
exports.Footer = void 0;
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
    import { PankodIcon, GithubIcon, TwitterIcon, YoutubeIcon, LinkedinIcon } from "@components/icons";
        <  % _;
}
_ %  >
;
var styled_1 = require("./styled");
var Footer = function () {
    return ((<styled_1.Container>
      <styled_1.LogoButton href="https://github.com/pankod" target="_blank"/>%_ if (testing === 'testing-library') {_ %  >
            meta_json_1["default"] - testid}="pankod-logo"
        < />_ } _%>
      >
        < />_ if (features.includes("svgr")) {_ %  >
            <icons_1.PankodIcon color="white" width="140" height="28"/>
                ,
                    < /> % _} else {_ %  >
            <image_1["default"] src="/icons/pankod-icon.svg" alt="pankod" width="140" height="28"/>
                ,
                    < /> % _} _%>
      </styled_1.LogoButton>
        ,
            <styled_1.List />) % );
    if (testing === 'testing-library') {
         %  > meta_json_1["default"] - testid;
        "icons-container" <  % ;
    }
     %  >  >
        <styled_1.ListItem>
          < />_ if (features.includes("svgr")) {_ %  >
                <icons_1.GithubIcon color="white" width="28" height="29"/>
                    ,
                        < /> % _} else {_ %  >
                <image_1["default"] src="/icons/github-icon.svg" alt="github" width="28" height="29"/>
                    ,
                        < /> % _} _%>
        </styled_1.ListItem>
            ,
                <styled_1.ListItem>
          < />_ if (features.includes("svgr")) {_ %  >
                        <icons_1.TwitterIcon color="white" width="28" height="28"/>
                            ,
                                < /> % _} else {_ %  >
                        <image_1["default"] src="/icons/twitter-icon.svg" alt="twitter" width="28" height="28"/>
                            ,
                                < /> % _} _%>
        </styled_1.ListItem>
                    ,
                        <styled_1.ListItem>
          < />_ if (features.includes("svgr")) {_ %  >
                                <icons_1.YoutubeIcon color="white" width="28" height="29"/>
                                    ,
                                        < /> % _} else {_ %  >
                                <image_1["default"] src="/icons/youtube-icon.svg" alt="youtube" width="28" height="29"/>
                                    ,
                                        < /> % _} _%>
        </styled_1.ListItem>
                            ,
                                <styled_1.ListItem>
          < />_ if (features.includes("svgr")) {_ %  >
                                        <icons_1.LinkedinIcon color="white" width="28" height="32"/>
                                            ,
                                                < /> % _} else {_ %  >
                                        <image_1["default"] src="/icons/linkedin-icon.svg" alt="linkedin" width="28" height="32"/>
                                            ,
                                                < /> % _} _%>
        </styled_1.ListItem>;
};
exports.Footer = Footer;
styled_1.List >
;
styled_1.Container >
;
;
;
