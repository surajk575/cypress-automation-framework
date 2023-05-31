/// <reference types="Cypress" />

describe("Random word", () => {
 
    it('Create random word', () => {

        cy.visit("https://www.w3.org/WAI/ARIA/apg/patterns/table/examples/sortable-table/")
        cy.get('.sortable') // table
        .within(() => {
          // limit query commands to the found element
          cy.get("(//tbody)[1]")
            .should('have.length', 4) // non-header rows
        })

    
            
    

    });

   
    })

