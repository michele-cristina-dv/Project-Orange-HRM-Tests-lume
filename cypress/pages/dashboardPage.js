class DashboardPage {
    constructor() {
        this.SelectorsList = {
            dashboardGrid: ".oxd-grid-3", 
            myInfoButton: "a[href='/web/index.php/pim/viewMyDetails']",
            firstNameField: "input[name='firstName']",
            lastNameField: "input[name='lastName']",
            genericField: "input.oxd-input",
            dateCloseButton: ".oxd-date-input-link",
            submitButton: "button[type='submit']",
            bloodSelec: ".oxd-select-text",
            testFiel: "input[placeholder='Type here ...']",
            submitbuttonSecond: "button[type='submit']"
        };
    }

    verifyDashboardPage() {
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index');
        cy.get(this.SelectorsList.dashboardGrid).should('be.visible');
    }

    updatePersonalDetails() {
        cy.get(this.SelectorsList.myInfoButton).click();
        cy.get(this.SelectorsList.firstNameField).clear().type('Name');
        cy.get(this.SelectorsList.lastNameField).clear().type('Last Name');
        cy.get(this.SelectorsList.genericField).eq(3).clear().type('work');
        cy.get(this.SelectorsList.genericField).eq(4).clear().type('Other');
        cy.get(this.SelectorsList.genericField).eq(5).clear().type('LicenseNumber');
        cy.get(this.SelectorsList.genericField).eq(7).clear().type('1990-10-10');
        cy.get(this.SelectorsList.dateCloseButton).eq(0).click();
        cy.get(this.SelectorsList.submitButton).eq(0).click();
    }

   updateAdditionalDetails() {
  cy.contains('label', 'Blood Type', { timeout: 10000 }).then($label => {
    const $ancestors = $label.parents();
    let $container = null;

    for (let i = 0; i < $ancestors.length; i++) {
      const $a = Cypress.$($ancestors[i]);
      const hasSave = $a.find('button').filter((j, b) => {
        return b && b.innerText && b.innerText.trim().toLowerCase() === 'save';
      }).length > 0;

      if (hasSave) { 
        $container = $a;
        break;
      }
    }

    if ($container) {
      cy.wrap($container).within(() => {
        cy.get('.oxd-select-text').first().click({ force: true });
        cy.get('.oxd-select-dropdown', { timeout: 10000 }).should('be.visible').contains('B+').click({ force: true });
        cy.get('input, textarea').first().should('be.visible').clear().type('Test');
        cy.contains('button', 'Save').first().click();
      });
    } else {
      cy.wrap($label).closest('div').find('.oxd-select-text').first().click({ force: true });
      cy.get('.oxd-select-dropdown', { timeout: 10000 }).should('be.visible').contains('B+').click({ force: true });
      cy.wrap($label).closest('div').find('input, textarea').first().should('be.visible').clear().type('Test');
      cy.contains('button', 'Save').filter(':visible').first().click();
    }
  });
}


    }


export default new DashboardPage();
