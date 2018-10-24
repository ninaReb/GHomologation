import Header from './Header.js';

class PedidoRealizadoPage {
    constructor() {
        this.header = new Header();
    }
    
    getPedidoStatusMessage(){
        return cy.get('[data-bind="visible: !isPending()"]', {timeout: 10000});
    }
    getPedidoNumber(){
        return cy.get('.color-3', {timeout: 10000});
    }
    gotoDetalhesPedido(){
        this.getPedidoNumber.click();
        //return new DetalhesPedidoPage();
    }
    getConfirmationMessage(){
        return cy.get('.section-1 > .padding-bottom-10', {timeout: 10000});
    }


}
  
export default PedidoRealizadoPage;