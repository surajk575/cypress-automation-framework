/// <reference types="Cypress" />

describe("Firelawn", ()=> {

    it("Login",() => {
        cy.session('Login Session', () => {
            cy.visit("https://www.firelawn.com/")
            cy.fixture('example').then( (data) => {
    
                //cy.wait(20000).Click_button('#loginBtn');
                cy.get('#loginBtn', {timeout:30000}).should('be.visible');
                cy.Click_button('#loginBtn');
                cy.get('#Email').type(data.email1);//email
                cy.get('#Password').type(data.password);//password
                cy.Click_button('#Login');

                cy.wait(10000);
            cy.get('#mem').should('be.visible');
                
            })
            
          })
        
        })

        it("Men button click",() => {
            cy.wait(10000);
            cy.get('#mem').should('be.visible');
        }) 

        it("Women button click",() => {
            cy.wait(10000);
            cy.get('#womem').should('be.visible');
        }) 

    })        

    







