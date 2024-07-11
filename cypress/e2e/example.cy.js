it('Check The Input field', () => {
    cy.visit('/'); // Navigate to the home page
    cy.get('input').type('Mouse'); // Get the input field and type 'Mouse'
    cy.get('button').click(); // Click the button
    cy.contains('Welcome, Mouse'); // Verify that the text 'Welcome, Mouse' is present
  });
  