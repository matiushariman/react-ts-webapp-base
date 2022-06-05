# Saga

Every React application needs a way to handle side-effects (i.e asynchronous operations like API call).
For us, we choose [redux-saga](https://redux-saga.js.org/) to be the library that enables us to do so instead of lets say `redux-thunk` because it enables us to perform asynchronous flows in such a way that it feels more like a synchronous operations.

For more information about the basic of redux-saga, please visit [redux-saga website](https://redux-saga.js.org/)

## How to add saga?

For every single feature set/component that requires saga,

As the first step, we need to add a `saga.ts` file into the same folder as the component that requires it.

```
webapp/
  |- src/
  |  |- pages/
  |  |  |- ExamplePage
  |  |  |- index.tsx
  |  |  |- saga.ts
```

Second, in our new `saga.ts` file. Write a generator function that will be executed upon dispatch of certain action.

```typescript
function* certainActionSaga() {}
```

Third, import necessary saga function (i.e call, put) from `redux-saga/effects` that will be required by the generator function along with necessary function like an API promise function and actions.

The actions usually consist of 2: success & failure.

```typescript
import { call, put } from 'redux-saga/effects';

import { certainActionApi } from 'api';

import { certainActionSuccess, certainActionFailure } from './actions';

function* certainActionSaga() {
  try {
    const response = yield call(certainActionApi);

    yield put(certainActionSuccess(response));
  } catch (err) {
    yield put(certainActionFailure(err));
  }
}
```

What happens in the try-catch statement above is: if every single line of code in the try statement is successfully executed, `certainActionSuccess` function will be dispatched. Else, an error will be thrown and catch and `certainActionFailure` will be dispatched.

Fourth, add another generator function that will act as the host of every single saga functions that we want to have in that particular saga file.

```typescript
import { call, put, takeLatest } from 'redux-saga/effects';

import { certainActionApi } from 'api';

import { certainActionRequest, certainActionSuccess, certainActionFailure } from './actions';

function* certainActionSaga() {
  try {
    const response = yield call(certainActionApi);

    yield put(certainActionSuccess(response));
  } catch (err) {
    yield put(certainActionFailure(err));
  }
}

export default function* examplePageSaga() {
  yield takeLatest(certainActionRequest, certainActionSaga);
}
```

Last but not least, make sure that the newly created saga file is imported as part of the root saga in `sagas.ts` file in the src root.
