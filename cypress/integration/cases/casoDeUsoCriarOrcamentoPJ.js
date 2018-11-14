import HomePage from '../Pages/HomePage.js';
import Header from '../Pages/Header';
import CriarOrcamentoPage from '../Pages/CriarOrcamentoPage.js';
import Utils from '../utils/utils';

describe('Caso de Uso Criar Orçamento PJ', () => {
    const email = Cypress.env('pjUser');
    const password = Cypress.env('password');
    const prodStock = Cypress.env('prodInStock');
    const prodStock2 = Cypress.env('prodInStock2');
    const utils = new Utils();

    beforeEach(function () {
        utils.emptyCartPj();
    });

    afterEach(function () {
        utils.logOut();
    });

    it('should send an Orcamento', () => {

        const home = new HomePage();
        home.visit();

        /*ADD Search Bar */
        const header = new Header();
        header.getSearchBar()
            .clear()
            .type(prodStock);
        cy.wait(10000);
        header.addEnabledItem(0);
        cy.wait(5000);
        // header.getSearchBar()
        //     .clear()
        //     .type(prodStock2);
        // cy.wait(10000);
        // header.addEnabledItem(0);

        const login = home.goToSignIn();
        // cy.wait(15000);
        login
            .fillEmail(email)
            .fillPassword(password)
            .submit();

        cy.wait(15000);

        const cart = home.goToCart();
        cart.clickCriarOrcamentoLink();
        cy.get('.cart-item-container', {
            timeout: 15000
        }).find('.spinner-div').should('not.be.visible');
        cy.wait(5000);
        header.getModal().children().find('.modal-footer > button').click({
            force: true
        });
        cart.changeItemQuantity(0, '20');

        cy.wait(5000);
        cart.clickCriarOrcamentoLink();

        const CriarOrcamento = new CriarOrcamentoPage();
    
       
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