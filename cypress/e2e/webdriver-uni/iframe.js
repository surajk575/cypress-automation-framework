/// <reference types="Cypress" />
describe("Handling Iframe and Modals", () => {
    // lecture 117 and 118
    it("Handle WebdriverUni iframe and modal", () => {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#iframe').invoke('removeAttr', 'target').click({force:true})

        cy.get('#frame').then($iframe =>{
            const body = $iframe.contents().find('body')
            cy.wrap(body).as('iframe')
        })

        cy.get('@iframe').find('#button-find-out-more').click({force:true})

        cy.get('@iframe').find('#myModal').as('modal')

        cy.get('@modal').should(($expectedText)=> {
            const text = $expectedText.text()
            expect(text).to.include('Welcome to webdriveruniversity.com we sell a wide range of electrical goods ')
        })
        cy.get('@modal').contains('Close').click({force:true})
        
        
    })
})