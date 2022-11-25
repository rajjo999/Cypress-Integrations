

context('Linked in tests', () => {
    beforeEach(() => {
        Cypress.Cookies.debug(true)
    })

    it('go to Cypress.io', () => {
    
        cy.visit('https://example.cypress.io')
        cy.contains('type').click()
        cy.get('#email1')
            .type('fake@email.com')
            .should('have.value', 'fake@email.com')
    
    
        cy.get('.action-disabled')
        // Ignore error checking prior to type
        // like whether the input is visible or disabled
            .type('disabled error checking', { force: true })
            .should('have.value', 'disabled error checking')
    
        cy.get('.action-focus').focus()
            .should('have.class', 'focus')
            .prev().should('have.attr', 'style', 'color: orange;')
    
        cy.get('.action-blur').type('About to blur').blur()
            .should('have.class', 'error')
            .prev().should('have.attr', 'style', 'color: red;')
    
    });


});