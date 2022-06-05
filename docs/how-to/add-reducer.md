# Reducer

## Pre-requisite(s)

- [Reducer in Redux](https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow#reducers)

## How to add reducer?

For every single feature set/component that requires reducer,

As the first step, we need to add a `reducer.ts` file into the same folder as the component that requires it.

```
webapp/
  |- src/
  |  |- pages/
  |  |  |- ExamplePage
  |  |  |- index.tsx
  |  |  |- reducer.ts
```

Second, in our new `reducer.ts` file we need to import `createReducer` function of [@reduxjs/toolkit](https://redux-toolkit.js.org/).

```typescript
import { createReducer } from '@reduxjs/toolkit';
```

Third, initialize the initialState of the reducer and the type of the state.

```typescript
import { createReducer } from '@reduxjs/toolkit';

export type ExamplePageInitialStateProps = {
  number: number;
};

export const ExamplePageInitialState: ExamplePageInitialStateProps = {
  number: 0,
};
```

Fourth, initialize the reducer using `createReducer`function and set initialState as the first parameter.

```typescript
import { createReducer } from '@reduxjs/toolkit';

export type ExamplePageInitialStateProps = {
  number: number;
};

export const ExamplePageInitialState: ExamplePageInitialStateProps = {
  number: 0,
};

export const examplePageReducer = createReducer(initialState, (builder) => {});
```

Fifth, if we have an action that we want to dispatch that will ultimately affect the state of this reducer. We can do so by importing it from an `actions.ts` file and implement the logic accordingly.

```typescript
import { createReducer } from '@reduxjs/toolkit';

import { add } from './actions';

export type ExamplePageInitialStateProps = {
  number: number;
};

export const ExamplePageInitialState: ExamplePageInitialStateProps = {
  number: 0,
};

export const examplePageReducer = createReducer(initialState, (builder) =>
  builder.addCase(add, (state) => {
    state.number += 1;
  }),
);
```

Finally, the most important part is we have to make sure that the newly created reducer is imported as part of the root reducer in `reducers.ts` file in the root of src/.

## Additional Resources

- [Writing Reducers][https://redux-toolkit.js.org/usage/usage-guide#writing-reducers]
