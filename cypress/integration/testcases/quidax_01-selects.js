import DemoSelenium from '../pageObjects/demoPage'

describe('Automated tests for input forms', function () {

    const inputs = new DemoSelenium();

    it('Single Inputs Validation', function () {

        cy.visit('/basic-first-form-demo.html');

        //Validating all check boxes are unchecked upon page load
        inputs.singleInputBox().type("food");
        inputs.showMessageBtn().click();
        inputs.textInputDsiplay().should('have.text', 'food');
    });


    it("Multiple Inputs Numerical Validation", function () {


        inputs.inputBoxA().type(2);
        inputs.inputBoxB().type(5);
        inputs.showTotal().click();
        // Validating numeric value
        inputs.multipleTextInputDsiplay().should('have.text', 2+5);

    })


})