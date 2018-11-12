class MeusClientesPage {
    searchClient(value) {
        cy.get('.padding-top-30 > .col-md-offset-2 > .form-control').type(value);
        return this;
    }
    selectPFClient(value){
        cy.get('.cursor-pointer').contains(value).click({force:true});
        return this;
    }

    selectPJClient(cnpj,contact){
        cy.get('.cursor-pointer').contains(cnpj).click({force:true});
        cy.wait(5000);
        cy.get('a').contains(contact).click({force:true});
        return this;
    }

    searchAndSelectPFClient(value){
        cy.get('.padding-top-30 > .col-md-offset-2 > .form-control',{timeout: 150000}).type(value);
        cy.get('.cursor-pointer').contains(value).click({force:true});;
        return this;
    }

    searchAndSelectPJClient(cnpj,contact){
        cy.get('.padding-top-30 > .col-md-offset-2 > .form-control',{timeout: 150000}).type(cnpj);
        cy.get('.cursor-pointer').contains(cnpj).click({force:true});
        cy.wait(5000);
        cy.get('a').contains(contact).click({force:true});
        return this;
    }

  }
  
  export default MeusClientesPage;