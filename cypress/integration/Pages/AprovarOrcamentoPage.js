class AprovarOrcamentoPage {

    getPorcentagem(item) {
        return cy.get('[test-id="orcamento-porcentagem-"' + item + ']');
    }

    getValor(item) {
        return cy.get('[test-id="orcamento-valor-"' + item + ']');
    }

    getFaixa() {
        return cy.get('[test-id="orcamento-faixa-supervisor"]');
    }

    getNotaVendedor() {
        return cy.get('[test-id="orcamento-nota-vendedor"]');
    }

    getNota() {
        return cy.get('[test-id="orcamento-nota-cliente"]');
    }
    
    aceitar() {
        cy.get('[test-id="orcamento-aceitar"]').click();
    }

    rejeitar() {
        cy.get('[test-id="orcamento-rejeitar"]').click();
    }

    cancelar() {
        cy.get('[test-id="orcamento-rejeitar"]').click();
    }

    avaliar(id) {
        //const row = cy.get('.row').contains(id);
        cy.get('[test-id="listar-orcamento-avaliar"]').first().click({force:true});
    }

}

export default AprovarOrcamentoPage;