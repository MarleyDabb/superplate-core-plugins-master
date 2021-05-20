"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactUseExample = void 0;
var react_1 = require("react");
var react_use_1 = require("react-use");
/**
 * This component is created as an example for React-use hooks
 *
 * To learn more about react-use and it's hooks
 * please visit https://github.com/streamich/react-use
 */
var ReactUseExample = function () {
    var _a = react_1.default.useState(0), count = _a[0], setCount = _a[1];
    var prevCount = react_use_1.usePrevious(count);
    var _b = react_use_1.useWindowSize(), width = _b.width, height = _b.height;
    return (<div>
            <header>
                <h2>React Use Example</h2>
                <p>
                    react-use has various hooks that you can use with ease. To
                    learn more about react-use please check out their
                    documentation.
                </p>
            </header>
            <main>
                <div>
                    <p>usePrevious</p>
                    <p>
                        Now: {count}, before: {prevCount}
                    </p>
                    <p>
                        <button onClick={function () { return setCount(count + 1); }}>
                            Increment
                        </button>
                        <button onClick={function () { return setCount(count - 1); }}>
                            Decrement
                        </button>
                    </p>
                </div>
                <div>
                    <p>useWindowSize</p>
                    <p>
                        width: {width + "px"}, height: {height + "px"}
                    </p>
                </div>
            </main>
            <footer>
                <a href="https://github.com/streamich/react-use" rel="noopener noreferrer" target="_blank">
                    Go To Documentation
                </a>
            </footer>
        </div>);
};
exports.ReactUseExample = ReactUseExample;
