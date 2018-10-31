class AprovarOrcamentoPage {

    getPorcentagem(item) {
        return cy.get('[test-id="orcamento-porcentagem-' + item + '"]', {timeout:15000});
    }

    getValor(item) {
        return cy.get('[test-id="orcamento-valor-' + item + '"]', {timeout:15000});
    }

    getFaixa() {
        return cy.get('[test-id="orcamento-faixa-supervisor"]', {timeout:15000});
    }

    getNotaVendedor() {
        return cy.get('[test-id="orcamento-nota-vendedor"]', {timeout:15000});
    }

    getNota() {
        return cy.get('[test-id="orcamento-nota-cliente"]', {timeout:15000});
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

}

export default AprovarOrcamentoPage;