# Testing

- [E2E Testing](e2e-testing.md)
- [Integration Testing](integration-testing.md)

Testing is and has always been an integral part of development. It gives confidence that
the application will work as expected based on the requirements given.

We do support multiple layers of testing, but as the bare minimum [Integration Testing](integration-testing.md) is encouraged to have in our application development.

We use [jest](https://jestjs.io/) framework to run tests and make assertions.

For example,

we have this function

```typescript
const add = (x: number, y: number) => x + y;
```

First step, we need to `describe` the function that we want to test above.

```typescript
describe('add()', () => {});
```

Second step, we need to tell jest the test case(s)/what `it` should do.

```typescript
describe('add()', () => {
  it('should add x + y', () => {});
});
```

Third step, we need to write down what's expected.

```typescript
describe('add()', () => {
  it('should add x + y', () => {
    const result = add(2, 3);

    expect(result).toEqual(5);
  });
});
```
