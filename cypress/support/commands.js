// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('Click_button', (Selector) => {
    cy.get(Selector).click({force:true});
  })


  //Actitime

  Cypress.Commands.add('loginActi',() => {
    cy.visit("https://demo.actitime.com/login.do")
        cy.get('#username').type("admin")
        cy.get(':nth-child(5) > :nth-child(1) > .textFieldsArea > .textFieldsTable > tbody > :nth-child(2) > td > .textField').type("manager")
        cy.get('#keepLoggedInCheckBox').click()
        cy.get('#loginButton > div').click()
        cy.url().should('contain', '/user/submit_tt.do')
        cy.get('#enterTTMainContent').should('be.visible')
  })

  //canvas

  Cypress.Commands.add('canvas_click', (x,y) => {
    
    cy.get('canvas[class="MyME0d widget-scene-canvas"]').then($canvas =>{ 
      cy.wait(10000)
      cy.get('#widget-zoom-in').click()
    cy.wrap($canvas)
      .scrollIntoView()
      .click(x, y);
    })
  })

  // dropdown
  Cypress.Commands.add('drop_click', (selector, text) => {
    cy.get(selector).select(text)
    
    })

    //random selectop
    Cypress.Commands.add('random_select', (selector, optionsSelector) => {
      cy.Click_button(selector)
      cy.get(optionsSelector).then(($elements) => {
        const randomOption = Math.floor(Math.random() * $elements.length);
        cy.Click_button($elements[randomOption]) 
      })
    })
