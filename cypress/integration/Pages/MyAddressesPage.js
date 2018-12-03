import RegisterAddressPage from './RegisterAddressPage.js';

class MyAddressesPage{

    goToNewAddress(){
        const button  = cy.get('.position-absolute > .btn');
        button.click({force:true});

        const registeraddress = new RegisterAddressPage();
        return registeraddress;

    }

    



}
export default MyAddressesPage;