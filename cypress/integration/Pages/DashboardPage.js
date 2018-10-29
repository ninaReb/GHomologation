import MeusClientesPage from "./MeusClientesPage";

class DashboardPage {
    gotoMyClients() {
        cy.get(':nth-child(1) > a > span',{timeout: 150000}).click({force:true});
        return new MeusClientesPage();
    }

    gotoFrequencyEvolution(){
        cy.get('.col-md-12 > :nth-child(2) > a > span',{timeout: 150000}).click({force:true});
        return this;
    }

    gotoUserRegistration(){
        cy.get(':nth-child(3) > a > span').click({force:true});
        return this;
    }

    gotoClientSearch(){
        cy.get(':nth-child(4) > a > span').click({force:true});
        return this;
    }

    gotoVendorDashboard(){
        cy.get(':nth-child(4) > a > span').click({force:true});
        return this;
    }

    gotoClientSelected(){
        cy.get('.selected-client').click({force:true});
        return this;
    }

    gotoVendaAssistida(){
        cy.get(':nth-child(1) > a > .js-menu-item',{timeout: 150000}).click({force:true});
        return this;
    }

    gotoEditarDadosCliente(){
        cy.get(':nth-child(3) > a > .js-menu-item').click({force:true});
        return this;
    }

    gotoListaOrcamentosCliente(){
        cy.get(':nth-child(5) > a > .js-menu-item').click({force:true});
        return this;
    }

    gotoListaPedidosCliente(){
        cy.get(':nth-child(7) > a > .js-menu-item').click({force:true});
        return this;
    }

    gotoCadastrarAtendimento(){
        cy.get(':nth-child(8) > a > .js-menu-item').click({force:true});
        return this;
    }

    unselectClient(){
        cy.get('#\'btn-magnifier\'').click({force:true});
        return this;
    }
  }
  
  export default DashboardPage;