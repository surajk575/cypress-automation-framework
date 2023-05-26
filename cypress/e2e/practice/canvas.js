

describe("Canvas", () => {
 
    beforeEach(() => {
      cy.visit("https://kitchen.applitools.com/ingredients/canvas");
    });
   
    it('should click a button on  canvas', () => {
      //cy.viewport('iphone-x')
      cy.get('#burger_canvas').then($canvas =>{
        // Get dimension of the canvas
        const canvasWidth = $canvas.width();
        const canvasHeight = $canvas.height();

        // Divide in half since cursor will be at center of canvas
        const canvasCenterX = canvasWidth / 2;
        const canvasCenterY = canvasHeight / 2;

        // Determine the click position by dissecting the space where the button is
        // This helps allow the test to work responsively
        const buttonX = canvasCenterX + ((canvasCenterX/3)*2)
        const buttonY = canvasCenterY + ((canvasCenterY/3)*2)

        // Wrap the canvas with the Cypress API, scroll it into view, and click in the location!
      cy.wrap($canvas)
        .scrollIntoView()
        .click(buttonX, buttonY);

     /*   
      cy.eyeOpen({
        appName: 'The kitchen',
        testName: 'Canvas'
      })  
       cy.eyeCheckWindow();
      cy.eyeClose();  */

      })
        
    });

  })  