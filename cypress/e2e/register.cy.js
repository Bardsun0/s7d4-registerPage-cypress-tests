import { errorMessages } from "../../src/components/Register";

describe("Register Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });
  describe("Error Messages", () => {
    it("name input throws error for 2 chars", () => {
      // Arrange
      //cy.visit("http://localhost:5173/");
      //Act
      cy.get("[data-cy='ad-input']").type("oz");
      //Assert
      cy.contains(errorMessages.ad);
    });
    it("Surname input throws error for 2 chars", () => {
      // Arrange
      //cy.visit("http://localhost:5173/");
      //Act
      cy.get("[data-cy='soyad-input']").type("gu");
      //Assert
      cy.contains(errorMessages.soyad);
    });
    it("Email input throws error for ozan@wit.", () => {
      // Arrange
      //cy.visit("http://localhost:5173/");
      //Act
      cy.get("[data-cy='email-input']").type("ozan@wit.");
      //Assert
      cy.contains(errorMessages.email);
    });
    it("Password input throws error for ozan@wit.", () => {
      // Arrange
      //cy.visit("http://localhost:5173/");
      //Act
      cy.get("[data-cy='password-input']").type("1234");
      //Assert
      cy.contains(errorMessages.password);
    });
    it("Button is disabled for unvalidated inputs.", () => {
      // Arrange
      //cy.visit("http://localhost:5173/");
      //Act
      cy.get("[data-cy='password-input']").type("1234");
      //Assert
      cy.get("[data-cy='submit-button']").should("be.disabled");
    });
  });
  describe("Form input validated", () => {
    it("button enabled for validated inputs", () => {
      // Arrange
      //cy.visit("http://localhost:5173/");
      //Act
      cy.get("[data-cy='ad-input']").type("Ozan");
      cy.get("[data-cy='soyad-input']").type("Güneş");
      cy.get("[data-cy='email-input']").type("ozan@wit.com.tr");
      cy.get("[data-cy='password-input']").type("1234Aa**");
      //Assert
      cy.get("[data-cy='submit-button']").should("not.be.disabled");
    });
    it("submits form on validated inputs", () => {
      // Arrange
      //cy.visit("http://localhost:5173/");
      //Act
      cy.get("[data-cy='ad-input']").type("Ozan");
      cy.get("[data-cy='soyad-input']").type("Güneş");
      cy.get("[data-cy='email-input']").type("ozan@wit.com.tr");
      cy.get("[data-cy='password-input']").type("1234Aa**");
      cy.get("[data-cy='submit-button']").click();
      //Assert
      cy.get("[data-cy='response-message']").should("be.visible");
    });
  });
});
