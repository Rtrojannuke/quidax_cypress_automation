import DemoSelenium from '../pageObjects/demoPage'

describe('Automation test for alerts and modals', function () {

    const alertModals = new DemoSelenium();

    it('Checks alerts and modals', function () {

        cy.visit('/bootstrap-alert-messages-demo.html')

        alertModals.autoClosableSuccessMessage().should('be.visible');
        alertModals.normalSuccessMessage().should('be.visible');
        alertModals.autoClosableWarningMessage().should('be.visible');
        alertModals.normalWarningMessage().should('be.visible');
        alertModals.autoClosableDangerMessage().should('be.visible');
        alertModals.normalDangerMessage().should('be.visible');
        alertModals.autoClosableInfoMessage().should('be.visible');
        alertModals.normalInfoMessage().should('be.visible');

        //Validting the response of the Modals
        alertModals.autoClosableSuccessMessage().click();
        alertModals.normalSuccessMessage().click();
        alertModals.autoClosableWarningMessage().click();
        alertModals.normalWarningMessage().click();
        alertModals.autoClosableDangerMessage().click();
        alertModals.normalDangerMessage().click();
        alertModals.autoClosableInfoMessage().click();
        alertModals.normalInfoMessage().click();

    
    })
    


})