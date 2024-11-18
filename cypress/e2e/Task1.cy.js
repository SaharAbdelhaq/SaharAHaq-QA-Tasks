describe("Check Conduit registeration Page functionality ", () => {
  it("Validate Logo Functionality", () => {
    cy.visit("https://demo.productionready.io/#/register");
    cy.get(".navbar-brand").click();
    cy.contains("h1", "conduit");
  });

  it("Validate that when Home clicked, the user should redirected to Home Page  ", () => {
    cy.visit("https://demo.productionready.io/#/register");
    cy.get("[href='#/']").contains("Home").click();
    cy.contains("h1", "conduit");
  });

  it("Validate that when Sign up clicked, the user should redirected to Registeration Page  ", () => {
    cy.visit("https://demo.productionready.io/#/register");
    cy.contains(
      "ul.nav.navbar-nav.pull-xs-right a.nav-link",
      "Sign up"
    ).click();
    cy.get(".text-xs-center.ng-binding").should("contain", "Sign up");
  });

  it("Validate that when user click on Have an account?, the user should redirected to Sign in page", () => {
    cy.visit("https://demo.productionready.io/#/register");
    cy.get("p.text-xs-center > a").contains("Have an account?").click();
    cy.contains("h1", "Sign in");
  });

  it("Validate that the user can Sign up using a Valid username and password", () => {
    cy.visit("https://demo.productionready.io/#/register");
    cy.get("input[placeholder='Username']").type("SaharAHaq");
    cy.get("input[placeholder='Email']").type("Sahar12@gmail.com");
    cy.get("input[placeholder='Password']").type("12gthy45");
    cy.contains("button", "Sign up").click();
  });

  it.only("Validate if the cuser click on Cnduit link in the footer, it will redirected the user to the conduit Home Page", () => {
    cy.visit("https://demo.productionready.io/#/register");
    cy.get(".logo-font").click();
    cy.contains("h1", "conduit");
  });
});
