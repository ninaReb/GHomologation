import Header from './Header.js';

class RegisterPage {

    constructor() {
        this.header = new Header();
      }

    visit(){
        cy.visit('cadastrar');
    }

    getCEPerror(){
        return cy.get('#modalWidget').contains('CEP obrigatório');
    }
    
    clickPJ(){

        const checkbox = cy.get('#pj_tab', {timeout: 15000});
        checkbox.click();
        cy.wait(8000);

        return this;
    }

    clickRole(){

        const firstRole = cy.get('#cargos').find(option).eq(1);
        firstRole.click();
        cy.wait(8000);

        return this;
    }

    clickActivityField(){

        const firstActivity = cy.get('[test-id="cadastrarPJ-Ramo"]').find(option).eq(1);
        irstActivity.click();
        cy.wait(8000);

        return this;
    }

    fillEmail(value){
        const field = cy.get('#input-email-pj', {timeout: 15000});
        field.clear();
        field.type(value);

        return this;
    }

    fillPassword(value){
        const field = cy.get('#input-senha-pj', {timeout: 15000});
        field.clear();
        field.type(value);

        return this;
    }

    fillFullName(value){
        const field = cy.get('#input-contato-pj', {timeout: 15000});
        field.clear();
        field.type(value);

        return this;
    }

    fillRazaoSocial(value){
        const field = cy.get('#input-razao-social-pj', {timeout: 15000});
        field.clear();
        field.type(value);

        return this;
    }

    fillNomeFantasia(value){
        const field = cy.get('#input-nome-fantasia-pj', {timeout: 15000});
        field.clear();
        field.type(value);

        return this;
    }

    fillPhoneNumber(value){
        const field = cy.get('#input-tel-comercial-pj', {timeout: 15000});
        field.clear();
        field.type(value);

        return this;
    }

    fillCNPJ(value){
        const field = cy.get('#input-cnpj-pj', {timeout: 15000});
        field.clear();
        field.type(value);

        return this;
    }

    fillBirthDate(value){
        const field = cy.get('#input-dt-nascimento-pf', {timeout: 15000});
        field.clear();
        field.type(value);

        return this;
    }

    fillCEP(value){
        const field = cy.get('#input-cep-pj', {timeout: 15000});
        field.clear();
        field.type(value);

        return this;
    }

    submitAddress() {
        const button = cy.get('#btn-endereco-pj', {timeout: 15000});
        button.click();

        return this;
      }

    fillAddressNumber(value){
        const field = cy.get('#input-numero-pj', {timeout: 15000});
        field.clear();
        field.type(value);

        return this;
    }

    fillComplemento(value){
        const field = cy.get('#input-complemento-pj', {timeout: 15000});
        field.clear();
        field.type(value);

        return this;
    }

    fillIE(value){

        const field = cy.get('#input-inscricao-estadual-pj', {timeout: 15000});
        field.clear();
        field.type(value);

        return this;
    }

    clickIsento(){

        const checkbox = cy.get('#isento', {timeout: 15000});
        checkbox.click();
        cy.wait(8000);

        return this;
    }


    fillRamal(value){

        const field = cy.get('#input-ramal-pj');
        field.clear();
        field.type(value);

        return this;
    }

    fillReferencePoint(value){

        const field = cy.get('#input-ponto-referencia-pj');
        field.clear();
        field.type(value);

        return this;
    }


    clickReceivePromoEmail(){

        const checkbox = cy.get('#newsletterPJ', {timeout: 15000});
        checkbox.click({force:true});
        

        return this;
    }

    clickReceivePartnerEmail(){
        
        const checkbox = cy.get('#marketingPJ', {timeout: 15000});
        checkbox.click({force:true});
        

        return this;
    }

    
    submit() {
        const button = cy.get('#btn-cadastrar-pj', {timeout: 15000});
        button.click({force:true});
      }





}
export default RegisterPage;
