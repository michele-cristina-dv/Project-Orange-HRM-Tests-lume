import userData from '../fixtures/userData.json'

describe('Orange HRM Tests', () => {

  const SelectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']",
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']",

  }

  it.only(' User info Update with Success', () => {

    cy.visit('/auth/login')
    cy.get(SelectorsList.usernameField).type(userData.valid.username)
    cy.get(SelectorsList.passwordField).type(userData.valid.password)
    cy.get(SelectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(SelectorsList.dashboardGrid)
    cy.get(SelectorsList.myInfoButton).click()
    cy.get(SelectorsList.firstNameField).type(' first Name teste')
    cy.get(SelectorsList.lastNameField).type(' last Name teste')
    cy.get(SelectorsList.genericField).eq(3).clear().type('work')
    cy.get(SelectorsList.genericField).eq(4).clear().type('Other')
    cy.get(SelectorsList.genericField).eq(5).clear().type('LicenseNumber')
    cy.get(SelectorsList.genericField).eq(7).clear().type('1990-10-10')
    cy.get(SelectorsList.dateCloseButton).click()
    cy.get(SelectorsList.submitButton).eq(0).click()
    cy.get('body').should('contain', 'successfully Updated')
    

  })
    it('Login with Fail', () => {
    cy.visit('/auth/login')
    cy.get(SelectorsList.usernameField).type(userData.invalid.username)
    cy.get(SelectorsList.passwordField).type(userData.invalid.password)
    cy.get(SelectorsList.loginButton).click()
    cy.get(SelectorsList.wrongCredentialAlert).contains('Invalid credentials')
  })
})   