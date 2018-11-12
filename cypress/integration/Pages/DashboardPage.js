import MeusClientesPage from "./MeusClientesPage";
import AprovarOrcamentoPage from "./AprovarOrcamentoPage";

class DashboardPage {
    gotoMyClients() {
        cy.get('[test-id="dashboard-meus-cliente"]',{timeout: 150000}).click({force:true});
        return new MeusClientesPage();
    }

    gotoFrequencyEvolution(){
        cy.get('[test-id="dashboard-evolucao-frequencia"]',{timeout: 150000}).click({force:true});
        return this;
    }

    gotoUserRegistration(){
        cy.get('[test-id="dashboard-cadastroPfPj"]').click({force:true});
        return this;
    }

    gotoClientSearch(){
        cy.get('[test-id="dashboard-pesquisar-clientes"]').click({force:true});
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
        cy.get('[test-id="dashboard-novo-orcamento"]',{timeout: 150000}).click({force:true});
        return this;
    }

    gotoEditarDadosCliente(){
        cy.get('[test-id="dashboard-edit-profile"]').click({force:true});
        return this;
    }

    gotoListaOrcamentosCliente(){
        cy.get('[test-id="dashboard-consulta-orcamento"]').click({force:true});
        return this;
    }

    gotoListaPedidosCliente(){
        cy.get('[test-id="dashboard-consultar-pedidos"]').click({force:true});
        return this;
    }

    gotoCadastrarAtendimento(){
        cy.get('[test-id="dashboard-atendimento"]').click({force:true});
        return this;
    }

    unselectClient(){
        cy.get('#\'btn-magnifier\'').click({force:true});
        return this;
    }

    gotoAprovarOrcamento() {
        cy.get('[test-id="dashboard-orcamento-aprovacao"]',{timeout: 150000}).click({force:true});
        return new AprovarOrcamentoPage();
    }
  }
  
  export default DashboardPage;