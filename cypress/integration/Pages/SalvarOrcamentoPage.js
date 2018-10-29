import Header from './Header.js';
import OrcamentoRealizadoPage from './OrcamentoRealizadoPage.js';

class SalvarOrcamentoPage {
    constructor() {
        this.header = new Header();
    }
    
    clickFirstAddress(){
        const address = cy.get('.col-sm-4 > .address-box', {timeout: 15000});
        address.click({force:true});
        cy.wait(5000);
        return this;
    }
    clickBoletoOption(){
        const radioButton = cy.get('.padding-bottom-20 > .radio-container > .label-fix', {timeout: 10000});
        radioButton.click({force:true});
        return this;
    }
    selectBoletoType(){
        const ddl = cy.get('#boletoCode > .panel-body > .form-group > .row > .col-md-6 > .input-1');
        ddl.select('Boleto à vista');
        return this;
    }
    clickSalvarOrcamento(){
        const enviar = cy.get('.col-md-offset-3 > .btn');
        enviar.click({force:true});
        return new OrcamentoRealizadoPage();
    }
}
  
export default SalvarOrcamentoPage;