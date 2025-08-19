import userData from '../fixtures/userData.json'

describe('Orange HRM Tests', () => {

  const SelectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']"
  }

  it('Login with Success', () => {
    cy.visit('/auth/login')
    cy.get(SelectorsList.usernameField).type(userData.valid.username)
    cy.get(SelectorsList.passwordField).type(userData.valid.password)
    cy.get(SelectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(SelectorsList.sectionTitleTopBar).contains('Dashboard')
  })
    it('Login with Fail', () => {
    cy.visit('/auth/login')
    cy.get(SelectorsList.usernameField).type(userData.invalid.username)
    cy.get(SelectorsList.passwordField).type(userData.invalid.password)
    cy.get(SelectorsList.loginButton).click()
    cy.get(SelectorsList.wrongCredentialAlert).contains('Invalid credentials')
  })
})   