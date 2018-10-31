class Header {
    getSignInLink() {
        return cy.get('#btnLoginCadastrar', {timeout: 150000});
    }

    getSignOut() {
        return cy.get('#btnLogout');
    }

    getCartLink(){
        return cy.get('.height-24');
    }

    getSearchBar(){
        return cy.get('.input-search-header',{timeout: 150000});
    }

    getSearchResults(){
        return cy.get('.search-product-item',{timeout: 150000});
    }
    getEnabledInSearch(){
        return cy.get('.search-product-item',{timeout: 150000}).find('.cart-block > button').should('be.enabled');
    }
    addEnabledItem(item){       
        this.getEnabledInSearch().eq(item).parent().parent().find('input').type('1',{force:true});
        this.getSearchBar().focus();
        this.getEnabledInSearch().eq(item).click({force:true});
    }

    getModal(){
        return cy.get('#modalWidget', {timeout:15000}).should('be.visible');
    }
  }
  
  export default Header;