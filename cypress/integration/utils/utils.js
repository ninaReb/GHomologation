import HomePage from '../Pages/HomePage.js';
import Header from '../Pages/Header';

class Utils {
  
  emptyCartPf() {
    const user = Cypress.env('pfOrcamentoUser');
    const password = Cypress.env('password');
    const prod = Cypress.env('prodInStock');

    const home = new HomePage();
    home.visit();
    const login = home.goToSignIn();

    login
      .fillEmail(user)
      .fillPassword(password)
      .submit();
    cy.wait(10000);
    home.header.getSearchBar()
      .clear()
      .type(prod);
    cy.wait(3000);
    home.header.addEnabledItem(0);    
    cy.wait(3000);

    const cart = home.goToCart();
    cart.emptyCart();
    cy.wait(3000);
    cy.clearLocalStorage();
    cy.clearCookies();
    sessionStorage.clear();
  }

}
export default Utils;