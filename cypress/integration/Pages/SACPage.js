class SACPage{

    visit(){
        cy.visit('contato');
    }

    fillName(value){
        const field = cy.get('#full-name');
        field.clear();
        field.type(value);

        return this;
    }

    fillPhoneNumber(value){
        const field = cy.get('#phone');
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

    fillCity(value){
        const field = cy.get('#city');
        field.clear();
        field.type(value);

        return this;
    }

    selectFirstSubject(){
        const firstSubject = cy.get('#subject').find(option).eq(1);
        firstSubject.click();
        cy.wait(8000);

        return this;
    }

    fillComplaint(value){
        const field = cy.get('#question');
        field.clear();
        field.type(value);

        return this;
    }

    submit(){
        const button = cy.get('.contact-form > .row > .col-md-12 > .btn');
        button.click();

        return this;
    }

}
export default SACPage;