import Header from './Header.js';

class ProdutoPage {
    constructor() {
        this.header = new Header();
    }

    getQuantidade() {
        return cy.get('#CC-prodDetails-quantity', {
            timeout: 1500000
        });
    }
    changeQuantidade(quantity) {
        const quantidade = Cypress.$('#CC-prodDetails-quantity');
        cy.log(quantidade.val());
        if(!quantidade.attr('disabled')){
            cy.get('#CC-prodDetails-quantity', {
                timeout: 1500000
            }).clear().type(quantity);
        } else {
            cy.log('Sem Estoque');
        }       
        return this;
    }

    getVariantes() {
        return cy.get('.product-info > .row.full-width', {
            timeout: 1500000
        }).find('select');
    }

    getComprar() {
        return cy.get('#cc-prodDetailsAddToCart', {
            timeout: 1500000
        });
    }

    hitComprar() {
        const btn = cy.get('#cc-prodDetailsAddToCart');
        // Ainda não descobri com fazer a verificação de desabilitado
        // cy.log(btn.its('disabled'));
        if(btn){
            cy.get('#cc-prodDetailsAddToCart', {
                timeout: 1500000
            }).click({force: true});    
        } else {
            cy.log('disabled');
        }
        return this;
    }


}

export default ProdutoPage;