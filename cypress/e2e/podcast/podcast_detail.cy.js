/// <reference types="cypress" />


describe("Podcast Detail page", () => {
  beforeEach(() => {
    cy.visit("/podcast/1535809341");
  });

  it("should displays podcast detail info", () => {
    cy.get('img[alt="The Joe Budden Podcast"]').should('exist');
    cy.contains('The Joe Budden Podcast').should('exist');
  });

	it("should displays list of episodes", () => {
    cy.contains('Episodes: 20').should('exist');
		cy.get('tbody .MuiTableRow-root').should('have.length', 20);
  });

  it("should go to episode detail page", () => {
    cy.get('tbody .MuiTableRow-root').first().click();

    cy.url().should('include', '/episode');
  });
});
