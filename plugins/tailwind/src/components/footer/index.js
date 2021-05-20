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
var Footer = function () {
    return ((<div className="text-center py-5 bg-gray-800">
      <a href="https://github.com/pankod" target="_blank" className="block mb-3"/>%_ if (testing === 'testing-library') {_ %  >
            data - testid}="pankod-logo"
        < />_ } _%>
      >
          < />_ if (features.includes("svgr")) {_ %  >
            <icons_1.PankodIcon /> % } if(!(e2etest === "none")) { %  > data - test}="icon" < /> } %> className="text-white mx-auto" width="140" height="28" />
          < />_ } else {_ %  >
            <image_1["default"] /> % } if(!(e2etest === "none")) { %  > data - test}="icon" < /> } %> src="/icons/pankod-icon.svg" alt="pankod" width="140" height="28" />
          < />_ } _%>
      </a>
        ,
            (<ul className="flex justify-center list-none p-0 m-0"/>, < />)) % );
    if (testing === 'testing-library') {
         %  > data - testid;
        "icons-container" <  % ;
    }
     %  >  >
        (<li className="mx-3">
          < />_ if (features.includes("svgr")) {_ %  >
                <icons_1.GithubIcon /> % } if(!(e2etest === "none")) { %  > data - test}="icon" < /> } %> color="white" width="28" height="29" />
          < />_ } else {_ %  >
                <image_1["default"] /> % } if(!(e2etest === "none")) { %  > data - test}="icon" < /> } %> src="/icons/github-icon.svg" alt="github" width="28" height="29" />
          < />_ } _%>
        </li>
            ,
                (<li className="mx-3">
        < />_ if (features.includes("svgr")) {_ %  >
                        <icons_1.TwitterIcon /> % } if(!(e2etest === "none")) { %  > data - test}="icon" < /> } %> color="white" width="28" height="28" />
          < />_ } else {_ %  >
                        <image_1["default"] /> % } if(!(e2etest === "none")) { %  > data - test}="icon" < /> } %> src="/icons/twitter-icon.svg" alt="nextjs" width="28" height="28" />
          < />_ } _%>
        </li>
                    ,
                        (<li className="mx-3">
        < />_ if (features.includes("svgr")) {_ %  >
                                <icons_1.YoutubeIcon /> % } if(!(e2etest === "none")) { %  > data - test}="icon" < /> } %> color="white" width="28" height="29" />
          < />_ } else {_ %  >
                                <image_1["default"] /> % } if(!(e2etest === "none")) { %  > data - test}="icon" < /> } %> src="/icons/youtube-icon.svg" alt="youtube" width="28" height="29" />
          < />_ } _%>
        </li>
                            ,
                                <li className="mx-3">
        < />_ if (features.includes("svgr")) {_ %  >
                                        <icons_1.LinkedinIcon /> % } if(!(e2etest === "none")) { %  > data - test}="icon" < /> } %> color="white" width="28" height="32" />
          < />_ } else {_ %  >
                                        <image_1["default"] /> % } if(!(e2etest === "none")) { %  > data - test}="icon" < /> } %> src="/icons/linkedin-icon.svg" alt="linkedin" width="28" height="32" />
          < />_ } _%>
        </li>)));
};
exports.Footer = Footer;
ul >
;
div >
;
;
;
