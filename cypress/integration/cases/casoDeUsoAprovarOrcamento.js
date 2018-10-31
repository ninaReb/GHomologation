import HomePage from '../Pages/HomePage.js';
import Utils from '../utils/utils';
import DashboardPage from '../Pages/DashboardPage.js';
import AprovarOrcamentoPage from '../Pages/AprovarOrcamentoPage.js';

describe('Gimba Criar Orcamento Test - Not finished', () => {
    const email = Cypress.env('administrator');
    const password = Cypress.env('administratorPassword');
    const utils = new Utils();

    beforeEach(function () {

    });

    afterEach(function () {
        utils.logOut();
    });

    it('should send an Orcamento Assistido validating Faixas de Desconto for non VIP client', () => {

        const home = new HomePage();
        home.visit();

        const login = home.goToSignIn();
        login
            .fillEmail(email)
            .fillPassword(password)
            .submit();
        cy.wait(10000);

        const dashboard = new DashboardPage();
        cy.wait(10000);
        dashboard.goOrcamentosAprovacao();
        cy.get('[test-id="listar-orcamento-avaliar"]', {timeout:20000}).eq(0).click();
        const aprovar = new AprovarOrcamentoPage();
        aprovar.getPorcentagem(0).clear().type('100').trigger('change', {
            force: true
        });
        aprovar.getFaixa().should('be.visible');
        aprovar.getPorcentagem(0).clear().type('1').trigger('change', {
            force: true
        });
        aprovar.getFaixa().should('not.be.visible');
        aprovar.getNota().type('Compra ai');
        aprovar.getNotaVendedor().type('vende ai');
        aprovar.aceitar();
        
    });
});