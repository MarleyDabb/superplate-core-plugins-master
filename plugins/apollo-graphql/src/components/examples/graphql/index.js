"use strict";
exports.__esModule = true;
exports.GraphQLExample = void 0;
var react_1 = require("react");
var client_1 = require("@apollo/client");
var graphql_1 = require("./graphql");
var GraphQLExample = function () {
    var _a = client_1.useQuery(graphql_1.GET_LAUNCHES, {
        variables: { limit: 2 },
    }), data = _a.data, loading = _a.loading, error = _a.error;
    if (loading)
        return <p>Loading..</p>;
    if (error)
        return <p>ERROR: {error.message}</p>;
    if (!data)
        return <p>Not found</p>;
    return (<div>
            <div>Last 2 Space-X Launches</div>
            <div>
                {data.launchesPast.map(function (val) { return (<div>
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
exports.GraphQLExample = GraphQLExample;
