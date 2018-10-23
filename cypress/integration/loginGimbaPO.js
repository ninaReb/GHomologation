import HomePage from '../integration/Pages/HomePage.js';

describe('Gimba Login Test Page Object', () => {
  const email = Cypress.env('pfUser');
  const password = Cypress.env('password');
  
  it('should sign in with correct credentials', () => {
    const home = new HomePage();
    home.visit();
    
    const login = home.goToSignIn();
    
    login
      .fillEmail(email)
      .fillPassword(password)
      .submit();

    home.getLogoutButton().should('be.visible');
  });

  it('should not sign in without email', () => {
    const home = new HomePage();
    home.visit();
    
    const login = home.goToSignIn();
    
    login
      .fillPassword(password)
      .submit();

    login.getEmailError().should('be.visible');
  });

  it('should not sign in without password', () => {
    const home = new HomePage();
    home.visit();
    
    const login = home.goToSignIn();
    
    login
      .fillEmail(email)
      .submit();

    login.getPasswordError().should('be.visible');
  });

  it('should not sign in without email and password', () => {
    const home = new HomePage();
    home.visit();
    
    const login = home.goToSignIn();
    
    login
      .submit();

    login.getEmailError().should('be.visible');
    login.getPasswordError().should('be.visible');
  });

  it('should sign in without correct credentials', () => {
    const home = new HomePage();
    home.visit();
    
    const login = home.goToSignIn();
    
    login
      .fillEmail(email)
      .fillPassword('wrongpass')
      .submit();

    home.getLogoutButton().should('not.be.visible');
  });
});