/// <reference types="cypress" />

describe("Home page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should displays top 100 podcast", () => {
    cy.get('.MuiChip-label').should('have.text', '100');
    cy.get(".MuiGrid-item").should("have.length", 100);
  });

  it("should search podcasts with title which includes 'song'", () => {
    cy.get('input[type="text"]').type('song');

    cy.get(".MuiGrid-item").should("have.length", 10);
  });

  it("should go to podcast detail page", () => {
    cy.get(".MuiGrid-item").first().click();

    cy.url().should('include', '/podcast');
  });

  it("should go back Home from podcast detail page", () => {
    cy.get(".MuiGrid-item").first().click();

    cy.url().should('include', '/podcast');

    cy.contains('Podcaster').click(); 

    cy.get('.MuiChip-label').should('have.text', '100');
    cy.get(".MuiGrid-item").should("have.length", 100);
  });
});
