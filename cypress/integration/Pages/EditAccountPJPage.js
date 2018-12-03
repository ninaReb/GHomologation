class EditAccountPJPage{

    fillName(value){
        const field = cy.get('');
        field.clear();
        field.type(value);

        return this;
    }    

    fillEmail(value){
        const field = cy.get('');
        field.clear();
        field.type(value);

        return this;
    }

    fillCNPJ(value){
        const field = cy.get('');
        field.clear();
        field.type(value);

        return this;
    }


    fillPhoneNumber(value){
        const field = cy.get('');
        field.clear();
        field.type(value);

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
        const button = cy.get('');
        button.click();

        return this;
    }
}
export default EditAccountPJPage;
