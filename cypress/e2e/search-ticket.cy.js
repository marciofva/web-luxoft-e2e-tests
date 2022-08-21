/// <reference types="Cypress" />

import searchData from '../fixtures/search-ticket.json'
import searchPage from '../page-objects/search-ticket-page'

describe('Search for ticket', () => {

  beforeEach(() => {
    cy.launchBrowser()
  })

    Cypress._.times(searchData.length, (i) => {
      it('successfully ticket search', () => {
        
        cy.searchForTicket(searchData[i])
        .url()
        .should('include', `${Cypress.config().baseUrl}/search/`)

        cy.get('@getOrigin').then(origin => {
          cy.get(searchPage.originField).should('have.text', origin)
        })
        .get('@getDestination').then(destination => {
          cy.get(searchPage.destinationField).should('have.text', destination)
        })
        .get('@getDepartureDate').then(departureDate => {
          cy.get(searchPage.departureField).should('have.value', departureDate)
        })
        .get('@getReturnDate').then(returnDate => {
          cy.get(searchPage.returnField).should('have.value', returnDate)
        })
        .get('@getPassenger').then(passenger => {
          cy.get(searchPage.passengerField).first().should('have.text', passenger)
        })
      })
    })
})