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
;
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
    <  % _;
if (features.includes("svgr")) {
    _ %  >
    ;
    import { PankodIcon } from "@components/icons";
        <  % _;
}
_ %  >
;
var Footer = function () {
    var iconStyle = {
        fontSize: 22,
        color: "#fff",
    };
    return (<div style={{
            backgroundColor: "#282c34",
            color: "#fff",
            textAlign: "center",
            paddingTop: 32,
            paddingBottom: 32,
        }}>
            <antd_1.Space direction="vertical" size="large">
                < />_ if (features.includes("svgr")) {_ %  >
            <icons_2.PankodIcon /> % } if(!(e2etest === "none")) { %  > data - test}="icon" < /> } %> color="white" width="140" height="28" />
                < />_ } else {_ %  >
            <image_1["default"] /> % } if(!(e2etest === "none")) { %  > data - test}="icon" < /> } %> src="/icons/pankod-icon.svg" alt="pankod" width="140" height="28" />
                < />_ } _%>
                <antd_1.Space align="center" size="middle"/>% if (testing === 'testing-library') { %  > data - testid}="icons-container" < /> } %> >
                    <a href="https://github.com/pankod" target="_blank"/>%_ if (testing === 'testing-library') {_ %  >
            data - testid}="pankod-logo"
                        < />_ } _%>
                        style={iconStyle}
                    >
                        <icons_1.GithubOutlined /> if(!(e2etest === "none")) { %  > data - test}="icon" < /> } %>/>
                    </a>
                    <a href="https://twitter.com/PankodDev" target="_blank" style={iconStyle}>
                        <icons_1.TwitterOutlined /> if(!(e2etest === "none")) { %  > data - test}="icon" < /> } %>/>
                    </a>
                    <a href="https://www.youtube.com/channel/UCBGOeQkv1XW3ptryLWlQbAQ" target="_blank" style={iconStyle}>
                        <icons_1.YoutubeOutlined /> if(!(e2etest === "none")) { %  > data - test}="icon" < /> } %>/>
                    </a>
                    <a href="https://www.linkedin.com/company/pankod-yazilim-ve-danismanlik/" target="_blank" style={iconStyle}>
                        <icons_1.LinkedinOutlined /> if(!(e2etest === "none")) { %  > data - test}="icon" < /> } %>/>
                    </a>
                </antd_1.Space>);
};
exports.Footer = Footer;
antd_1.Space >
;
div >
;
;
;
