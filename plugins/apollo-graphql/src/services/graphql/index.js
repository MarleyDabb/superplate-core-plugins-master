"use strict";
exports.__esModule = true;
exports.initializeApollo = void 0;
var client_1 = require("@apollo/client");
var apolloClient = null;
var createApolloClient = new client_1.ApolloClient({
    ssrMode: typeof window === "undefined",
    uri: "https://api.spacex.land/graphql/",
    cache: new client_1.InMemoryCache(),
});
var initializeApollo = function () {
    // For SSG and SSR always create a new Apollo Client
    if (typeof window === "undefined") {
        return createApolloClient;
    }
    // Create the Apollo Client once in the client
    if (!apolloClient) {
        apolloClient = createApolloClient;
    }
    return apolloClient;
};
exports.initializeApollo = initializeApollo;
