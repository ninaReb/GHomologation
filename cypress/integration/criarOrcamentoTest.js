import HomePage from '../integration/Pages/HomePage.js';
import OrcamentoRealizadoPage from '../integration/Pages/OrcamentoRealizadoPage.js';
import Utils from './utils/utils';

describe('Gimba Criar Orcamento Test - Smoke test', () => {
  const email = Cypress.env('pfUser');
  const password = Cypress.env('password');
  const prodStock = Cypress.env('prodInStock');

  beforeEach(function () {
    const utils = new Utils();
    utils.emptyCartPf('pfUser');
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
    const CriarOrcamento = cart.clickCriarOrcamentoLink(); 
    cy.wait(10000);
    const orcamentoRealizado = CriarOrcamento
      .fillValorSugerido(0, '26,00')
      .fillConcorrente(0)
      .selectCanalDivulgado(0)
      .clickFirstAddress()
      .clickBoletoOption()
      .selectBoletoType()
      .clickEnviarOrcamento();
 
    orcamentoRealizado.getConfirmationMessage().should('be.visible');
    });
})
