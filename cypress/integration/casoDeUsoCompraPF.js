import HomePage from './Pages/HomePage.js';
import ProdutoPage from './Pages/ProdutoPage.js';
import Header from './Pages/Header.js';

describe('Gimba Compra PF Test', () => {
  const email = Cypress.env('pfUser');
  const password = Cypress.env('password');
  //id do produto 10721770
  it('should send an Order using diversous products from site navigation', () => {
    const home = new HomePage();
    home.visit();
    
    /*ADD HOME*/
    // const itemHome = home.getCarrouselItem(0);
    // home.itemChangeQuantidade(itemHome,'8');
    // home.getCarrouselItem(0).find('button').eq(1).click();
    

    /*ADD PDP */
    // const itemPdp =  home.getCarrouselItem(1);
    // home.goToPDP(itemPdp);
    // const pdp = new ProdutoPage();
    // pdp.changeQuantidade('2');
    // cy.wait(5000);
    // pdp.hitComprar();

    /*ADD Search Bar */
    const header = new Header();
    const search = header.getSearchBar();
    search.type('garrafa');
    cy.wait(10000);
    const enabledItems = header.getEnabledInSearch();
    cy.wait(5000);
    header.addEnabledItem(enabledItems.eq(0));

    // const variants = pdp.getVariantes();
    // variants.each(function(variant) {
    //   cy.log(variant.prop('disabled',false));    
    // });    

    // const login = home.goToSignIn();
    
    // login
    //   .fillEmail(email)
    //   .fillPassword(password)
    //   .submit();
    
    // cy.wait(5000);
    // const cart = home.goToCart();
    // const enviarPedido = cart.clickCheckoutLink();
    
    // const pedidoRealizado = enviarPedido
    //     .clickFirstAddress()
    //     .clickBoletoOption()
    //     .selectBoletoType()
    //     .clickEnviarPedido();

    // pedidoRealizado.getConfirmationMessage().should('be.visible');
    });
});