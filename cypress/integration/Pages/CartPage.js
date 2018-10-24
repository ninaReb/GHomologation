import Header from './Header.js';
import CriarOrcamentoPage from './CriarOrcamentoPage.js';
import CheckoutB2CPage from './CheckoutB2CPage.js';
import SalvarOrcamentoPage from './SalvarOrcamentoPage.js';

class CartPage {
    constructor() {
        this.header = new Header();
    }

    clickCriarOrcamentoLink(){
        //cy.get('.margin-top-30 > .pull-right', {timeout: 25000}).click();
        cy.visit('criar-orcamento');
        return new CriarOrcamentoPage();
    }

    clickSalvarOrcamentoLink(){
        //cy.get('[data-bind="ccLink: 'salvar-orcamento', widgetLocaleText: 'label_salvarOrcamento'"]', {timeout: 25000}).click();
        cy.visit('salvar-orcamento');
        return new SalvarOrcamentoPage();
    }

    clickCheckoutLink(){
        cy.get('.progress-div > :nth-child(3) > .btn', {timeout: 25000}).click();
        return new CheckoutB2CPage();
    }

}

export default CartPage;