import HomePage from '../Pages/HomePage.js';
import Header from '../Pages/Header';
import LoginPage from '../Pages/LoginPage.js';
import OrcamentoRealizadoPage from '../Pages/OrcamentoRealizadoPage.js';
import CriarOrcamentoPage from '../Pages/CriarOrcamentoPage.js';
import Utils from '../utils/utils';
import DashboardPage from '../Pages/DashboardPage.js';

describe('Caso de Uso Criar Orçamento Assistido VIP', () => {
    const email = Cypress.env('vendor');
    const password = Cypress.env('vendorPassword');
    const pjClient = Cypress.env('pjClientVIP');
    // const pjClient = Cypress.env('pjClient');
    const pjContact = Cypress.env('pjContatoVIP');
    const prodStock = Cypress.env('prodInStock');
    const utils = new Utils();

    beforeEach(function () {
        cy.viewport(1920, 1200)
    });   
    
    afterEach(function () {
        // utils.emptyCartAssistido();
        utils.logOut();
    });

    it('should send an Orcamento', () => {
        
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
        const myClients = dashboard.gotoMyClients();
        cy.wait(15000);
        myClients
      .searchAndSelectPJClient(pjClient,pjContact);

        cy.wait(10000);
        dashboard.gotoVendaAssistida();
        home.getVendaAssistidaButton().should('be.visible');       
        
        const cart = home.goToCart();
        cy.wait(10000);
        utils.emptyCartAssistido(); 

        /*ADD Search Bar */
        const header = new Header();
        header.getSearchBar()
            .clear()
            .type(prodStock);
        cy.wait(10000);
        header.addEnabledItem(0);

        cart.clickCriarOrcamentoLinkBh();
        cy.get('.cart-item-container', {
            timeout: 15000
        }).find('.spinner-div').should('not.be.visible');
        cy.wait(5000);
        header.getModal().children().find('.modal-footer > button').click({
            force: true
        });
        cart.changeItemQuantity(0, '20');

        cy.wait(5000);
        cart.clickCriarOrcamentoLinkBh();

        const CriarOrcamento = new CriarOrcamentoPage();

        CriarOrcamento
            .fillValorSugerido(0, '0,99')
            .fillConcorrente(0)
            .clickFirstAddress()
            .clickBoletoOption()
            .selectBoletoType()
            .clickEnviarOrcamento();
        const status = cy.get('[test-id="orcamento-status"]', {timeout:15000}).contains('Em andamento');
    });
});