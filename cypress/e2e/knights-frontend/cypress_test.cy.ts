/// <reference types="cypress" />

describe('Cypress test', () => {
  cy.visit('http://localhost:3000')
    .contains('Hello World!');
});