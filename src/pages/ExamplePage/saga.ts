import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest, SagaReturnType } from 'redux-saga/effects';

import { submitCredential, SubmitCredentialRequestProps } from 'api/exampleApi';
import { enqueueToast } from 'services/Toast/actions';
import {
  submitCredentialRequest,
  submitCredentialSuccess,
  submitCredentialFailure,
} from './actions';

function* submitCredentialSaga({ payload }: PayloadAction<SubmitCredentialRequestProps>) {
  try {
    const response: SagaReturnType<typeof submitCredential> = yield call(submitCredential, payload);

    yield put(enqueueToast({ message: 'Hooray!', variant: 'success' }));
    yield put(submitCredentialSuccess(response.data));
  } catch (err) {
    yield put(submitCredentialFailure());
  }
}

export default function* examplePageSaga() {
  yield takeLatest(submitCredentialRequest, submitCredentialSaga);
}
