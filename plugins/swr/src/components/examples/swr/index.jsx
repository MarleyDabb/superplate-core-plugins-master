"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SWRExample = void 0;
var react_1 = require("react");
var swr_1 = require("swr");
/**
 * This component is generated as an example for useSWR hook
 *
 * To learn more about SWR and data fetching,
 * please visit https://swr.vercel.app/
 */
var API_URL = "https://official-joke-api.appspot.com/jokes/programming/random";
var SWRExample = function () {
    var data = swr_1.default(API_URL).data;
    var refetch = function () {
        swr_1.mutate(API_URL);
    };
    if (data) {
        return (<div>
                <header>
                    <h2>SWR Data Fetching Example</h2>
                </header>
                <main>
                    <p>
                        Programmer Jokes {"#" + data[0].id}
                    </p>
                    <p>{data[0].setup}</p>
                    <p>{data[0].punchline}</p>
                    <p>
                        <button onClick={refetch}>
                            Give me another
                        </button>
                    </p>
                </main>
                <footer>
                    <a href="https://swr.vercel.app/" target="_blank" rel="noopener noreferrer">
                        Go To Documentation
                    </a>
                </footer>
            </div>);
    }
    return null;
};
exports.SWRExample = SWRExample;
