/// <reference types="cypress" />
import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import amphorehomepage from "../PageObjectModel/amphoreHomePage";
import {
  symphony,
  Alchemy,
  varModule,
  tradeConfirMationmsg,
  frieghtManager,
  claimsManager,
  symphonyCredit,
  Header,
  Header2,
  newsletter,
  thankyoutext,
  closebtn,
} from "../Locators/homePageloc";

Given("I am navigating to the Amphora homepage", () => {
  // Navigating to the Amphora Homepage
  cy.visit("https://amphora.net/");
  cy.url().should("include", "amphora.net");

  // Click on Cookies button
  cy.xpath("//a[text()='Accept']").click();
  cy.wait(2000);
});

When("I click on product Dropdown", () => {
  // Mouseover on Product button
  amphorehomepage.productDropDown().trigger("mouseover");
});

Then(
  "I click on each product and there respective product page should be displayed",
  () => {
    cy.fixture("testdata.json").then((data) => {
      // Click on Symphony
      amphorehomepage.selectproduct(
        symphony,
        data.symphonytitle,
        Header,
        data.symphonyheader
      );

      // Navigate Back to Amphore Home Page
      amphorehomepage.navigateBackToHomepage();

      // Mouseover on Product button
      amphorehomepage.productDropDown().trigger("mouseover");

      //click on Alchemy and verify the page
      amphorehomepage.selectproduct(
        Alchemy,
        data.Alchemytile,
        Header,
        data.Alchemyheader
      );

      // Navigate Back to Amphore Home Page
      amphorehomepage.navigateBackToHomepage();

      // Mouseover on Product button
      amphorehomepage.productDropDown().trigger("mouseover");

      //click on Var Module and verify the page
      amphorehomepage.selectproduct(
        varModule,
        data.vaRModuletitle,
        Header,
        data.vaRModuleheader
      );

      // Navigate Back to Amphore Home Page
      amphorehomepage.navigateBackToHomepage();

      // Mouseover on Product button
      amphorehomepage.productDropDown().trigger("mouseover");

      //click on Trade confirmations manager and verify the page
      amphorehomepage.selectproduct(
        tradeConfirMationmsg,
        data.Tradeconfirmationsmanagertitle,
        Header,
        data.Tradeconfirmationsmanagerheader
      );

      // Navigate Back to Amphore Home Page
      amphorehomepage.navigateBackToHomepage();

      // Mouseover on Product button
      amphorehomepage.productDropDown().trigger("mouseover");

      //click on Freight manager and verify the page
      amphorehomepage.selectproduct(
        frieghtManager,
        data.Freightmanagertitle,
        Header,
        data.Freightmanagerheader
      );

      // Navigate Back to Amphore Home Page
      amphorehomepage.navigateBackToHomepage();

      // Mouseover on Product button
      amphorehomepage.productDropDown().trigger("mouseover");

      //click on Claims manager and verify the page
      amphorehomepage.selectproduct(
        claimsManager,
        data.Claimsmanagertitle,
        Header,
        data.Claimsmanagerheader
      );

      // Navigate Back to Amphore Home Page
      amphorehomepage.navigateBackToHomepage();

      // Mouseover on Product button
      amphorehomepage.productDropDown().trigger("mouseover");

      //click on Symphony Credit and verify the page
      amphorehomepage.selectproduct(
        symphonyCredit,
        data.SymphonyCredittitle,
        Header,
        data.SymphonyCreditheader
      );

      // Navigate Back to Amphore Home Page
      amphorehomepage.navigateBackToHomepage();
    });
  }
);

When("I Signup for the Newsletter under the Resources Dropdown", () => {
  cy.fixture("testdata.json").then((data) => {
    // Mouseover on Resources button
    amphorehomepage.resourceDropDown().trigger("mouseover");

    //click on Symphony Credit and verify the page
    amphorehomepage.selectproduct(
      newsletter,
      data.NewsletterSignuptitle,
      Header2,
      data.NewsletterSignupheader
    );

    // Click on Email and enter email
    amphorehomepage.Email(data.Email);

    // Click on First Name field and enter first name
    amphorehomepage.firstName(data.firstname);

    // Click on last Name field and enter last Name
    amphorehomepage.lastName(data.lastname);

    // Click on Submit Button
    amphorehomepage.submitbtn();

    // Click on close button
    cy.wait(2000);
    cy.contains("Close").dblclick({ force: true });
  });
});

Then("I Should see a 'Thank you for Signing up for our newsletter' message",() => {
    cy.fixture("testdata.json").then((data) => {

      // Verfy the Thank you message
      cy.get(thankyoutext)
        .invoke("text")
        .then((text) => {
          expect(text).to.include(data.ThankUMsg);
        });
        
    });
  });
