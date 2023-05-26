/// <reference types="Cypress" />

describe("Actitime", ()=> {

    beforeEach(function(){
        cy.session('Login Session', () => { 
            cy.loginActi();

        })
 })


   /* beforeEach(function(){
        cy.loginActi();
        cy.visit("https://demo.actitime.com/login.do");


    }) */

     
    it("Login1",() => {
      cy.visit('https://demo.actitime.com/user/submit_tt.do');
       cy.get('.switcherBackground').should('be.visible')


    })
    it("Login2",() => {
        cy.visit('https://demo.actitime.com/user/submit_tt.do');
        cy.get('.content users').should('be.visible')
 
 
     })
})        
         
     
   
 