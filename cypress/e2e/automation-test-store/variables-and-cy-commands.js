/// <reference types="Cypress" />


describe("Verifying variables, cypress commands and jquery commands,", () =>{
    
    it("Navigating the specific product pages", () => {
        // Lecture 84 and 85
        //the following will pass
        /* cy.visit("https://automationteststore.com/")
        const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup")
        makeupLink.click()
        const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare")
        skincareLink.click() */

        //the following will fail
        /* cy.visit("https://automationteststore.com/")
        const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup")
        const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare")
        makeupLink.click()
        skincareLink.click()  */

         //Lecture 86
        //Recommended Approach 
        cy.visit("https://automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains("Makeup").click()
        cy.get("a[href*='product/category&path=']").contains("Skincare").click() 

    })

    it("Navigating the specific product pages", () => {
        cy.visit("https://automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains("Makeup").click()
        //Lecture 87
        //Following code will fail
        //const header = cy.get("h1 .maintext")
        //cy.log(header.text())

        cy.get("h1 .maintext").then(($headerText) => {
            const headerText = $headerText.text()
            cy.log("Found header text: " + headerText)
            readyException(headerText).is.eq('Makeup')
        })
    })    
    //Lecture 88 and 89
    it.only("Validate properties of the Contact Us page", () => {
            
        cy.visit("https://automationteststore.com/index.php?rt=content/contact")

         //Uses cypress commands and chaining
        cy.contains('#ContactUsFrm','Contact Us Form').find('#field_11').should('contain','First name:')

        //JQuery Approach
        cy.contains('#ContactUsFrm','Contact Us Form').then(text =>{
                const firstNameText = text.find('#field_11').text()
                expect(firstNameText).to.contain('First name:')
         })

        //Embedded commands (Closure)
        cy.get('#field_11').then(fnText => {
            cy.log(fnText.text())
            cy.log(fnText)
        })
            
    })

    



})   