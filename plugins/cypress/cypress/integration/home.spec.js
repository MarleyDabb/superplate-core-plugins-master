describe("Homepage", function () {
    beforeEach(function () {
        cy.visit("/");
    });
    it("Brings header", function () {
        cy.getBySel("main-heading").should("contain.text", "superplate");
    });
    it("Should have true href", function () {
        // https://github.com/cypress-io/cypress-example-recipes/blob/master/examples/testing-dom__tab-handling-links/cypress/integration/tab_handling_anchor_links_spec.js
        cy.getBySel("docs-btn-anchor")
            .should("have.prop", "href")
            .and("equal", "https://pankod.github.io/superplate/");
    });
    it("Should have icons", function () {
        cy.getBySel("icon").should("have.length", 6);
    });
});
