import HomePage from '../Pages/HomePage.js';
import Header from '../Pages/Header';
const userPj = Cypress.env('pjUser');
const userPf = Cypress.env('pfUser');
const password = Cypress.env('password');
const prod = Cypress.env('prodInStock');

class Utils {
  
  emptyCartPf() {
    const home = new HomePage();
    home.visit();
    const login = home.goToSignIn();
    login
      .fillEmail(userPf)
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
    cy.wait(4000);
    cy.visit('home');
    this.logOut();
  }

  emptyCartPj() {
    
    const home = new HomePage();
    home.visit();
    const login = home.goToSignIn();
    login
      .fillEmail(userPj)
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
    cy.wait(4000);
    cy.visit('home');
    this.logOut();
  }

  logOut(){
    cy.clearLocalStorage();
    cy.clearCookies();
    sessionStorage.clear();
    cy.wait(1000);
  }

  logIn(){
    
  }

}
export default Utils;