import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'  
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'

describe('Orange HRM Tests', () => {

  it.only('User info Update with Success', () => {
    
    LoginPage.accessLoginPage();
    LoginPage.loginWithUser(userData.valid.username, userData.valid.password);
    DashboardPage.verifyDashboardPage(); 
    MenuPage.navigateToMyInfo();
    DashboardPage.updatePersonalDetails(); 
    DashboardPage.updateAdditionalDetails();
  })

  it('Login with Fail', () => {
    LoginPage.accessLoginPage();
    LoginPage.loginWithUser(userData.invalid.username, userData.invalid.password);
    cy.get("[role='alert']").contains('Invalid credentials');
  })
})
