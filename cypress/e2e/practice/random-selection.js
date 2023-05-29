describe('Cypress.io tests', function() {
    it('Open cypress.io page', function() {
      var cypressPage = 'https://www.testandquiz.com/selenium/testing.html';
      
    cy.visit(cypressPage);
       // Get the array of options
       cy.xpath('//*[@id="testingDropdown"]//option').then(($elements) => {
      const randomOption = Math.floor(Math.random() * $elements.length);
      // select option from drop down
      cy.xpath('//*[@id="testingDropdown"]').select(`${$elements[randomOption].innerText}`);
      cy.log(`random option selected is ${$elements[randomOption].innerText}}`);
    })
    })
})    