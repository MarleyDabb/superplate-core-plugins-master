"use strict";
exports.__esModule = true;
exports.GraphQLRequestExample = void 0;
var react_1 = require("react");
var graphql_request_1 = require("graphql-request");
var graphql_1 = require("./graphql");
var endpoint = "https://api.spacex.land/graphql/";
var GraphQLRequestExample = function () {
    var _a = react_1["default"].useState(), launches = _a[0], setLaunches = _a[1];
    var _b = react_1["default"].useState(false), hasData = _b[0], setHasData = _b[1];
    if (!hasData) {
        graphql_request_1.request(endpoint, graphql_1.GET_LAUNCHES, { limit: 2 }).then(function (data) {
            setLaunches(data);
            setHasData(true);
        });
    }
    if (!hasData)
        return <div>Loading...</div>;
    return (<div>
            <div>Last 2 Space-X Launches</div>
            <div>
                {launches.launchesPast.map(function (val) { return (<div key={"key-" + val.mission_name}>
                        <img src={val.links.mission_patch_small}/>
                        <div>
                            <h3>{val.mission_name}</h3>
                            <div>
                                <div>
                                    <h4>Rocket:</h4>
                                    <span>{val.rocket.rocket_name}</span>
                                </div>
                                <div>
                                    <h4>Launch year:</h4>
                                    <span>{val.launch_year}</span>
                                </div>
                            </div>
                        </div>
                    </div>); })}
            </div>
        </div>);
};
exports.GraphQLRequestExample = GraphQLRequestExample;
