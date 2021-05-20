"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactQueryExample = void 0;
var react_1 = require("react");
var react_query_1 = require("react-query");
/**
 * This component is generated as an example for useQuery hook
 *
 * To learn more about React Query and data fetching,
 * please visit https://react-query.tanstack.com/
 */
var API_URL = "https://official-joke-api.appspot.com/jokes/programming/random";
var ReactQueryExample = function () {
    var _a = react_query_1.useQuery("repoData", function () {
        return fetch(API_URL).then(function (res) { return res.json(); });
    }, {
        refetchOnWindowFocus: false,
    }), data = _a.data, refetch = _a.refetch;
    var handleClick = function () {
        // manually refetch
        refetch();
    };
    if (data) {
        return (<div>
        <header>
          <h2>React Query Data Fetching Example</h2>
        </header>
        <main>
          <p>Programmer Jokes {"#" + data[0].id}</p>
          <p>{data[0].setup}</p>
          <p>{data[0].punchline}</p>
          <p>
            <button onClick={handleClick}>
              Give me another
            </button>
          </p>
        </main>
        <footer>
          <a href="https://react-query.tanstack.com/" target="_blank" rel="noopener noreferrer">
            Go To Documentation
          </a>
        </footer>
      </div>);
    }
    return null;
};
exports.ReactQueryExample = ReactQueryExample;
