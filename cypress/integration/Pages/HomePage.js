import Header from '../Pages/Header.js';
import LoginPage from '../Pages/LoginPage.js';

class HomePage {
  constructor() {
    this.header = new Header();
  }
  
  visit() {
    cy.visit('https://ccstore-stage-zb5a.oracleoutsourcing.com/home');
  }

  getLogoutButton() {
    return cy.get('#btnLogout > .text-light-grey');
  }
  
  goToSignIn() {
    const link = this.header.getSignInLink();
    link.click();

    const login = new LoginPage();
    return login;
  }
}

export default HomePage;