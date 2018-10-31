class LoginPage {
    visit() {
      cy.visit('login');
    }
  
    getEmailError() {
      return cy.get('#emailErrorMessage', {timeout: 10000});
    }
  
    getPasswordError() {
      return cy.get('#passwordErrorMessage', {timeout: 10000});
    }
  
    fillEmail(value) {
      const field = cy.get('[test-id="email"]', {timeout: 15000});
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
      button.click({force:true});
    }
  }
  
  export default LoginPage;