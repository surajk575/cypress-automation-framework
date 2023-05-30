/// <reference types="Cypress" />

describe("Menu Filter", () => {
 
    it('should click on multiple menu item', () => {


       //cy.get(".ui.dropdown>*").find('.dropdown.icon').invoke('attr', 'title').should('include', 'Add to Cart')

       cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
        //cy.get('#dropdowm-menu-1').select("C#") */
        cy.drop_click('#dropdowm-menu-3', "CSS") 
   
    });

})  