import HomePage from './Pages/HomePage.js';

describe('Gimba Enviar Pedido PF Test', () => {
  const email = Cypress.env('pfUser');
  const password = Cypress.env('password');
  //id do produto 10721770
  it('should send an Order using Cartao', () => {
    const home = new HomePage();
    home.visit();
    
    const login = home.goToSignIn();
    
    login
      .fillEmail(email)
      .fillPassword(password)
      .submit();
    
    cy.wait(5000);
    const cart = home.goToCart();
    const enviarPedido = cart.clickCheckoutLink();
    
    const pedidoRealizado = enviarPedido
        .clickFirstAddress()
        .clickCartaoOption()
        .fillCartaoForm()
        .clickEnviarPedido();

    pedidoRealizado.getConfirmationMessage().should('be.visible');
    });
})