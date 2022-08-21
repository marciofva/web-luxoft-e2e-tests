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

import searchPage from '../page-objects/search-ticket-page'
import Utils from './helper'

let utils = new Utils()

Cypress.Commands.add('setOrigin', (origin) => {
    cy.get(searchPage.originInput).should('be.visible')
    utils.typeCharactersOneByOne(searchPage.originInput, origin.partialSearch)
    cy.contains(origin.fullSearch).click()
    cy.get(searchPage.originField).invoke('text').as('getOrigin')
})


Cypress.Commands.add('setDestination', (destination) => {
    cy.get(searchPage.destinationInput).should('be.visible')
    utils.typeCharactersOneByOne(searchPage.destinationInput, destination.partialSearch)
    cy.contains(destination.fullSearch).click()
    cy.get(searchPage.destinationField).invoke('text').as('getDestination')
})


Cypress.Commands.add('pickDate', (departureDate, returnDate) => {
    cy.get(searchPage.tripDurationDropdown).should('be.visible').click()

    cy.get(searchPage.datePicker).each(($el)=>{     
        cy.wrap($el).invoke('attr', 'aria-label').then((date) => {
            if (date.includes(departureDate)){
                cy.get($el).click()
            }
        })
    })

    if (returnDate === null){
        cy.get(searchPage.noRetunTicketButton).click()
    }else{
        cy.get(searchPage.datePicker).each(($el)=>{
            cy.wrap($el).invoke('attr', 'aria-label').then((date) => {
                if (date.includes(returnDate)){
                    cy.get($el).click()
                }
            })
        })
    }
    cy.get(searchPage.departureField).invoke('val').as('getDepartureDate')
    cy.get(searchPage.returnField).invoke('val').as('getReturnDate')
})


Cypress.Commands.add('addPassenger', (passenger) => {
    cy.get(searchPage.passengerDropdown).click()
    utils.incrementPassenger(searchPage.incrementAdultPassenger, passenger.incrementAdults)
    utils.incrementPassenger(searchPage.incrementChildrenPassenger, passenger.incrementChildren)
    utils.incrementPassenger(searchPage.incrementInfantsPassenger, passenger.incrementInfants)
    cy.get(searchPage.passengerField).first().invoke('text').as('getPassenger')
})


Cypress.Commands.add('searchForTicket', (data) => {
    cy.get(searchPage.themeCheckbox).should('be.visible').click()
    .setOrigin(data.from)
    .setDestination(data.to)
    .pickDate(data.duration.departureDate, data.duration.returnDate)
    .addPassenger(data.passenger)
    .get(searchPage.openNewTabBookingCheckbox).click()
    .get(searchPage.searchButton).click()   
})