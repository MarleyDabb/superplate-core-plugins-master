"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.NextTranslateExample = void 0;
var react_1 = require("react");
var link_1 = require("next/link");
var useTranslation_1 = require("next-translate/useTranslation");
var _i18n_1 = require("@i18n");
var locales = _i18n_1["default"].locales;
/**
 * This component is generated as en example usage of next-translate
 *
 * To learn more about next-translate and i18n
 * please visit https://github.com/vinissimus/next-translate
 */
var NextTranslateExample = function (_a) {
    var defaultNamespace = _a.defaultNamespace;
    var _b = useTranslation_1["default"](defaultNamespace), t = _b.t, lang = _b.lang;
    return (<div>
            <header>
                <h2>{t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["title"], ["title"])))}</h2>
                <div>
                    {locales.map(function (lng) { return (<link_1["default"] href="/" passHref locale={lng} key={lng}>
                            <a>
                                {t("common:language." + lng)}
                            </a>
                        </link_1["default"]>); })}
                </div>
            </header>
            <main>
                <p>{t("common:greet", { name: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["common:world"], ["common:world"]))) })}</p>
                <p>{t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["someText"], ["someText"])))}</p>
            </main>
            <footer>
                <a href="https://github.com/vinissimus/next-translate" target="_blank" rel="noopener noreferrer">
                    {t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["common:documentation"], ["common:documentation"])))}
                </a>
            </footer>
        </div>);
};
exports.NextTranslateExample = NextTranslateExample;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
