import Header from './Header.js';

class OrcamentoRealizadoPage {
    constructor() {
        this.header = new Header();
    }
    
    getOrcamentoNumber(){
        return cy.get('.text-blue', {timeout: 10000});
    }
    gotoDetalhesOrcamento(){
        this.getOrcamentoNumber.click();
        //return new DetalhesOrcamentoPage();
    }
    getConfirmationMessage(){
        return cy.get('.validate-text', {timeout: 10000});
    }

}
  
export default OrcamentoRealizadoPage;