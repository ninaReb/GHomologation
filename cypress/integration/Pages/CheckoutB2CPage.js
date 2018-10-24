import PedidoRealizadoPage from './PedidoRealizadoPage.js';

class CheckoutB2CPage {
    clickFirstAddress(){
        const firstAddress = cy.get('.address-box', {timeout: 15000});
        firstAddress.click();
        cy.wait(8000);
        return this;
    }
    clickBoletoOption(){
        const radioButton = cy.get('.padding-bottom-20 > .radio-container > .label-fix > .radiomark', {timeout: 10000});
        radioButton.click();
        return this;
    }
    selectBoletoType(){
        const ddl = cy.get('.form-group > .row > .col-sm-4 > .input-1');
        ddl.select('Boleto à vista');
        return this;
    }
    clickEnviarPedido(){
        const enviar = cy.get('.padding-15 > .btn', {timeout: 10000});
        enviar.click();
        return new PedidoRealizadoPage();
    }
}
  
export default CheckoutB2CPage;