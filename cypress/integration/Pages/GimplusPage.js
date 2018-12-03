class GimplusPage{

    getInvalidDateError(){
        return cy.get('#modalWidget').contains('data invalida');

    }

    getGimplusBalance(value){
        return cy.get('.gimplus-balance-amount').contains(value);
    }

    filCurrentDate(value){
        const field  = cy.get('dateStart');
        field.clear();
        field.type(value);

        return this;
    }

    fillFinalDate(value){
        const field  = cy.get('dateEnd');
        field.clear();
        field.type(value);

        return this;

    }

    clickSearch(){
        const button = cy.get('.col-xs-12 > .btn');
        field.click();

        return this;
    }
}

export default GimplusPage;