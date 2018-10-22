import HomePage from '../integration/Pages/HomePage.js';

describe('Gimba Login Test Page Object', () => {
  it('should sign in with correct credentials', () => {
    const home = new HomePage();
    home.visit();
    cy.wait(10000)
    
    const login = home.goToSignIn();
    cy.wait(10000)
    
    login
      .fillEmail('ppaulomariopires@andressamelo.com.br')
      .fillPassword('Admin123')
      .submit();

    home.getLogoutButton().should('be.visible');
  });
});