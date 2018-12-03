
import HomePage from '../integration/Pages/HomePage.js';
import MyProfilePage from '../integration/Pages/MyProfilePage.js';
import EditAccountPFPage from '../integration/Pages/EditAccountPFPage.js';
import utils from './utils/utils';
import { ifError } from 'assert';



describe ('Edit my account PF smoke test' , () =>{

    const email = Cypress.env('pfUser');
    const password = Cypress.env('password');
    const name = 'Automated Test PF';
    const birth = '10111995';
    const CPF = '387.408.024-26';
    const phone = '48999999999';
    

    afterEach(function(){
        cy.clearLocalStorage();
        cy.clearCookies();
        sessionStorage.clear();
    });

    it('should edit my profile', () =>{
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
        })
    
        
    
        const login = home.goToSignIn();
        login
            .fillEmail(email)
            .fillPassword(password)
            .submit();
    
        cy.wait(10000);
        
        const profile =  home.goToProfile();
        cy.wait(15000);
        const minhaconta = profile.goToEditPFAccount();

        minhaconta
            .fillName(name)
           // .fillEmail(email)
           // .fillCPF(CPF)
            .fillBirthDate(birth)
            .fillPhoneNumber(phone)
            .selectRadioFemale()
            .selectRadioMale()
            .selectPromoEmail()
            .selectPartnerEmail()
            .submit();
        
        cy.wait(10000);
    
    });

    it('should edit my profile', () =>{
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
        })
    
        const login = home.goToSignIn();
        login
            .fillEmail(email)
            .fillPassword(password)
            .submit();
    
        cy.wait(10000);
        
        const profile =  home.goToProfile();
        cy.wait(15000);
        const minhaconta = profile.goToEditPFAccount();

        minhaconta
            .fillName(name)
           // .fillEmail(email)
           // .fillCPF(CPF)
            .fillBirthDate(birth)
            .fillPhoneNumber(phone)
            .selectRadioFemale()
            .selectRadioMale()
            .selectPromoEmail()
            .selectPartnerEmail()
            .submit();
        
        cy.wait(10000);
    
    });

});








