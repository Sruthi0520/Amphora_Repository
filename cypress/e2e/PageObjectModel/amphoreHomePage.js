class Homepage {
  constructor() {
    this.email = ".formserv-email-field > .fserv-input-text";
    this.firstname = ":nth-child(2) > .fserv-input-text";
    this.lastname = ":nth-child(3) > .fserv-input-text";
    this.propertydropdown = "//*[@id='menu-item-32']";
    this.resourcedropdown = "(//a[text()='Resources'])[1]";
    this.submit = ".fserv-button-submit";
  }

  Email(useremail) {
    return cy.get(this.email).type(useremail);
  }

  firstName(userfirstname) {
    return cy.get(this.firstname).type(userfirstname);
  }

  lastName(userlastname) {
    return cy.get(this.lastname).type(userlastname);
  }

  productDropDown() {
    return cy.xpath(this.propertydropdown);
  }

  resourceDropDown() {
    return cy.xpath(this.resourcedropdown);
  }

  navigateBackToHomepage() {
    return cy.go("back");
  }

  submitbtn() {
    return cy.get(this.submit).click();
  }

  selectproduct(locator, title, headerloc, header) {
    cy.get(locator).click({ force: true });
    cy.title().should("include", title);
    cy.get(headerloc)
      .invoke("text")
      .then((text) => {
        expect(text).to.include(header);
      });
  }
}

const amphorehomepage = new Homepage();

export default amphorehomepage;
