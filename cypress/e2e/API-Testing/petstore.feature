@apiTest
Feature: PetStore CRUD Operations

  Scenario: Create, Read, Update, and Delete a pet
    Given I create a new pet with the name 'chiku' and status 'available'
    Then I should be able to read the pet details
    When I update the pet name to "chiku Updated" and status to "sold"
    Then I delete the pet
 
