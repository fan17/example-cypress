describe('The Home Page', function() {
    it('successfully loads', function() {
        cy.visit('/') // change URL to match your dev URL

        cy.get('h1').should('contain', 'Cypress!');

        cy.get('form.login').should('exist').and('have.attr', 'action', '/');
        cy.get('form.login').find('input[name="email"]').should('exist');
        cy.get('form.login').find('input[name="password"]').should('exist');
        cy.get('form.login').find('input[type="submit"]').should('exist');
    })
})