class Header {
    getSignInLink() {
        return cy.get('#btnLoginCadastrar', {timeout: 10000});
    }

    getCartLink(){
        return cy.get('.height-24');
    }

    getSearchBar(){
        return cy.get('.input-search-header');
    }
  }
  
  export default Header;