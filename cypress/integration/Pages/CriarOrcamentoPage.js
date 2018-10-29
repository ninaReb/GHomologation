import Header from './Header.js';
import OrcamentoRealizadoPage from './OrcamentoRealizadoPage.js';

class CriarOrcamentoPage {
    constructor() {
        this.header = new Header();
    }
    
    clickFirstAddress(){
        const address = cy.get('[test-id="orcamento-endereco-0"]');
        address.click({force:true});
        cy.wait(5000);
        return this;
    }
    clickBoletoOption(){
        const radioButton = cy.get('#boleto', {timeout: 10000});
        radioButton.parent().click({force:true});
        return this;
    }
    selectBoletoType(){
        const ddl = cy.get('[test-id="orcamento-boleto-select"]');
        ddl.select('Boleto à vista',{force:true});
        return this;
    }
    clickEnviarOrcamento(){
        const enviar = cy.get('[test-id="orcamento-enviar"]');
        enviar.click({force:true});
        return new OrcamentoRealizadoPage();
    }
    fillConcorrente(item){
        const concorrente = cy.get('[test-id="orcamento-concorrente-'+ item +'"]');
        concorrente.clear();
        concorrente.type('Automation', {force:true});
        return this;
    }
    selectCanalDivulgado(item){
        const ddlCanal = cy.get('[test-id="orcamento-canal-'+ item +'"]').find('select');
        ddlCanal.select('TV',{force:true});
        return this;
    }
    fillValorSugerido(item, valor){
        const valorSugerido = cy.get('[test-id="orcamento-sugerido-'+ item +'"]', {timeout: 15000});
        valorSugerido.type(valor).blur();
        return this;
    }

    removeItem(item){
        cy.get('[test-id="orcamento-remove'+ item +'"]', {timeout: 15000});
    }
}
  
export default CriarOrcamentoPage;