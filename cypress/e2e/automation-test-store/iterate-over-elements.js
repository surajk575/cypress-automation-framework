/// <reference types="Cypress" />


describe("Iterate Over Elements", () =>{
    
    it("Log information for all Hair care products", () => {
        // Lecture 90 and 91 and 92
        cy.visit("https://automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()
        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            cy.log("Index : " + index + " : "+($el).text())
          })
    })    
    
    it("Add specific product to basket", () => {
        cy.visit("https://automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()  
        
        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            if($el.text().includes('Curls to straight Shampoo')){
                cy.wrap($el).click()
            }
          })
    })

})   