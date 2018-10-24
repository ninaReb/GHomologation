import HomePage from '../integration/Pages/HomePage.js';
import OrcamentoRealizadoPage from '../integration/Pages/OrcamentoRealizadoPage.js';

describe('Gimba Salvar Orcamento Test - Not finished', () => {
  const email = Cypress.env('pfUser');
  const password = Cypress.env('password');

  it('should save an Orcamento', () => {
    const home = new HomePage();
    home.visit();
    
    const login = home.goToSignIn();
    
    login
      .fillEmail(email)
      .fillPassword(password)
      .submit();
    
    cy.wait(5000);
    const cart = home.goToCart();
    const salvarOrcamento = cart.clickSalvarOrcamentoLink(); 
    cy.wait(10000);
    const orcamentosalvo = salvarOrcamento
        .clickFirstAddress()
        .clickBoletoOption()
        .selectBoletoType()
        .clickSalvarOrcamento();

    orcamentosalvo.getConfirmationMessage().should('be.visible');
    });
})