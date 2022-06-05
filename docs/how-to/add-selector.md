# Selectors

A selector is basically a function that accepts redux state as a parameter and returns the data required (as it is, or transformed) from the state itself.

Non-computationally heavy business logic that will ultimately affect the UI state should always be written as part of selector.

It is highly encouraged to use `select` prefix when naming your selector.

## How to add selector(s)?

For every single feature set/component that requires saga,

As the first step, we need to add a `selectors.ts` (plural) file into the same folder as the component that requires it.

```
webapp/
  |- src/
  |  |- pages/
  |  |  |- ExamplePage
  |  |  |- index.tsx
  |  |  |- selectors.ts
```

Second, import the type of RootState from `configureStore.ts` file and write down one of the redux states that we want to select.

```typescript
import type { RootState } from 'configureStore';

const examplePageSelector = (state: RootState) => state.examplePage;
```

Third, import `createSelector` function from [@reduxjs/toolkit](https://redux-toolkit.js.org/) and write down your selector.

```typescript
import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from 'configureStore';

const examplePageSelector = (state: RootState) => state.examplePage;

export const selectSomething = createSelector(
  examplePageSelector,
  (examplePage) => examplePage.something,
);
```
