/// <reference types="Cypress" />

describe("Sorting Table", () => {
 
    it('sort table', () => {

        cy.visit("https://www.w3schools.com/howto/howto_js_sort_table.asp")
        cy.get("#nameClick").click()
        let arr1 = new Array();
        cy.get("#myTable2 tr td:nth-child(1)")
      .each(($el) => arr1.push($el.text()))
      .then(() => {
        cy.wrap(arr1).should("deep.equal", [...arr1].sort());
      });
      cy.get("#nameClick").click()
        let arr2 = new Array();
        cy.get("#myTable2 tr td:nth-child(1)")
      .each(($el) => arr2.push($el.text()))
      .then(() => {
        cy.wrap(arr2).should("deep.equal", [...arr2].sort().reverse());
      });

      cy.get("#countryClick").click()
        let arr3 = new Array();
        cy.get("#myTable2 tr td:nth-child(2)")
      .each(($el) => arr3.push($el.text()))
      .then(() => {
        cy.wrap(arr3).should("deep.equal", [...arr3].sort());
      });

      cy.get("#countryClick").click()
        let arr4 = new Array();
        cy.get("#myTable2 tr td:nth-child(2)")
      .each(($el) => arr4.push($el.text()))
      .then(() => {
        cy.wrap(arr4).should("deep.equal", [...arr4].sort());
      });


        //The value of a "0.00" should be between negative and positive values without a +/- sign and no bar
       // cy.get('.value').should('be.visible').contains('0.00').should('not.contain', '+').should('not.contain', '-');
        //If Table values< 1, show 2 decimal places and no leading zero (.11). if >1 show 2 decimal places (1.11)
        /*cy.get('#table-container').find('tr').each((row) => {
            cy.wrap(row).find('td').each((cell) => {
              cy.wrap(cell).invoke('text').then((text) => {
                const value = parseFloat(text);
          
                // Check if the value is less than 1
                if (value < 1) {
                  const formattedValue = value.toFixed(2).replace(/^0+/, ''); // Remove leading zeros
                  cy.wrap(cell).should('have.text', formattedValue);
                } else {
                  const formattedValue = value.toFixed(2);
                  cy.wrap(cell).should('have.text', formattedValue);
                }
              });
            });
          }); */
       
    
            
    

    });

   
    })

