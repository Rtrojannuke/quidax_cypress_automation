class DemoSelenium
{

   noThanksOnPopUpModal()
   {
      return cy.get('.at-cm-no-button')
   }
   
   inputFormstab()
   {
      return cy.get(':nth-child(1) > :nth-child(1) > .dropdown-toggle')
   }

   singleInputBox()
   {
      return cy.get('#user-message')
   }

   inputBoxA()
   {
      return cy.get('#value1') 
   }

   inputBoxB()
   {
      return cy.get('#value2') 
   }

   showMessageBtn()
   {
      return cy.get('div.container-fluid.text-center:nth-child(2) div.row div.col-md-6.text-left:nth-child(2) div.panel.panel-default:nth-child(4) div.panel-body form:nth-child(3) > button.btn.btn-primary')
   }

   showTotal()
   {
      return cy.get('div.container-fluid.text-center:nth-child(2) div.row div.col-md-6.text-left:nth-child(2) div.panel.panel-default:nth-child(5) div.panel-body form:nth-child(3) > button.btn.btn-primary:nth-child(3)')
   }

   textInputDsiplay()
   {
      return cy.get('#display') 
   }

   multipleTextInputDsiplay()
   {
      return cy.get('#displayvalue') 
   }
  
   selectCheckBoxDemo()
   {
      return cy.get('.open > .dropdown-menu > :nth-child(2) > a')
   }

   option1Checkbox()
   {
      return cy.get(':nth-child(3) > label > .cb1-element')
   }

   option2Checkbox()
   {
      return cy.get(':nth-child(4) > label > .cb1-element')
   }

   option3Checkbox()
   {
      return cy.get(':nth-child(5) > label > .cb1-element')
   }

   option4Checkbox()
   {
      return cy.get(':nth-child(6) > label > .cb1-element')
   }

   checkButton()
   {
      return cy.get('#check1')
   }

   autoClosableSuccessMessage()
   {
      return cy.get('#autoclosable-btn-success')
   }

   normalSuccessMessage()
   {
      return cy.get('#normal-btn-success')
   }

   autoClosableWarningMessage()
   {
      return cy.get('#autoclosable-btn-warning')
   }

   normalWarningMessage()
   {
      return cy.get('#normal-btn-warning')
   }

   autoClosableDangerMessage()
   {
      return cy.get('#autoclosable-btn-danger')
   }

   normalDangerMessage()
   {
      return cy.get('#normal-btn-danger')
   }

   autoClosableInfoMessage()
   {
      return cy.get('#autoclosable-btn-info')
   }

   normalInfoMessage()
   {
      return cy.get('#normal-btn-info')
   }


   javaScriptAlert()
   {
      return cy.get('.open > .dropdown-menu > :nth-child(5) > a')
   }

   jsAlertBox()
   {
      return cy.get(':nth-child(4) > .panel-body > .btn')
   }

   listBoxesTab()
   {
      return cy.get('.navbar-right > :nth-child(3) > .dropdown-toggle')
   }

   selectBootsrap()
   {
      return cy.get('.open > .dropdown-menu > :nth-child(1) > a')
   }

   rightBoxData()
   {
      return cy.get('*[class^="list-group-item"]')
   }

   leftDataList()
   {
      return cy.get('.list-left > .well > .list-group > ')
   }

   rightDataList()
   {
      return cy.get('.list-right > .well > .list-group > ')
   }

   selectItem()
   {
      return cy.get('.list-right > .well > .list-group > :nth-child(1)')
   }
   
   moveToRight()
   {
      return cy.get('.move-right')
   }

   moveToLeft()
   {
      return cy.get('.move-left')
   }

   verifySelectedItem()
   {
      return cy.get('.list-left > .well > .list-group > :nth-child(6)')
   }
   
   

}

export default DemoSelenium;
