class LoginPage {
    visit() {
      cy.visit('https://ccstore-stage-zb5a.oracleoutsourcing.com/login');
    }
  
    getEmailError() {
      return cy.get('#emailErrorMessage');
    }
  
    getPasswordError() {
      return cy.get('#passwordErrorMessage');
    }
  
    fillEmail(value) {
      const field = cy.get('#email');
      field.clear();
      field.type(value);
      
      return this;
    }
  
    fillPassword(value) {
      const field = cy.get('#password');
      field.clear();
      field.type(value);
      
      return this;
    }
    
    submit() {
      const button = cy.get('#btnLogin');
      button.click();
    }
  }
  
  export default LoginPage;