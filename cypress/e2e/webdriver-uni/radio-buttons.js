/// <reference types="Cypress" />
describe("Radio buttons via webdriverUni", () => {
    // lecture 124 to 125
    beforeEach(function(){
        cy.visit("/");
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true});
       })
    it("Check specific radio button", () => {

        cy.get('#radio-buttons').find("[type='radio']").first().check()
        cy.get('#radio-buttons').find("[type='radio']").eq(1).check()
    })

    it("Validate the status specific radio button", () => {
        cy.get("[value='lettuce']").should('not.be.checked')
        cy.get("[value='pumpkin']").should('be.checked')
        
        cy.get("[value='lettuce']").check()
        cy.get("[value='lettuce']").should('be.checked')

        cy.get("[value='cabbage']").should('be.disabled')
        
    })
})