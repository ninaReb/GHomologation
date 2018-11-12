import Header from './Header.js';

class OrcamentoRealizadoPage {
    constructor() {
        this.header = new Header();
    }
    
    getOrcamentoNumber(){
        return cy.get('.text-blue', {timeout: 10000});
    }
    gotoDetalhesOrcamento(){
        this.getOrcamentoNumber.click({force:true});
        //return new DetalhesOrcamentoPage();
    }
    getConfirmationMessage(){
        return cy.get('.validate-text', {timeout: 20000});
    }

}
  
export default OrcamentoRealizadoPage;