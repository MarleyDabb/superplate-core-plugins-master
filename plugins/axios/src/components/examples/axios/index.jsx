"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AxiosExample = void 0;
var react_1 = require("react");
var axios_1 = require("axios");
/**
 * This component is generated as an example for axios
 *
 * To learn more about axios and data fetching,
 * please visit https://github.com/axios/axios
 */
var BASE_API_URL = "https://official-joke-api.appspot.com/";
var API_URL = "/jokes/programming/random";
var jokesApi = axios_1.default.create({
    baseURL: BASE_API_URL,
});
var AxiosExample = function () {
    var _a = react_1.useState(null), error = _a[0], setError = _a[1];
    var _b = react_1.useState(false), isLoaded = _b[0], setIsLoaded = _b[1];
    var _c = react_1.useState([]), data = _c[0], setData = _c[1];
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    react_1.useEffect(function () {
        jokesApi({
            method: "get",
            url: API_URL,
        })
            .then(function (res) { return res.data; })
            .then(function (result) {
            setData(result);
            setIsLoaded(true);
        }, 
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        function (error) {
            setIsLoaded(true);
            setError(error);
        });
    }, []);
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    if (!isLoaded) {
        return <div>Loading...</div>;
    }
    return (<div>
            <header>
                <h2>Fetch Data Fetching Example</h2>
            </header>
            <main />_ if (testing !== "none") {_ %  >
            data - testid}="joke-container"
            < />_ } _%>
            >
                <p>Programmer Jokes {"#" + data[0].id}</p>
                <p>{data[0].setup}</p>
                <p>{data[0].punchline}</p>
            </main>
        ,
            <footer>
                <a href="https://github.com/axios/axios" target="_blank" rel="noopener noreferrer">
                    Go To Documentation
                </a>
            </footer>);
};
exports.AxiosExample = AxiosExample;
div >
;
;
;
