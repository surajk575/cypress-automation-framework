/// <reference types="Cypress" />

describe("CanvasGoogle", () => {
 
    beforeEach(() => {
      cy.visit("https://www.google.com/maps/@18.5259151,73.942271,14.48z?entry=ttu");
      
    });
   
    it('should click on a map', () => {

        cy.canvas_click(700,600)

    });

})  