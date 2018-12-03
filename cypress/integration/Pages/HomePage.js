import Header from './Header.js';
import LoginPage from './LoginPage.js';
import CartPage from './CartPage.js';
import RegisterPjPage from './RegisterPjPage.js';
import MyProfilePage from './MyProfilePage.js';
import RegisterAddressPage from './RegisterAddressPage.js';

class HomePage {
  constructor() {
    this.header = new Header();
  }

  visit() {
    cy.visit('home');
  }

  getLogoutButton(){
    return this.header.getSignOut();
  }

  goToSignIn() {
    const loginlink = this.header.getSignInLink();
    loginlink.click({force:true});

    const login = new LoginPage();
    return login;
  }

  goToProfile(){
    cy.visit('profile');

    const profile = new MyProfilePage();
    return profile;

    // const registeraddress = new RegisterAddressPage();
    // return registeraddress;
  }

  goToRegister(){
    const registerlink = this.header.getRegisterLink();
    registerlink.click({force:true});

    const register = new RegisterPjPage();
    return register;
  }

  getVendaAssistidaButton(){
    return cy.get('.vendor-user-button', { timeout: 150000 });
  }

  goToCart() {
    const cartlink = this.header.getCartLink();
    cartlink.click({ force: true });

    const cart = new CartPage();
    return cart;
  }

  goToCartUrl() {
    cy.visit('cart');

    const cart = new CartPage();
    return cart;
  }

  getCarrousel() {
    return cy.get('.carrossel-produto', { timeout: 150000 }).find('.carousel-inner', { timeout: 150000 });
  }

  getCarrouselItems() {
    const carousel = this.getCarrousel();
    const row = carousel.find('.item.active.row', { timeout: 150000 });
    return row.find('.product-item');
  }

  getCarrouselItem(number) {
    const items = this.getCarrouselItems();
    // We can use .first() and .last()
    return items.eq(number);
  }

  itemChangeQuantidade(item, quantity) {
    const inputQuantity = this.getCarrouselItem(item).find('select');
    inputQuantity.select(quantity);

  }

  itemAdd(item) {
    this.getCarrouselItem(item).find('button').eq(1).click({force:true});
  }

  goToPDP(item) {
    this.getCarrouselItem(item).find('[role="link"]').children().first().click({force:true});
  }
}

export default HomePage;