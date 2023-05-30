/// <reference types="Cypress" />

describe("Multi select", () => {
 
    beforeEach(() => {
      cy.visit("https://demo.mobiscroll.com/select/multiple-select");
      
    });
   
    it('should select multiple', () => {

        cy.get('#multiple-select-input').click({force:true})
        //cy.get('#multiple-select')
    });

})  