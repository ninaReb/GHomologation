import HomePage from '../Pages/HomePage.js';
import ProdutoPage from '../Pages/ProdutoPage.js';
import Header from '../Pages/Header.js';
import LoginPage from '../Pages/LoginPage.js';
import CheckoutB2CPage from '../Pages/CheckoutB2BPage.js';
import Utils from '../utils/utils.js';

describe('Gimba Compra PJ Test', () => {
  const email = Cypress.env('pjUser');
  const password = Cypress.env('password');
  const prodStock = Cypress.env('prodInStock');
  const utils = new Utils;

  beforeEach(function () {
      utils.emptyCartPj();
  });

  afterEach(function () {
      utils.logOut();
  });
  it('should send an Order using products from site navigation', () => {
    const home = new HomePage();
    home.visit();

    /*ADD HOME*/
    //home.itemChangeQuantidade(0, '8');
    //home.itemAdd(0);


    /*ADD PDP */
    //home.goToPDP(1);
    //const pdp = new ProdutoPage();
    //pdp.changeQuantidade('2');
    //cy.wait(5000);
    //pdp.hitComprar();

    /*ADD Search Bar */
    cy.wait(5000);
    home.getLogoutButton().click({force:true});
    utils.logOut();

    const search = home.header.getSearchBar();
    search.type('garrafa');
    cy.wait(10000);
    home.header.addEnabledItem(0);
    cy.wait(5000);

    /*Go to Cart*/
    const cart = home.goToCart();
    cart.removeItem(0);
    cart.header.getSearchBar().clear().type(prodStock);
    cy.wait(10000);
    cart.header.addEnabledItem(0);
    cy.wait(5000);
    // cart.header.getSearchBar().clear().type('garrafa');
    // cart.header.addEnabledItem(3);
    // cy.wait(5000);
    cart.changeItemQuantity(0, '1');
    // cart.removeItem(2);
    cart.clickCheckoutLinkUnlogged();

    /*Login Page*/
    const login = new LoginPage();
    cy.get('#email', { timeout: 150000 }).should('be.visible');
    login
      .fillEmail(email)
      .fillPassword(password)
      .submit();
    
    /*Checkout*/
    cy.get('.address-box', { timeout: 150000 }).should('be.visible');
    const checkout = new CheckoutB2CPage();
    const pedidoRealizado = checkout.clickFirstAddress()
      .selectFrete(0)
      .clickCartaoOption()
      .fillCartaoForm()
      .clickEnviarPedido();
    pedidoRealizado.getConfirmationMessage().should('be.visible');

    // const variants = pdp.getVariantes();
    // variants.each(function(variant) {
    //   cy.log(variant.prop('disabled',false));    
    // });    


  });
});