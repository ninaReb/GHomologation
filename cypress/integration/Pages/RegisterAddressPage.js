

class RegisterAddressPage{

    getInvalidCEPError(){
        
        const box =  cy.get('.address-position');
        box.contains('CEP Inválido');
        
        return this;
    }


    fillCEP(value){
        const field = cy.get('#input-cep', {timeout: 15000});
        field.clear();
        field.type(value);

        return this;
        
    }

    clickSearchCEP(){
        const button = cy.get('.address-position > .row > .col-md-6');
        button.click({force:true});

        return this;

    }

    fillNickname(value){
        const field = cy.get('#input-apelido');
        field.clear();
        field.type(value);

        return this;
    }

    fillBairro(value){
        const field = cy.get('#input-bairro');
        field.clear();
        field.type(value);

        return this;
    }

    fillCity(value){
        const field = cy.get('#input-cidade');
        field.clear();
        field.type(value);

        return this;
    }

    fillAddress(value){
        const field = cy.get('#input-endereco');
        field.clear();
        field.type(value);

        return this;
    }

    fillAddressType(value){
        const field = cy.get('#input-logradouro');
        field.clear();
        field.type(value);

        return this;
    }

    fillState(value){
        const field = cy('#input-uf');
        field.clear();
        field.type(value);

        return this;

    }

    fillAddressNumber(value){
        const field = cy.get('#input-numero');
        field.clear();
        field.type(value);

        return this;
    }

    fillPhoneNumber(value){
        const field = cy.get('#input-telefone');
        field.clear();
        field.type(value);

        return this;
    }

    fillComplemento(value){
        const field = cy.get('#input-complemento');
        field.clear();
        field.type(value);

        return this;
    }

    fillReferencePoint(value){
        const field = cy.get('#input-ponto-referencia');
        field.clear();
        field.type(value);

        return this;
    }

    submit(){
        const button = cy.get('.address-position > .row > .col-md-6', {timeout: 15000});
        button.click();

        return this;
    }

    
}

export default RegisterAddressPage;