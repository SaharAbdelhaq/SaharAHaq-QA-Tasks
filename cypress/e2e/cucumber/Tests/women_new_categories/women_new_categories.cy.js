import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("The user navigates to Magento Home Page", () => {
  cy.visit("https://magento.softwaretestingboard.com/");
});

When(
  "The user Navigates to What's New by choosing it from Magento Nav-Bar",
  () => {
    cy.get('[role="menuitem"]').contains("What's New").click();
  }
);

Then("Print all categories in the New In Women section In What's New page", () => {
  cy.get('strong.title span')  
    .contains("New in women's")  
    .parent()  
    .next('ul.items')  
    .find('li.item a')  
    .then(($categories) => {
      for (let i = 0; i < $categories.length; i++) {
        cy.log($categories[i].innerText);
      }
    });
});


