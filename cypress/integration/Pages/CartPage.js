import Header from '../Pages/Header.js';

class CartPage {
    constructor() {
        this.header = new Header();
    }

    getCriarOrcamentoLink(){
        return cy.get('.margin-top-30 > .pull-right');
    }

    getSalvarOrcamentoLink(){
        return cy.get('[data-bind="ccLink: salvar-orcamento, widgetLocaleText: label_salvarOrcamento"]');
    }

    getCheckoutLink(){
        return cy.get('.progress-div > :nth-child(3) > .btn');
    }

}

export default CartPage;