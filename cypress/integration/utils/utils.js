import HomePage from '../Pages/HomePage.js';
import Header from '../Pages/Header';
import CartPage from '../Pages/CartPage.js';
const userPj = Cypress.env('pjUser');
const userPf = Cypress.env('pfUser');
const password = Cypress.env('password');
const prod = Cypress.env('prodInStock');
const home = new HomePage();
const cart = new CartPage();

class Utils {

  emptyCartPf() {
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
    cy.wait(10000);
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

  emptyCartAssistido() {

    const home = new HomePage();
    home.visit();
    home.header.getSearchBar()
      .clear()
      .type(prod);
    cy.wait(3000);
    home.header.addEnabledItem(0);
    cy.wait(3000);

    if (!document.location.pathname.includes('cart')) {
      home.goToCart();
      cy.wait(10000);
    }
    cart.emptyCart();
    cy.wait(10000);
  }

  logOut() {
    cy.clearLocalStorage();
    cy.clearCookies();
    sessionStorage.clear();
    cy.wait(1000);
  }

  logIn() {

  }

}
export default Utils;