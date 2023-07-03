
describe('Cypress.io tests', function() {
    it('Open cypress.io page', function() {
     
     cy.visit("https://demo.actitime.com/login.do")
        cy.get('#username').type("admin")
        cy.get(':nth-child(5) > :nth-child(1) > .textFieldsArea > .textFieldsTable > tbody > :nth-child(2) > td > .textField').type("manager")
        cy.Click_button('#keepLoggedInCheckBox')
        cy.Click_button('#loginButton > div')
        cy.get('#enterTTMainContent').should('be.visible')

      cy.random_select('.userSelectorButton','.x-combo-list-item')
    })

    it.skip('Random selection from dropdown', function() {
     
      cy.get('#control-nationality').click()  // open the dropdown

    cy.get('id^="option-nationality-"]')    // all elements with id starting "option-nationality"
     .then($options => {
    const count = $options.length
    const randomIndex = Math.floor(Math.random() * count)
    const randomOption = $options.eq(randomIndex) 
    cy.wrap(randomOption).click()
  })

     })
}) 