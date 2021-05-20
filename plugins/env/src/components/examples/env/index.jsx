"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvExample = void 0;
var react_1 = require("react");
var EnvExample = function () {
    var _a;
    return (<div>
            <div>
                NEXT_PUBLIC_ENV_VARIABLE
                </div>
            <div>
                {process.env.NEXT_PUBLIC_ENV_VARIABLE}
            </div>
            <div>
                NEXT_PUBLIC_ENV_LOCAL_VARIABLE
                </div>
            <div>
                {process.env.NEXT_PUBLIC_ENV_LOCAL_VARIABLE}
            </div>
            <div>
                NEXT_PUBLIC_DEVELOPMENT_ENV_VARIABLE
                </div>
            <div>
                {process.env.NEXT_PUBLIC_DEVELOPMENT_ENV_VARIABLE}
            </div>
            <div>
                NEXT_PUBLIC_PRODUCTION_ENV_VARIABLE
                </div>
            <div>
                {(_a = process.env.NEXT_PUBLIC_PRODUCTION_ENV_VARIABLE) !== null && _a !== void 0 ? _a : "undefined"}
            </div>
        </div>);
};
exports.EnvExample = EnvExample;
