/// <reference types="cypress" />

describe('KnightList', () => {
  it('fetches the knights from the backend', () => {
    cy.visit('http://localhost:3000');
  });
});