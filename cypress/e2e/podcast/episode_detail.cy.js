/// <reference types="cypress" />


describe("Podcast Detail page", () => {
  beforeEach(() => {
    cy.visit("/podcast/1535809341/episode/1000640726314");
  });

  it("should displays podcast detail info", () => {
    cy.get('img[alt="The Joe Budden Podcast"]').should('exist');
    cy.contains('The Joe Budden Podcast').should('exist');
  });

	it("should displays episode detail info", () => {
    cy.contains('Episode 688 | "A Little Bit of Truth"').should('exist');
		cy.get('audio').should('exist');
  });
});
