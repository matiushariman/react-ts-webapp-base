import { fork } from 'redux-saga/effects';

import examplePageSaga from 'pages/ExamplePage/saga';

export function* rootSaga() {
  yield fork(examplePageSaga);
}
