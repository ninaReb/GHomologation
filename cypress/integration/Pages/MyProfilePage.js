import MyAddressesPage from './MyAddressesPage.js';
import EditAccountPFPage from './EditAccountPFPage.js';
import Header from './Header.js';

class MyProfilePage{

    constructor() {
        this.header = new Header();
    }

    goToMyAddresses(){
        const button  = cy.get('[role="adicionar-endereco"] > a');
        button.click();

        const myaddress = new MyAddressesPage();
        return myaddress;
    }

    goToChangePassword(){
        const button = cy.get('[role="alterar-senha"] > a');
        button.click();

        const changepassword = new AlterarSenhaPage();
        return changepassword;
    }

    goToGimplusPage(){
        const button = cy.get('[role="gimplus"] > a');
        button.click();

        const gimpluspage = new GimplusPage();
        return gimpluspage;
    }

    goToEditPJAccount(){
        const button = cy.get('#tab-control-editar');
        button.click;

        const editaccount = new EditAccountPJPage;
        return editaccount;
    }

    goToEditPFAccount(){
        const button = cy.get('#tab-control-editar');
        button.click;

        const editaccount = new EditAccountPFPage;
        return editaccount;
    }

    goToSAC(){
        const button = cy.get('[role="sac"] > a');
        button.click;

        const SAC = new SACPage;
        return SAC;
    }

    goToMyOrders(){
        const button = cy.get('[role="meus-pedidos"] > a');
        button.click;

        const myorders = new MyOrdersPage;
        return myorders;
    }

    goToMyList(){
        const button = cy.get('[data-bind="attr: { class: tabName() === "minhaLista" ? "list-item-1 active" : "list-item-1" }"] > a');
        button.click;

        const mylist = new MyListPage;
        return mylist;
    }

    goToMyNegotiations(){
        const button = cy.get('[role="minhas-negociacoes"] > a');
        button.click;

        const mynegotiations = new MyNegotiationsPage;
        return mynegotiations;
    }

    
}

export default MyProfilePage;