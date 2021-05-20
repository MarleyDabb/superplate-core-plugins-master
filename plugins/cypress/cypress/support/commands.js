var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Cypress.Commands.add("getBySel", function (selector) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return cy.get.apply(cy, __spreadArray(["[data-test=" + selector + "]"], args));
});
Cypress.Commands.add("getBySelLike", function (selector) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return cy.get.apply(cy, __spreadArray(["[data-test*=" + selector + "]"], args));
});
