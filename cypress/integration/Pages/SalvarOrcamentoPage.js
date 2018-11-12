import Header from './Header.js';
import OrcamentoRealizadoPage from './OrcamentoRealizadoPage.js';

class SalvarOrcamentoPage {
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
    clickSalvarOrcamento(){
        const enviar = cy.get(':nth-child(7) > :nth-child(2) > .btn');
        enviar.click({force:true});
        return new OrcamentoRealizadoPage();
    }
    removeItem(item){
        cy.get('[test-id="orcamento-remove'+ item +'"]', {timeout: 15000});
    }
}
  
export default SalvarOrcamentoPage;