import HomePage from '../integration/Pages/HomePage.js';
import RegisterPjPage from '../integration/Pages/RegisterPjPage.js';
import Utils from './utils/utils';
import { ifError } from 'assert';

describe('Gimba Cadastro de PJ Test',  () => {
    const utils = new Utils();
    const email =  utils.generateRandomEmail();
    const password = Cypress.env('password');
    const razao = 'abc';
    const CNPJ = utils.gerarCnpj(false) ;
    const IE = '123';
    const CEP = '123';
    const PhoneNumber = '9999999999';
    const AddressNumber = '123';
    const complemento = '123';
    const referencepoint = 'abc';
    const nomefantasia = 'abc';
    const ramal = '123';
    const name = 'abc'


      afterEach(function(){
        cy.clearLocalStorage();
        cy.clearCookies();
        sessionStorage.clear();
      });

      it('should not allow to register without CEP', () =>{
        const home = new HomePage();
        home.visit();

        // clicar para fechar a modal intermitente em stage
        cy.get('body').then(($body) => {
          if ($body.text().includes('Temos alguns problemas com produtos similares. Isso deve funcionar muito em breve!')) {
            cy.log('modal apareceu');
            cy.get('.modal-footer > .btn > span').click({force:true});
          } else {
            cy.log('modal não apareceu')
          }
        });

        const cadastroPJ = home.goToRegister();
        cy.wait(20000);
        cadastroPJ.submit();
        cadastroPJ.getCEPerror().should('be.visible');

    });


      it('should not accept existing informations', () =>{
          
        const home = new HomePage();
        home.visit();
        cy.wait(15000);

        // clicar para fechar a modal intermitente em stage
        cy.get('body').then(($body) => {
          if ($body.text().includes('Temos alguns problemas com produtos similares. Isso deve funcionar muito em breve!')) {
            cy.log('modal apareceu');
            cy.get('.modal-footer > .btn > span').click({force:true});
          } else {
            cy.log('modal não apareceu')
          }
        });

        const cadastroPJ = home.goToRegister();

        cadastroPJ
            .clickPJ()
            .fillEmail(email)
            .fillPassword(password)
            .fillPhoneNumber(PhoneNumber)
            .fillFullName(name)
            .fillRazaoSocial(razao)
            .fillCNPJ(CNPJ)
            //.clickRole()
            .fillRamal(ramal)
            .fillNomeFantasia(nomefantasia)
            //.clickActivityField()
            //.fillCEP(CEP)
            //.submitAddress()
            //.fillAddressNumber(AddressNumber)
            //.fillComplemento(complemento)
            //.fillIE(IE)
            //.fillReferencePoint(referencepoint)
            .clickReceivePromoEmail()
            .clickReceivePartnerEmail()
            .submit();

        // pesquisa de cep e selects de actividade e cargo não estão fucnionando
    
        cy.wait(10000);
        cadastroPJ.getCEPerror().should('be.visible');

        });

});