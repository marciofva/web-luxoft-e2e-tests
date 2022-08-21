// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
/// <reference types="Cypress" />

Cypress.Commands.add('launchBrowser', () => {
    cy.viewport(1280, 720)
    cy.visit('/')
    .title()
    .should('include', 'Cheap Flights, Airline Tickets & Airfares')
})