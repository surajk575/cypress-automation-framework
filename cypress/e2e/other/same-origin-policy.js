/// <reference types="Cypress" />

describe("Cypress web security", () =>{
    it("Validating visiting two differnt domains", () => {
    
        cy.visit('http://www.webdriveruniversity.com/')
        cy.visit('https://www.google.com')
        
        
    });

    it("Validating visiting two differnt domains", () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#automation-test-store').invoke('removeAttr', 'target').click({force:true})
    });

    it("Origin Command", () => {
       /* cy.origin('webdriveruniversity.com', () =>{
            cy.visit("/");
        })
        cy.origin('automationteststore.com', () =>{
            cy.visit("/");
        }) */
        cy.visit('http://www.webdriveruniversity.com/')
        cy.visit('http://selectors.webdriveruniversity.com/')
        
        
    });

})