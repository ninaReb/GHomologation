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
    cy.viewport(1920, 1200)
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
    cy.viewport(1920, 1200)
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

  getRandomNumber(n) {
    return Math.round(Math.random() * n);
  }

  mod(dividendo, divisor) {
    return Math.round(dividendo - (Math.floor(dividendo / divisor) * divisor));
  }

  //Gerar com pontinhos = true, sem pontinhos = false
  gerarCnpj (pontuacao) {
    var cnpj;
	
    var n = 9;
    var n1 = this.getRandomNumber(n);
    var n2 = this.getRandomNumber(n);
    var n3 = this.getRandomNumber(n);
    var n4 = this.getRandomNumber(n);
    var n5 = this.getRandomNumber(n);
    var n6 = this.getRandomNumber(n);
    var n7 = this.getRandomNumber(n);
    var n8 = this.getRandomNumber(n);
    var n9 = 0; //randomiza(n);
    var n10 = 0; //randomiza(n);
    var n11 = 0; //randomiza(n);
    var n12 = 1; //randomiza(n);
    var d1 = n12*2+n11*3+n10*4+n9*5+n8*6+n7*7+n6*8+n5*9+n4*2+n3*3+n2*4+n1*5;
    d1 = 11 - ( this.mod(d1,11) );

    if (d1>=10){
      d1 = 0;
    }

    var d2 = d1*2+n12*3+n11*4+n10*5+n9*6+n8*7+n7*8+n6*9+n5*2+n4*3+n3*4+n2*5+n1*6;
    d2 = 11 - ( this.mod(d2,11) );

    if (d2>=10){
      d2 = 0;
    } 

    var retorno = '';
    if (pontuacao){
       cnpj = ''+n1+n2+'.'+n3+n4+n5+'.'+n6+n7+n8+'/'+n9+n10+n11+n12+'-'+d1+d2;
    }else 
      {cnpj = ''+n1+n2+n3+n4+n5+n6+n7+n8+n9+n10+n11+n12+d1+d2;}

   return cnpj;

}

//Gerar com pontinhos = true, sem pontinhos = false
  generateCpf(pontuacao) {
    var cpf;
    var n = 9;
    var n1 = this.getRandomNumber(n);
    var n2 = this.getRandomNumber(n);
    var n3 = this.getRandomNumber(n);
    var n4 = this.getRandomNumber(n);
    var n5 = this.getRandomNumber(n);
    var n6 = this.getRandomNumber(n);
    var n7 = this.getRandomNumber(n);
    var n8 = this.getRandomNumber(n);
    var n9 = this.getRandomNumber(n);
    var d1 = n9 * 2 + n8 * 3 + n7 * 4 + n6 * 5 + n5 * 6 + n4 * 7 + n3 * 8 + n2 * 9 + n1 * 10;
    d1 = 11 - (this.mod(d1, 11));

    if (d1 >= 10){
      d1 = 0;
    }

    var d2 = d1 * 2 + n9 * 3 + n8 * 4 + n7 * 5 + n6 * 6 + n5 * 7 + n4 * 8 + n3 * 9 + n2 * 10 + n1 * 11;
    d2 = 11 - (this.mod(d2, 11));

    if(d2 >= 10){
       d2 = 0;
    }

    return cpf + n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + d1 + d2;
  }

  generateRandomEmail(){
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    for (var i = 0; i < 20; i++) {
      if (i === 13) {
        text += '@'
      } else {
        if(i === 16){
          text += '.'
        }else {
          text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
      }
    }

    return text;
  }

  

}
export default Utils;