import Header from './Header.js';
import OrcamentoRealizadoPage from './OrcamentoRealizadoPage.js';

class CriarOrcamentoPage {
    constructor() {
        this.header = new Header();
    }
    
    clickFirstAddress(){
        const address = cy.get('.col-sm-4 > .address-box');
        address.click();
        cy.wait(5000);
        return this;
    }
    clickBoletoOption(){
        const radioButton = cy.get('.padding-bottom-20 > .radio-container > .label-fix', {timeout: 10000});
        radioButton.click();
        return this;
    }
    selectBoletoType(){
        const ddl = cy.get('#boletoCode > .panel-body > .form-group > .row > .col-md-6 > .input-1');
        ddl.select('Boleto à vista');
        return this;
    }
    clickEnviarOrcamento(){
        const enviar = cy.get('.col-md-6 > .btn-success');
        enviar.click();
        return new OrcamentoRealizadoPage();
    }
    fillConcorrente(){
        const concorrente = cy.get(':nth-child(6) > .padding-5');
        concorrente.clear();
        concorrente.type('Automation');
        return this;
    }
    selectCanalDivulgado(){
        const ddlCanal = cy.get('.padding-2');
        ddlCanal.select('TV');
        return this;
    }
    fillValorSugerido(valor){
        const valorSugerido = cy.get(':nth-child(1) > :nth-child(5) > .padding-5', {timeout: 15000});
        valorSugerido.type(valor).blur();
        return this;
    }
}
  
export default CriarOrcamentoPage;