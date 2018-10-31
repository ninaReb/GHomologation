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
        radioButton.parent().click({force:true}).trigger('change',{force:true});
        return this;
    }
    selectBoletoType(){
        const ddl = cy.get('[test-id="orcamento-boleto-select"]');
        ddl.select('Boleto à vista',{force:true}).trigger('change',{force:true});
        return this;
    }
    clickEnviarOrcamento(){
        const enviar = cy.get('[test-id="orcamento-enviar"]');
        enviar.click({force:true});
        return new OrcamentoRealizadoPage();
    }
    fillConcorrente(item){
        const concorrente = cy.get('[test-id="orcamento-concorrente-'+ item +'"]');
        // concorrente.clear();
        concorrente.type('Automation', {force:true});
        cy.get('[test-id="orcamento-concorrente-'+ item +'"]').trigger('change');        
        cy.wait(3000);
        return this;
    }
    selectCanalDivulgado(item){
        const ddlCanal = cy.get('[test-id="orcamento-canal-'+ item +'"]').find('select');
        ddlCanal.select('TV',{force:true}).trigger('change');        
        cy.wait(3000);
        return this;
    }
    fillValorSugerido(item, valor){      
        cy.wait(10000);
        const valorSugerido = cy.get('[test-id="orcamento-sugerido-'+ item +'"]', {timeout: 15000});  
        valorSugerido.clear().type(valor,{force:true}).trigger('change',{force:true});        
        cy.wait(3000);
        return this;
    }

    removeItem(item){
        cy.get('[test-id="orcamento-remove'+ item +'"]', {timeout: 15000});
    }

    getErrorFaixaDesconto(){
        this.header.getModal().children().find('.modal-footer > button').click({
            force: true
        });
        return this;
    }
}
  
export default CriarOrcamentoPage;