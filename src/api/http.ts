import axios, { AxiosInstance } from 'axios';

import { IS_MOCK_ENABLED } from 'utils/mockUtils';

const http: AxiosInstance = axios.create({
  ...(!IS_MOCK_ENABLED && {
    baseURL: process.env.REACT_APP_API_BASE_URL,
  }),
});

// axios interceptors: https://axios-http.com/docs/interceptors

/** axios interceptor request logic goes here */
http.interceptors.request.use(
  (config) => config,
  (err) => Promise.reject(err),
);

/** axios interceptor response logic goes here */
http.interceptors.response.use(
  (res) => res,
  (err) => Promise.reject(err),
);

export { http };
