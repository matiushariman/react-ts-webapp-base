/// <reference types="cypress" />

import { PASSWORD_FIELD_TESTID } from '../../../src/pages/ExamplePage/ExampleForm/ExampleFormFields';

describe('react-ts-webapp-base', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('successful login with correct credentials', () => {
    cy.findByTestId(PASSWORD_FIELD_TESTID).type('matius.hariman@gmail.com');
    cy.findByLabelText(/password/i).type('Matius@123');
    cy.findByRole('button', { name: /submit/i }).click();
  });
});
