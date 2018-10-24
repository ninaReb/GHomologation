import Header from './Header.js';
import LoginPage from './LoginPage.js';
import CartPage from './CartPage.js';

class HomePage {
  constructor() {
    this.header = new Header();
  }
  
  visit() {
    cy.visit('home');
  }

  getLogoutButton() {
    return cy.get('#btnLogout > .text-light-grey');
  }
  
  goToSignIn() {
    const loginlink = this.header.getSignInLink();
    loginlink.click();

    const login = new LoginPage();
    return login;
  }

  goToCart(){
    const cartlink = this.header.getCartLink();
    cartlink.click({ force: true });

    const cart = new CartPage();
    return cart;
  }

  goToCartUrl(){
    cy.visit('cart');

    const cart = new CartPage();
    return cart
  }
}

export default HomePage;