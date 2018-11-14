import HomePage from '../integration/Pages/HomePage.js';
import OrcamentoRealizadoPage from '../integration/Pages/OrcamentoRealizadoPage.js';
import Utils from './utils/utils';

describe('Gimba Salvar Orcamento Test', () => {
  const email = Cypress.env('pfUser');
  const password = Cypress.env('password');
  const prodStock = Cypress.env('prodInStock');

  beforeEach(function () {
    const utils = new Utils();
    utils.emptyCartPf();
  });

  afterEach(function(){
    cy.clearLocalStorage();
    cy.clearCookies();
    sessionStorage.clear();
  });

  it('should send an Orcamento with PF user', () => {
    const home = new HomePage();
    home.visit();
    
    const login = home.goToSignIn();
    
    login
      .fillEmail(email)
      .fillPassword(password)
      .submit();
    
    cy.wait(10000);
    home.header.getSearchBar()
        .clear()
        .type(prodStock);
    cy.wait(3000);
    home.header.addEnabledItem(0);    
    cy.wait(3000);  

    const cart = home.goToCart();
    cart.changeItemQuantity(0, '20');
    cy.wait(5000);
    const salvarOrcamento = cart.clickSalvarOrcamentoLink(); 
    cy.wait(10000);

    const orcamentosalvo = salvarOrcamento
      .clickFirstAddress()
      .clickBoletoOption()
      .selectBoletoType()
      .clickSalvarOrcamento();
    cy.wait(5000);
    orcamentosalvo.getConfirmationMessage().should('be.visible');
    });
})