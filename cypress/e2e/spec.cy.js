/*
describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})
*/


describe("Calculator Tests", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    //Addition for making sure 5 + 3 = 8:
    it("Addition Test: 5 + 3 = 8", () => {
       cy.get("#btn-5").click();
       cy.get("#btn-add").click();
       cy.get("#btn-3").click();
       cy.get("#btn-equals").click();
       cy.get("#display").should("have.value", "8");
    });
    
    //Subtraction for making sure 10 - 4 = 6:
    it("Subtraction Test: 10 - 4 = 6", () => {
       cy.get("#btn-1").click();
       cy.get("#btn-0").click();
       cy.get("#btn-subtract").click();
       cy.get("#btn-4").click();
       cy.get("#btn-equals").click();
       cy.get("#display").should("have.value", "6");
    });

    //Multiplication for making sure 6 * 7 = 42:
    it("Multiplication Test: 6 * 7 = 42", () => {
       cy.get("#btn-6").click();
       cy.get("#btn-multiply").click();
       cy.get("#btn-7").click();
       cy.get("#btn-equals").click();
       cy.get("#display").should("have.value", "42");
    });

    //Division for making sure 15 / 3 = 5:
    it("Division Test: 15 / 3 = 5", () => {
       cy.get("#btn-1").click();
       cy.get("#btn-5").click();
       cy.get("#btn-divide").click();
       cy.get("#btn-3").click();
       cy.get("#btn-equals").click();
       cy.get("#display").should("have.value", "5");
    });
});