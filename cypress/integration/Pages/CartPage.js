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
        cy.get('[data-bind="ccLink: \'login\', visible: !user().loggedIn(), click: function() { $data.openLoginPage() }"] > span', {timeout: 25000})
            .click({force:true});
        return new CheckoutB2CPage();
    }

    removeItem(item){
        if(item >= 0){
            cy.get('.cart-info', {timeout:15000}).find('[role="button"]')
                .eq(item)
                .click();
        } else {
            let length = cy.get('.cart-info', {timeout:15000}).find('[role="button"]').its('length');
            cy.get('.cart-info', {timeout:15000}).find('[role="button"]').should('be.enabled').eq(-1).click();
        }
    }

    changeItemQuantity(item, quantity){
        cy.get('.cart-info', {timeout:15000}).find('input').should('be.visible')
            .eq(item)
            .clear()
            .type(quantity)
            .type('{enter}');
    }

}

export default CartPage;