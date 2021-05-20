"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchExample = void 0;
var react_1 = require("react");
/**
 * This component is generated as an example for fetch
 */
var API_URL = "https://official-joke-api.appspot.com/jokes/programming/random";
var FetchExample = function () {
    var _a = react_1.useState(null), error = _a[0], setError = _a[1];
    var _b = react_1.useState(false), isLoaded = _b[0], setIsLoaded = _b[1];
    var _c = react_1.useState([]), data = _c[0], setData = _c[1];
    console.log("data: ", data);
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    react_1.useEffect(function () {
        fetch(API_URL)
            .then(function (res) {
            console.log("res: ", res);
            return res.json();
        })
            .then(function (result) {
            console.log("result: ", result);
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
    else if (!isLoaded) {
        return <div>Loading...</div>;
    }
    else {
        return (<div>
                <header>
                    <h2>Fetch Data Fetching Example</h2>
                </header>
                <main />_ if (testing !== "none") {_ %  >
                data - testid}="joke-container"
                < />_ } _%>
                >
                    <p>
                        Programmer Jokes {"#" + data[0].id}
                    </p>
                    <p>{data[0].setup}</p>
                    <p>{data[0].punchline}</p>
                </main>
            ,
                <footer>
                    <a href="https://swr.vercel.app/" target="_blank" rel="noopener noreferrer">
                        Go To Documentation
                    </a>
                </footer>);
    }
};
exports.FetchExample = FetchExample;
div >
;
;
;
