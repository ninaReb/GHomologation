import Header from '../integration/Pages/Header.js';
import HomePage from '../integration/Pages/HomePage.js';
import MyProfilePage from '../integration/Pages/MyProfilePage.js';
import MyAddressesPage from '../integration/Pages/MyAddressesPage.js';
import RegisterAddressPage from '../integration/Pages/RegisterAddressPage.js';
import utils from './utils/utils';
import { ifError } from 'assert';

describe('Gimba Cadastro de Endereço PF smoke test', () => { 
    const email = Cypress.env('pfUser');
    const password = Cypress.env('password');
    const CEP = '88036400';
    const Nickname = 'Endereço auTomatizado';
    const Bairro = '';
    const City = '';
    const Address = '';
    const AddressType = '';
    const UF = '';
    const AddressNumber = '1';
    const PhoneNumber = '9999999999';
    const Complemento = 'abc';
    const ReferencePoint = 'abc';
    
    afterEach(function(){
        cy.clearLocalStorage();
        cy.clearCookies();
        sessionStorage.clear();
      });

    it('should not allow to continue with invalid CEP', () =>{
        cy.viewport(1920, 1200);
        const home = new HomePage();
        home.visit();
        cy.wait(20000);

         // clicar para fechar a modal intermitente em stage
         cy.get('body').then(($body) => {
            if ($body.text().includes('Temos alguns problemas com produtos similares. Isso deve funcionar muito em breve!')) {
              cy.log('modal apareceu');
              cy.get('.modal-footer > .btn > span').click({force:true});
            } else {
              cy.log('modal não apareceu')
            }
        });

        const login = home.goToSignIn();
        login
            .fillEmail(email)
            .fillPassword(password)
            .submit();

        cy.wait(10000);
        
        const profile =  home.goToProfile();
        cy.wait(20000);
        const meusEnderecos = profile.goToMyAddresses();
        cy.wait(10000);
        const cadastroEndereco =  meusEnderecos.goToNewAddress();
        cy.wait(10000);

        cadastroEndereco.fillCEP(123);
        cy.wait(1000);
        //cadastroEndereco.clickSearchCEP();

        cadastroEndereco.getInvalidCEPError();

    });

    it('should save a new address', () =>{
        cy.viewport(1920, 1200);
        const home = new HomePage();
        home.visit();
        cy.wait(20000);

        // clicar para fechar a modal intermitente em stage
        cy.get('body').then(($body) => {
            if ($body.text().includes('Temos alguns problemas com produtos similares. Isso deve funcionar muito em breve!')) {
              cy.log('modal apareceu');
              cy.get('.modal-footer > .btn > span').click({force:true});
            } else {
              cy.log('modal não apareceu')
            }
        });

        const login = home.goToSignIn();
        login
            .fillEmail(email)
            .fillPassword(password)
            .submit();

        cy.wait(10000);
        
        const profile =  home.goToProfile();
        cy.wait(20000);
        const meusEnderecos = profile.goToMyAddresses();
        const cadastroEndereco =  meusEnderecos.goToNewAddress();
        cy.wait(10000);

        cadastroEndereco
            .fillCEP(CEP)
            .clickSearchCEP();
        cy.wait(15000);

        cadastroEndereco
            .fillNickname(Nickname)
            .fillAddressNumber(AddressNumber)
            .fillPhoneNumber(PhoneNumber)
            .fillComplemento(Complemento)
            .fillReferencePoint(ReferencePoint)
            .submit();
        
        cy.wait(1000);

        //não está salvando o novo endereço

    });
    

    it('should not allow to write in disabled fields', () =>{
        cy.viewport(1920, 1200);
        const home = new HomePage();
        home.visit();
        cy.wait(20000);

         // clicar para fechar a modal intermitente em stage
         cy.get('body').then(($body) => {
            if ($body.text().includes('Temos alguns problemas com produtos similares. Isso deve funcionar muito em breve!')) {
              cy.log('modal apareceu');
              cy.get('.modal-footer > .btn > span').click({force:true});
            } else {
              cy.log('modal não apareceu')
            }
        });

        const login = home.goToSignIn();
        login
            .fillEmail(email)
            .fillPassword(password)
            .submit();

        cy.wait(10000);
        
        const profile =  home.goToProfile();
        cy.wait(20000);
        const meusEnderecos = profile.goToMyAddresses();
        const cadastroEndereco =  meusEnderecos.goToNewAddress();
        cy.wait(10000);

        cadastroEndereco
            .fillCEP(CEP)
            .clickSearchCEP();
        cy.wait(1000);


        //campos que deveriam estar inativos
        cy.get('#input-bairro').should('be.disabled');
        cy.get('#input-cidade').should('be.disabled');
        cy.get('#input-endereco').should('be.disabled');
        cy.get('#input-logradouro').should('be.disabled');
        cy.get('#input-uf').should('be.disabled');


    });

   
    

});

