"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.I18NExample = void 0;
var react_1 = require("react");
var _i18n_1 = require("@i18n");
/**
 * This component is generated as en example usage of next-i18next
 *
 * To learn more about next-i18next and i18n
 * please visit https://github.com/isaachinman/next-i18next
 */
var I18NExampleComponent = function (_a) {
    var t = _a.t;
    var changeLanguage = function () {
        _i18n_1.i18n.changeLanguage(_i18n_1.i18n.language === "tr" ? "en" : "tr");
    };
    return (<div>
            <header>
                <h2>{t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["home:title"], ["home:title"])))}</h2>
                <div>
                    <button onClick={changeLanguage}>
                        {t("common:language.en")}
                    </button>
                    <button onClick={changeLanguage}>
                        {t("common:language.tr")}
                    </button>
                </div>
            </header>
            <main>
                <p>{t("common:greet", { name: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["common:world"], ["common:world"]))) })}</p>
                <p>{t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["home:someText"], ["home:someText"])))}</p>
            </main>
            <footer>
                <a href="https://github.com/isaachinman/next-i18next" target="_blank" rel="noopener noreferrer">
                    {t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["common:documentation"], ["common:documentation"])))}
                </a>
            </footer>
        </div>);
};
exports.I18NExample = _i18n_1.withTranslation(["common", "home"])(I18NExampleComponent);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
