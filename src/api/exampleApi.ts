import { AxiosPromise } from 'axios';

import { http } from './http';

export type SubmitCredentialRequestProps = {
  email: string;
  password: string;
};

export const submitCredential = ({
  email,
  password,
}: SubmitCredentialRequestProps): AxiosPromise<{ success: boolean }> =>
  http.post('/login', { email, password });
