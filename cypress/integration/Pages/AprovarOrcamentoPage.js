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

    avaliar(id) {
        cy.get('[test-id="listar-orcamento-avaliar"]', {timeout:20000}).eq(id).click();
    }

    getOrcamentoId(){
        cy.get('[data-bind="text: orderSelectedId"]').then(($id) => {
            const text = $id.text();
            return $id;
        })

    }

    getListagemTitle(){
        return cy.get('.font-weight-400');
    }
}

export default AprovarOrcamentoPage;