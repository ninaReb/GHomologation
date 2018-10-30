import HomePage from './Pages/HomePage.js';
import Utils from './utils/utils';

describe('Gimba Enviar Pedido PF Test', () => {
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

  it('should send an Order using Boleto', () => {
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
    cy.wait(5000); 

    const enviarPedido = cart.clickCheckoutLink();
    cy.wait(10000);
    const pedidoRealizado = enviarPedido.clickFirstAddress()
      .selectFrete(0)
      .clickBoletoOption()
      .selectBoletoType()
      .clickEnviarPedido();

    pedidoRealizado.getConfirmationMessage().should('be.visible');
    });
})