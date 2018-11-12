import Header from './Header.js';
import CriarOrcamentoPage from './CriarOrcamentoPage.js';
import CheckoutB2CPage from './CheckoutB2CPage.js';
import SalvarOrcamentoPage from './SalvarOrcamentoPage.js';

class CartPage {
    constructor() {
        this.header = new Header();
    }

    clickCriarOrcamentoLink(){
        cy.get('[test-id="cart-criar-orcamento"]', {timeout: 25000}).click({force:true});
        // cy.visit('criar-orcamento');
        return new CriarOrcamentoPage();
    }
    clickCriarOrcamentoLinkBh(){
        cy.get('[test-id="cart-criar-orcamento-bh"]', {timeout: 25000}).click({force:true});
        // cy.visit('criar-orcamento');
        return new CriarOrcamentoPage();
    }

    clickSalvarOrcamentoLink(){
        //cy.get('[test-id="cart-salvar-orcamento"]', {timeout: 25000}).click({force:true});
        cy.contains('Salvar Orçamento', {timeout: 25000}).click({force:true});
        //cy.visit('salvar-orcamento');
        return new SalvarOrcamentoPage();
    }

    clickCheckoutLink(){
        cy.get('.f').contains('Continuar').click({force:true});
        return new CheckoutB2CPage();
    }

    clickCheckoutLinkUnlogged(){
        cy.get('[data-bind="ccLink: \'login\', visible: !user().loggedIn(), click: function() { $data.openLoginPage() }"] > span').click({force:true});
    }

    removeItem(item){
        if(item >= 0){
            cy.get('.cart-info', {timeout:15000}).find('[role="button"]')
                .eq(item)
                .click({force:true});
        } else {
            let length = cy.get('.cart-info', {timeout:15000}).find('[role="button"]').its('length');
            cy.get('.cart-info', {timeout:15000}).find('[role="button"]').should('be.enabled').eq(-1).click({force:true});
        }
    }

    changeItemQuantity(item, quantity){
        cy.get('.cart-info', {timeout:15000}).find('input').should('be.visible')
            .eq(item)
            .clear({force:true})
            .type(quantity + '{enter}',{force:true})
            .trigger('change',{force:true});
        // return 
    }
    emptyCart(){
        cy.get('.cart-item-container',{timeout:15000}).find('span').contains('Limpar Carrinho', {timeout:2000}).click({force:true});
    }

}

export default CartPage;