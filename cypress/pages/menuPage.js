class MenuPage {
    constructor() {
        this.SelectorsList = {
            dashboardMenu: "a[href='/web/index.php/dashboard/index']",
            myInfoMenu: "a[href='/web/index.php/pim/viewMyDetails']",
            adminMenu: "a[href='/web/index.php/admin/viewAdminModule']",
            leaveMenu: "a[href='/web/index.php/leave/viewLeaveModule']",
            timeMenu: "a[href='/web/index.php/time/viewTimeModule']",
            recruitmentMenu: "a[href='/web/index.php/recruitment/viewRecruitmentModule']"
        };
    }

    navigateToDashboard() {
        cy.get(this.SelectorsList.dashboardMenu).click();
        cy.location('pathname').should('include', '/dashboard/index');
    }

    navigateToMyInfo() {
        cy.get(this.SelectorsList.myInfoMenu).click();
        cy.location('pathname').should('include', '/pim/viewPersonalDetails');
    }

    navigateToAdmin() {
        cy.get(this.SelectorsList.adminMenu).click();
        cy.location('pathname').should('include', '/admin/viewAdminModule');
    }

    navigateToLeave() {
        cy.get(this.SelectorsList.leaveMenu).click();
        cy.location('pathname').should('include', '/leave/viewLeaveModule');
    }

    navigateToTime() {
        cy.get(this.SelectorsList.timeMenu).click();
        cy.location('pathname').should('include', '/time/viewTimeModule');
    }

    navigateToRecruitment() {
        cy.get(this.SelectorsList.recruitmentMenu).click();
        cy.location('pathname').should('include', '/recruitment/viewRecruitmentModule');
    }
}

export default new MenuPage();
