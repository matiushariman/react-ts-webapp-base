# Integration Testing

The idea of integration test is to test the application "as a user would".

With this mindset in mind, we will be able to significantly reduce the number of tests written while at the same time focusing on testing things that actually matter.

The line between unit test and integration is a little bit fuzzy most of the time. But basically the definition of integration test in our application development is testing the entire page as a whole feature with/without HTTP requests (mocked via [msw](https://mswjs.io/) if there is any).

## Example of Integration Test

Let's say we have a feature called ExamplePage, which contains a form logic as follows:

1. User should enter username.
2. User should enter password.
3. An HTTP requests with username & password payload will be sent upon submit button click.

The first step, that we need to do is to create a test file in a `__tests__` folder (i.e `__tests__/ExamplePage.test.tsx`).

Second step is to import the component that we want to test, along with [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/) function that we want to use. Or using this codebase, we will import the overriden version of it from `utils/testUtils`.

```typescript
import { render, screen } from 'utils/testUtils';
import { ExamplePage } from '..';
```

Third step is to describe which component you are testing.

```typescript
import { render, screen } from 'utils/testUtils';
import { ExamplePage } from '..';

describe('ExamplePage', () => {});
```

Fourth step, define the test case (what it should do).

```typescript
import { render, screen } from 'utils/testUtils';
import { ExamplePage } from '..';

describe('ExamplePage', () => {
  it('should be able to successfully log in with correct username and password', async () => {});
});
```

Last step, define the logic that you need to write in order to achieve the scenario and the expected behaviour.

```typescript
import { render, screen } from 'utils/testUtils';
import { ExamplePage } from '..';

describe('ExamplePage', () => {
  it('should be able to successfully log in with correct username and password', async () => {
    // type username
    const userNameField = screen.getByLabelText(/username/i);
    userEvent.type(userNameField, 'matius.hariman@gmail.com');

    // type password
    const passwordField = screen.getByLabelText(/password/i);
    userEvent.type(passwordField, 'Matius@123');

    // submit form
    const submitBtn = await screen.findByRole('button', { name: /submit/i });
    userEvent.click(submitBtn);

    // message is displayed
    const loginMessage = await screen.findByText(/you are logged in/i);
    expect(loginMessage).toBeInTheDocument();
  });
});
```
