

context('Plotly test', () => {
    beforeEach(() => {
        Cypress.Cookies.debug(true);
        cy.visit('https://cypress.io')
    })


    it('Should scroll to "Loved by OSS, trusted by Enterprise" and check weekly downloads', () => {
        cy.contains('Loved by OSS, trusted by Enterprise').scrollIntoView()
          .should('be.visible');
          cy.get('[class="grow"]')
            .should('be.visible')
            .contains("5M+")
            .should('be.visible');
     
    });

    it('Should navigate to Company tab', () => {
        cy.get('[data-cy="dropdown-company"]')
            .should('have.attr', 'href', '/about-us')
            .click()
            .then(()=>{
                cy.contains('About us');
            });

    });

    it('Should click on Install and verify "npm install cypress" command', () => {

        cy.get('[data-cy="dropdown-company"]')
            .should('have.attr', 'href', '/about-us')
            .click()
            .then(()=>{
                cy.contains('Install').click({force: true})
                    .then(()=>{
                        cy.get('[data-cy="modal-install-copy"]')
                        .contains('npm install cypress')
                        .click({force: true});
                        cy.task('getClipboardContents').should('eq', 'npm install cypress --save-dev');
                    })
               
            })
    });

    it('Should navigate to the Visual Review page', () => {
        cy.get('[data-cy="dropdown-product"]')
            .trigger('mouseover').then(()=>{
                cy.get('[class="group flex flex-row items-center text-teal-500 sm:text-gray-700 sm:hover:text-teal-600"]')
                .eq(1)
                .click({force: true});
            })   
    });

    it('Bonus: Should navigate to the smart Orchestration and verify header btn green border', () => {
        cy.get('[data-cy="dropdown-product"]')
            .trigger('mouseover').then(()=>{
                cy.get('[class="font-secondary text-[14px] font-normal leading-[20px]"]').eq(5).click()
                .then(()=>{
                    cy.get('[class="mb-[8px] inline-block font-primary text-[18px] leading-[28px] text-gray-700"]').eq(2).scrollIntoView()
                    .then(()=>{
                        cy.get('[class="whitespace-nowrap rounded-full border px-[12px] py-[4px] text-[16px] leading-[24px] transition-colors border-jade-200 bg-white text-teal-600"]')
                        .should($el => {
                            const style = window.getComputedStyle($el[0]);
                            expect(style.borderColor).to.equal('rgb(163, 231, 203)'); // Green border check 
                        });
                    });   
                });
            });
    });

});