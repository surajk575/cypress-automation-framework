/// <reference types="Cypress" />
import HomePage_PO from "../../support/pageObjects/webdriver-uni/Homepage_PO";
import Contact_Us_PO from "../../support/pageObjects/webdriver-uni/Contact_Us_PO";

describe("Test Contact Us from via WebdriverUni", () =>{
    const homepage_PO = new HomePage_PO();
    const contact_Us_PO = new Contact_Us_PO();
    before(function(){
        cy.fixture('example').then(function(data){
            //this.data=data;
            globalThis.data=data;
        })
    })
    beforeEach(()=>{
      //  cy.visit(Cypress.env("webdriveruni_homepage") + "/Contact-Us/contactus.html") 
      homepage_PO.visitHomepage();
      homepage_PO.clickOn_ContactUs_Button(); 
    })
    it("Should be able to submit a successful submission via contact us form", () => {
    
       // cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
     
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.title().should('include', 'WebDriver | Contact Us')
        cy.url().should('include', 'contactus')
        //cy.pause();
        cy.wait(3000);
        contact_Us_PO.ContactForm_Submission(Cypress.env("first_name"), data.last_name, data.email, "Hello World", 'h1', 'Thank You for your Message!');
    });

    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
       if(Cypress.isBrowser('firefox')){

       }
       else{
        contact_Us_PO.ContactForm_Submission(data.first_name, data.last_name, " ", "Hello World", 'body', 'Error: Invalid email address')
       }
    });

})