@UITest
Feature: Verify Product Dropdown and Newsletter Signup on Amphora.net

    Background: User is Navigating
	   Given I am navigating to the Amphora homepage

    Scenario: Verify Product Dropdown Functionality
        When I click on product Dropdown
        Then I click on each product and there respective product page should be displayed

    Scenario: Verify Newsletter SignUp Functionality
        When I Signup for the Newsletter under the Resources Dropdown
        Then I Should see a 'Thank you for Signing up for our newsletter' message
        
    

       
        