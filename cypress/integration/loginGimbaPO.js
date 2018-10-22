import HomePage from '../integration/Pages/HomePage.js';

describe('Gimba Login Test Page Object', () => {
  it('should sign in with correct credentials', () => {
    const home = new HomePage();
    home.visit();
    cy.wait(10000)
    
    const login = home.goToSignIn();
    cy.wait(15000)
    
    login
      .fillEmail('ppaulomariopires@andressamelo.com.br')
      .fillPassword('Admin123')
      .submit();
      
    home.getLogoutButton().should('be.visible');
  });

  it('should not sign in without email', () => {
    const home = new HomePage();
    home.visit();
    cy.wait(10000)
    
    const login = home.goToSignIn();
    cy.wait(10000)
    
    login
      .fillPassword('Admin123')
      .submit();

    login.getEmailError().should('be.visible');
  });

  it('should not sign in without password', () => {
    const home = new HomePage();
    home.visit();
    cy.wait(10000)
    
    const login = home.goToSignIn();
    cy.wait(10000)
    
    login
      .fillEmail('ppaulomariopires@andressamelo.com.br')
      .submit();

    login.getPasswordError().should('be.visible');
  });

  it('should not sign in without email and password', () => {
    const home = new HomePage();
    home.visit();
    cy.wait(10000)
    
    const login = home.goToSignIn();
    cy.wait(10000)
    
    login
      .submit();

    login.getEmailError().should('be.visible');
    login.getPasswordError().should('be.visible');
  });

  it('should sign in without correct credentials', () => {
    const home = new HomePage();
    home.visit();
    cy.wait(10000)
    
    const login = home.goToSignIn();
    cy.wait(15000)
    
    login
      .fillEmail('ppaulomariopires@andressamelo.com.br')
      .fillPassword('Admin')
      .submit();

    home.getLogoutButton().should('not.be.visible');
  });
});