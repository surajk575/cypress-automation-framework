/// <reference types="Cypress" />

describe("Random word", () => {
 
    it.only('Create random word', () => {

        cy.visit("https://www.google.com")
        const uuid = () => Cypress._.random(0, 1e6)
        const id = uuid()
        const testname = `Farm${id}`
        cy.get("textarea[name='q']").type(testname);

    });

    it('Create random word2', () => {

      cy.visit("https://www.google.com")
      
      cy.get("textarea[name='q']").type(userID_Alpha())
        function userID_Alpha() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        for (var i = 0; i < 10; i++)
           text += possible.charAt(Math.floor(Math.random() * possible.length));

          return text;
  }

  });




})  