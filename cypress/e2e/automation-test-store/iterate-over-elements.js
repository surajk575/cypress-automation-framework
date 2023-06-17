/// <reference types="Cypress" />


describe("Iterate Over Elements", () =>{

    beforeEach(function(){
        cy.visit("https://automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()
    })
    
    it("Log information for all Hair care products", () => {
        // Lecture 90 and 91 and 92
        
        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            cy.log("Index : " + index + " : "+($el).text())
          })
    })    
    
    it("Add specific product to basket", () => {

        /*cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            if($el.text().includes('Curls to straight Shampoo')){
                cy.wrap($el).click()
            }
          })*/
          // Lecture 177 to 180
        cy.selectProduct('Curls to straight Shampoo');  
    })
    it("Add another specific product to basket", () => { 
        cy.selectProduct('Seaweed Conditioner');  
    })

    it("Add another new specific product to basket", () => { 
        cy.selectProduct('Eau Parfumee au The Vert Shampoo');  
    })

})   