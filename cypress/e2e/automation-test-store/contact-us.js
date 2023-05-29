/// <reference types="Cypress" />
/// <reference types="@cypress/Xpath" />

describe("Test Contact Us from via Automation Test Stores", () =>{
    it.only("Should be able to submit a successful submission via contact us form", () => {
        //cypress code
       
        cy.visit("http://www.automationteststore.com/")
        cy.get('.info_links_footer > :nth-child(5) > a').click().then(function(linkText){
            cy.log("Text is: "+ linkText.text())
        
        })
       // cy.xpath("//a[contains(@href,'contact')]").click()
       /* cy.visit("https://automationteststore.com/index.php?rt=content/contact");
        cy.get('[name="first_name"]').click().type("Suraj");
        cy.xpath("//input[@name='first_name']").type("sbk")
        cy.get('#ContactUsFrm_email').type("abc@gmail.com")
        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email')
        cy.get('#ContactUsFrm_enquiry').type("Do you provide discount?")
        cy.get('.col-md-6 > .btn').click();
        cy.get('.mb40 > :nth-child(3)').should('have.text','Your enquiry has been successfully sent to the store owner!')
        cy.log("test has completed!")  */
        
    });

    it("Should be able to submit a successful submission via contact us form", () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get("a[href$='contact']").click().then(function(linkText){
            cy.log("Clicked on link using text: " + linkText.text())
        })
        //cy.xpath("//a[contains(@href, 'contact')]").click();
        cy.get('#ContactUsFrm_first_name').type("Joe");
        cy.get('#ContactUsFrm_email').type("joe_blogs123@gmail.com");
        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email')
        cy.get('#ContactUsFrm_enquiry').type("Do you provide additional discount on bulk orders?")
        cy.get("button[title='Submit']").click();
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!')
        cy.log("Test has completed!");
    });



})
