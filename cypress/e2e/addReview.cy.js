/// <reference types = "cypress"/>

describe("Check Adding a review Functionality", () => {
  it("Validate that the user can add his review", () => {
    cy.visit("https://magento.softwaretestingboard.com/");
    cy.get(".product-item").first().click();
    cy.get("#tab-label-reviews-title").should("be.visible").click();
    cy.get(".legend.review-legend").and("contain", "You're reviewing:");
    cy.get('input[type="radio"][value="19"]')
      .should("exist")
      .and("be.visible")
      .check({ force: true });

    cy.get("#nickname_field").clear().type("Sahar");
    cy.get("#summary_field").clear().type("summary about the product");
    cy.get("#review_field").clear().type("review about the product");
    cy.get(".action.submit.primary").should("contain", "Submit Review").click();
    cy.get('[data-ui-id="message-success"]').should(
      "contain",
      "You submitted your review for moderation."
    );
  });
});
