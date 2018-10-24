import HomePage from '../integration/Pages/HomePage.js';
import OrcamentoRealizadoPage from '../integration/Pages/OrcamentoRealizadoPage.js';

describe('Gimba Criar Orcamento Test - Not finished', () => {
  const email = Cypress.env('pfUser');
  const password = Cypress.env('password');

  it('should send an Orcamento', () => {
    const home = new HomePage();
    home.visit();
    
    const login = home.goToSignIn();
    
    login
      .fillEmail(email)
      .fillPassword(password)
      .submit();
    
    cy.wait(5000);
    const cart = home.goToCart();
    const CriarOrcamento = cart.clickCriarOrcamentoLink(); 
    
    const orcamentoRealizado = CriarOrcamento
        .fillValorSugerido('286,00')
        .fillConcorrente()
        .selectCanalDivulgado()
        .clickFirstAddress()
        .clickBoletoOption()
        .selectBoletoType()
        .clickEnviarOrcamento();
 
    orcamentoRealizado.getConfirmationMessage().should('be.visible');
    });
})
