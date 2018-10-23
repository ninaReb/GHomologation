class LoginPage {
    visit() {
      cy.visit('login');
    }
  
    getEmailError() {
      return cy.get('#emailErrorMessage');
    }
  
    getPasswordError() {
      return cy.get('#passwordErrorMessage');
    }
  
    fillEmail(value) {
      const field = cy.get('#email', {timeout: 15000});
      field.clear();
      field.type(value);
      
      return this;
    }
  
    fillPassword(value) {
      const field = cy.get('#password', {timeout: 15000});
      field.clear();
      field.type(value);
      
      return this;
    }
    
    submit() {
      const button = cy.get('#btnLogin', {timeout: 15000});
      button.click();
    }
  }
  
  export default LoginPage;