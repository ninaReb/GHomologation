import HomePage from '../Pages/HomePage.js';
import Utils from '../utils/utils';
import DashboardPage from '../Pages/DashboardPage.js';
import AprovarOrcamentoPage from '../Pages/AprovarOrcamentoPage.js';

describe('Gimba Criar Orcamento Test - Not finished', () => {
    const email = Cypress.env('administrator');
    const password = Cypress.env('administratorPassword');
    const utils = new Utils();
    
    beforeEach(function () {
        cy.viewport(1920, 1200)
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
        
        const aprovar = dashboard.gotoAprovarOrcamento();
        aprovar.avaliar(0);
        cy.wait(10000);

        aprovar.getPorcentagem(0).clear().type('100').trigger('change', {
            force: true
        });
        //aprovar.getFaixa().should('be.visible');
        aprovar.getPorcentagem(0).clear().type('1').trigger('change', {
            force: true
        });
        aprovar.getFaixa().should('not.be.visible');
        aprovar.getNota().type('Compra ai');
        aprovar.getNotaVendedor().type('vende ai');
        const id = aprovar.getOrcamentoId();
        aprovar.aceitar();
        cy.wait(5000);
        aprovar.getListagemTitle().should('be.visible');
        //cy.visit('detalhes-orcamento-cliente?orderId='+id);
        //cy.get('[test-id="orcamento-status"]', {timeout:150000}).contains('Realizado');
    });
});