/// <reference types="Cypress" />


describe("Alias and invikes", () =>{
    
    it("Validate a specific Hair care product", () => {
        // Lecture 94
        cy.visit("https://automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()
        cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('productThumbnail')
        cy.get('@productThumbnail').its('length').should('be.gt', 5)
        cy.get('@productThumbnail').should('include','Seaweed Conditioner')      
    })   
    
    it("Validate product thumbnail", () => {
        // Lecture 94
        cy.visit("https://automationteststore.com/")
        cy.get(".thumbnail").as('allThumbnail')
        cy.get('@allThumbnail').should('have.length', 16)
        cy.get('@allThumbnail').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart')   
    })  

    it.only("Calculate total of nornal and sale products1", () => {
        // Lecture 97
        cy.visit("https://automationteststore.com/")
        /*
        cy.get(".thumbnail").as('allThumbnail')
        cy.get('@allThumbnail').find('.oneprice').each(($el, index, $list) => {
            cy.log($el.text())
            })
            */
           // Lecture 98 and 99
        cy.get(".thumbnail").find('.oneprice').invoke('text').as('itemPrice')
        cy.get(".thumbnail").find('.pricenew').invoke('text').as('saleItemPrice')    

        var itemsTotal = 0;
        cy.get('@itemPrice').then($linkText => {
            var itemPriceTotal = 0;
            var itemPrice = $linkText.split('$');
            var i;
            for(i = 0; i < itemPrice.length; i++){
                
                cy.log(itemPrice[i])
                itemPriceTotal += Number(itemPrice[i])
            }
            itemsTotal += itemPriceTotal;
            cy.log("Non sale price item total : "+ itemPriceTotal)

        })  
        // Lecture 100
        cy.get('@saleItemPrice').then($linkText => {
            var saleItemsPrice = 0;
            var saleItemPrice = $linkText.split('$')
            var i;
            for(i = 0; i < saleItemPrice.length; i++){
                
                cy.log(saleItemPrice[i])
                saleItemsPrice += Number(saleItemPrice[i])                
            }
            itemsTotal += saleItemsPrice;
            cy.log("Sale price item total : " + saleItemsPrice);           
        }) 
        .then(()=>{
            cy.log("The total price of all products : "+ itemsTotal)
            expect(itemsTotal).to.equal(656.50)

        }) 
         
    });
    
   
});   