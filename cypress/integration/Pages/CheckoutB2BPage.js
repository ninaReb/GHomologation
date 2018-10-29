import PedidoRealizadoPage from './PedidoRealizadoPage.js';

class CheckoutB2CPage {
    clickFirstAddress(){
        const firstAddress = cy.get('.address-box', {timeout: 15000});
        firstAddress.click();
        cy.wait(8000);
        return this;
    }
    selectFrete(frete){
        cy.get('.frete-calc', {timeout:15000}).eq(frete).click();
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
        enviar.click({force : true});
        return new PedidoRealizadoPage();
    }
    clickCartaoOption(){
        const radioButton = cy.get('#cartao', {timeout: 10000});
        radioButton.click();
        return this;
    }
    fillCartaoForm(){
        const nome = cy.get('.input-1.js-card-name-validation');
        nome.clear();        
        nome.type('Automation Leonardo');
        const numeroCartao = cy.get('#CC-checkoutPaymentDetails-cardNumber');
        numeroCartao.clear();        
        numeroCartao.type('41111111111111111111111111111');
        const cvv = cy.get('.input-1.js-cvv-number-validation');
        cvv.clear();
        cvv.type('123');
        const endMonth = cy.get('[name="endMonth"]');
        endMonth.select('01');
        const endYear = cy.get('[name="endYear"]');
        endYear.select('2019');
        const parcelasCartao = cy.get('[data-name="parcelasCartao"]');
        parcelasCartao.select('1');
        const opcaoCartao =  cy.get(':nth-child(1) > .font-weight-100 > .radiomark');
        opcaoCartao.click();
        return this;
    }
    clickContribuicao(){
        
    }
}
  
export default CheckoutB2CPage;