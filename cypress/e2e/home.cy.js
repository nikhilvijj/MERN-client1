describe('Home Page test', () => {
    it('Check The Input field', () => {
      cy.visit('/'); // Navigate to the home page
      cy.get('input').type('Mouse'); // Get the input field and type 'Mouse'
      cy.get('button').should('be.visible'); // Check if the button is visible
      cy.get('button').click(); // Click the button
    });
  });
  