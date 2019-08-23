

context('Linked in tests', () => {
    beforeEach(() => {
        Cypress.Cookies.debug(true)
    })

    // it('go to Cypress.io', () => {
    //
    //     cy.visit('https://example.cypress.io')
    //     cy.contains('type').click()
    //     cy.get('#email1')
    //         .type('fake@email.com')
    //         .should('have.value', 'fake@email.com')
    //
    //
    //     cy.get('.action-disabled')
    //     // Ignore error checking prior to type
    //     // like whether the input is visible or disabled
    //         .type('disabled error checking', { force: true })
    //         .should('have.value', 'disabled error checking')
    //
    //     cy.get('.action-focus').focus()
    //         .should('have.class', 'focus')
    //         .prev().should('have.attr', 'style', 'color: orange;')
    //
    //     cy.get('.action-blur').type('About to blur').blur()
    //         .should('have.class', 'error')
    //         .prev().should('have.attr', 'style', 'color: red;')
    //
    // });


    //
    it('go to SSENSE', () => {

        cy.visit('https://www.ssense.com?fgfgfgfg');
        //cy.clearCookies()
        cy.get('.desktop-search-container > .hidden-tablet-landscape').click()
        //cy.get('.header-search-input').type('gucci{enter}');
        cy.getCookie('guest_checkout_enabled')
            .should('have.property', 'value', 'true')

        //cy.setCookie('guest_checkout_enabled','false')

    });
    //
    // it('go to Linkedin', () => {
    //
    //     cy.visit('https://linkedin.com/login');
    //
    //     cy.get('#username').clear();
    //     cy.get('#username').type('ranbir.singh.523@gmail.com');
    //     cy.get('#password').clear();
    //     cy.get('#password').type('Waheguru@999');
    //     cy.get('.btn__primary--large').click();
    //     cy.get('.search-global-typeahead__input').type('Smilona bhuyan{enter}')
    //     cy.get('.name').click()
    //     cy.wait(999);
    //     cy.contains('Message').click();
    //     for (let i=0;i<2;i++)
    //     {
    //         cy.get('.msg-form__contenteditable > p').type("😋")
    //         cy.get('.msg-form__send-button').click()
    //     }
    //
    // });


});