import userEvent from '@testing-library/user-event';

import { render, screen } from 'utils/testUtils';

import ExamplePage from '..';
import { PASSWORD_FIELD_TESTID } from '../ExampleForm/ExampleFormFields';

describe('ExamplePage', () => {
  const setup = () => render(<ExamplePage />);

  describe('successful submission', () => {
    test('display message if user is successfully logged in', async () => {
      setup();

      // type email
      const emailField = screen.getByLabelText(/email/i);
      userEvent.type(emailField, 'matius.hariman@gmail.com');

      // type password
      const passwordField = screen.getByTestId(PASSWORD_FIELD_TESTID);
      userEvent.type(passwordField, 'Matius@123');

      // submit form
      const submitBtn = await screen.findByRole('button', { name: /submit/i });
      userEvent.click(submitBtn);

      // message is displayed
      const loginMessage = await screen.findByText(/you are logged in/i);
      expect(loginMessage).toBeInTheDocument();
    });
  });

  describe('errors', () => {
    // email field
    describe('email error', () => {
      test('display invalid email error if email is not an email', async () => {
        setup();

        // type email
        const emailField = screen.getByLabelText(/email/i);
        userEvent.type(emailField, 'matius');

        const invalidEmailMessage = await screen.findByText(/must be a valid email/i);
        expect(invalidEmailMessage).toBeInTheDocument();
      });

      test('display email is required error if email is empty', async () => {
        setup();

        // type email
        const emailField = screen.getByLabelText(/email/i);
        userEvent.type(emailField, 'a');
        userEvent.clear(emailField);

        const invalidEmailMessage = await screen.findByText(/required field/i);
        expect(invalidEmailMessage).toBeInTheDocument();
      });
    });

    // password field
    describe('password error', () => {
      test('display password is required error if password is empty', async () => {
        setup();

        // type password
        const passwordField = screen.getByTestId(PASSWORD_FIELD_TESTID);
        userEvent.type(passwordField, 'Matius@123');
        userEvent.clear(passwordField);

        const invalidPasswordMessage = await screen.findByText(/required field/);
        expect(invalidPasswordMessage).toBeInTheDocument();
      });
    });
  });
});
