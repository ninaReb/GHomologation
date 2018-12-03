class EditAccountPFPage{

    fillName(value){
        const field = cy.get('#name');
        field.clear();
        field.type(value);

        return this;
    }    

    fillEmail(value){
        const field = cy.get('#email');
        field.clear();
        field.type(value);

        return this;
    }

    fillCPF(value){
        const field = cy.get('#cpf');
        field.clear();
        field.type(value);

        return this;
    }

    fillBirthDate(value){
        const field = cy.get('#birth');
        field.clear();
        field.type(value);

        return this;
    }

    fillPhoneNumber(value){
        const field = cy.get('#celphone');
        field.clear();
        field.type(value);

        return this;
    }

    selectRadioFemale(){
        const radio = cy.get(':nth-child(6) > :nth-child(3) > .radiomark');
        radio.click();

        return this;
    }

    selectRadioMale(){
        const radio = cy.get(':nth-child(6) > :nth-child(4) > .radiomark');
        radio.click();

        return this;
    }

    selectPromoEmail(){
        const checkbox = cy.get('#promo');
        checkbox.click({force:true});

        return this;
    }

    selectPartnerEmail(){
        const checkbox = cy.get('#partiners');
        checkbox.click({force:true});

        return this;
    }

    submit(){
        const button = cy.get('#edit-pf > .row > .col-md-8 > .btn');
        button.click();

        return this;
    }
}
export default EditAccountPFPage;
