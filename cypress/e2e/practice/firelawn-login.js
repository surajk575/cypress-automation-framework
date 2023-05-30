/// <reference types="Cypress" />

describe("Firelawn new login", ()=> {

   /* before(function(){

        cy.visit("https://www.firelawn.com/");        
    }) */

    beforeEach(function(){
        cy.visit("https://www.firelawn.com/"); 

        cy.fixture('example').then( (data) => {
            //cy.wait(20000).Click_button('#loginBtn');
            cy.get('#loginBtn', {timeout:30000}).should('be.visible');
            cy.Click_button('#loginBtn');
            cy.get('#Email').type(data.email1);//email
            cy.get('#Password').type(data.password);//password
            cy.Click_button('#Login');
            
        })
    })
    it("Men button click",() => {
        cy.get('#men', {timeout:30000}).should('be.visible');
        cy.Click_button('#men');
        
        
    })

    
    it("Women button click",() => {

        cy.get('#women', {timeout:30000}).should('be.visible');
        cy.Click_button('#women');
    })
        
    afterEach(function(){
        //cy.get("button[aria-label='Account settings']", {timeout:20000}).should('be.visible');
        cy.wait(10000)
        cy.Click_button("button[aria-label='Account settings']")
        cy.Click_button("div[id='account-menu'] li:nth-child(7)")
    })
    
})    
