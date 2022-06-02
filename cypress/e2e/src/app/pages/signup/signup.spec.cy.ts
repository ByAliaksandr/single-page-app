describe('Signup page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should open the signup page', () => {
    cy.contains('Sign Up');
  });

  it('should display 4 required errors if forms inputs are not set', () => {
    cy.get('[data-test-id="submit-button"]').click();

    cy.get('mat-error').should('have.length', 4);
  });

  it('should navigate to home page', () => {
    cy.get('[formcontrolname="firstname"]').type('Aaa');
    cy.get('[formcontrolname="lastname"]').type('Bbb');
    cy.get('[formcontrolname="email"]').type('aaa@bbb');
    cy.get('[formcontrolname="password"]').type('ddddDDDD');

    cy.get('[data-test-id="submit-button"]').click();

    cy.location('pathname').should('include', '/home');
  });
});
