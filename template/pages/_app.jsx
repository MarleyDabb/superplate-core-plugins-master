"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
    <  % -_app.import.join("\n");
_ %  >
    <  %
;
var top = _app.wrapper.map(function (wrapper) { return wrapper[0] || ""; });
var bottom = _app.wrapper.map(function (wrapper) { return wrapper[1] || ""; }).reverse();
    %  >
    function MyApp(_a) {
        var Component = _a.Component, pageProps = _a.pageProps;
            <  % -_app.inner.join("\n") %  >
        ;
        return (
            <  % -top.join("\n") %  >
            <Component {...pageProps}/>
                ,
                    < /> % -bottom.join("\n") %  >
        );
    }
    <  % _;
if (answers.i18n === 'next-i18next') {
    _ %  >
    ;
    export default appWithTranslation(MyApp);
        <  % _;
}
else {
    _ %  >
    ;
    export default MyApp;
        <  % _;
}
_ %  >
;
