import HomePage from './Pages/HomePage.js';
import DashboardPage from './Pages/DashboardPage.js';

describe('Access Venda Assistida selecting a client from the wallet', () => {
  const email = Cypress.env('vendor');
  const password = Cypress.env('vendorPassword');
  const pfClient = Cypress.env('pfClient');
  const pjClient = Cypress.env('pjClient');
  const pjContact = Cypress.env('pjContact');
  
  it('should access Venda Assistida selecting a PJ client from the wallet', () => {
    const home = new HomePage();
    home.visit();
    
    const login = home.goToSignIn();
    
    login
      .fillEmail(email)
      .fillPassword(password)
      .submit();
    
    cy.wait(10000);
    const dashboard = new DashboardPage();
    const myClients =  dashboard.gotoMyClients();
    cy.wait(15000);
    myClients
      .searchAndSelectPJClient(pjClient,pjContact);
    
    cy.wait(10000);
    dashboard.gotoVendaAssistida();
    home.getVendaAssistidaButton().should('be.visible');
  });

  it('should access Venda Assistida selecting a PF client from the wallet', () => {
    const home = new HomePage();
    home.visit();
    
    const login = home.goToSignIn();
    
    login
      .fillEmail(email)
      .fillPassword(password)
      .submit();
    
    cy.wait(10000);
    const dashboard = new DashboardPage();
    const myClients =  dashboard.gotoMyClients();
    cy.wait(15000);
    myClients
      .searchAndSelectPFClient(pfClient);
    
    cy.wait(10000);
    dashboard.gotoVendaAssistida();
    home.getVendaAssistidaButton().should('be.visible');
    });
})