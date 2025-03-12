/// <reference types="cypress" />
import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

let petId;

Given("I create a new pet with the name {string} and status {string}",(name, status) => {
    const newPet = {
      id: Math.floor(Math.random() * 10000),
      name: name,
      photoUrls: ["https://example.com/photo.jpg"],
      status: status,
    };

    cy.request({
      method: "POST",
      url: "https://petstore.swagger.io/v2/pet",
      body: newPet,
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eq(name);
      expect(response.body.status).to.eq(status);
      petId = response.body.id;
      cy.log(petId);
    });
  }
);

Then("I should be able to read the pet details", () => {
  cy.request({
    method: "GET",
    url: `https://petstore.swagger.io/v2/pet/findByStatus?status=available`,
  }).then((response) => {
    expect(response.status).to.eq(200);
    // expect(response.body.id).to.eq(petId);
  });
});

When("I update the pet name to {string} and status to {string}",(name, status) => {
    const updatedPet = {
      id: petId,
      name: name,
      photoUrls: ["https://example.com/photo.jpg"],
      status: status,
    };

    cy.request({
      method: "PUT",
      url: "https://petstore.swagger.io/v2/pet",
      body: updatedPet,
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eq(name);
      expect(response.body.status).to.eq(status);
    });
  }
);

Then("I delete the pet", () => {
  let id = petId.toString();
  cy.request({
    method: "DELETE",
    url: `https://petstore.swagger.io/v2/pet/${petId}`,
  }).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body.message).to.eq(id);
  });
});
