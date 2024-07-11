describe('Register Page E2E testing', () => {
    beforeEach(() => {
        cy.fixture('user').then((user) => {
            this.userData=user
        });
    });

    it('Testing Register Page Fun', function() { // use function() to access this context
        cy.visit('/register');
        cy.get('h1').should('contain', 'Register Here!');
        cy.get('input[name="name"]').type(this.userData.name);
        cy.get('input[name="email"]').type(this.userData.email); // fixed to use userData.email
        cy.get('input[name="password"]').type('123456789');
        cy.get('button[type="submit"]').click({ multiple: true });
    });
});