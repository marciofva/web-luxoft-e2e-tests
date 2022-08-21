/// <reference types="Cypress" />

'use strict'

let Utils = function(){

    this.typeCharactersOneByOne = function(element, value){
        cy.get(element).wait(1000).focus().type('   ')
        
        value.split('').forEach((char) => {
            cy.get(element)
            .type(char)
            .wait(200)
        })
    }

    this.incrementPassenger = function(element, value){
        if (value != null){
            for (let i = 0; i < value; i++) { 
                cy.get(element).click()
            }
        }
    }
}
export default Utils