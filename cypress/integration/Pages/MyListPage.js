class MyListPage{

    selectFirstList(){
        const firstList = cy.get('#listName').find(option).eq(1);
        firstList.click();
        cy.wait(8000);

        return this;
    }

    selectFirstCategory(){
        const firstCategory = cy.get('#categoryName').find(option).eq(1);
        firstCategory.click();
        cy.wait(8000);

        return this;
    }

    selectFirstSubCategory(){
        const firstsubCategory = cy.get('#subCategoryName').find(option).eq(1);
        firstsubCategory.click();
        cy.wait(8000);

        return this;

    }

    clickNewList(){
        const button = cy.get('.col-md-4 > .row > :nth-child(1) > .btn');
        button.click();
        cy.wait(8000);

        return this;
    }

    clickDeleteList(){
        const button = cy.get('#check-all');
        button.click();
        cy.wait(8000);

        return this;

    }

    checkAll(){
        const checkbox = cy.get('#check-all');
        checkbox.click();
        cy.wait(8000);

        return this;
    }

    fillNewListName(value){
        const field = cy.get('#myNewList');
        field.type(value);
        cy.wait(8000);

        return this;
    }

    submitNewList(){
        const button = cy.get('.well > .row > .col-sm-6');
        button.click();
        cy.wait(8000);

        return this;
    }

    
}

export default MyListPage;
