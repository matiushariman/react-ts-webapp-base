/** true for test or when development && REACT_APP_ENABLE_MOCK */
export const IS_MOCK_ENABLED =
  process.env.NODE_ENV === 'test' ||
  (process.env.NODE_ENV === 'development' && process.env.REACT_APP_ENABLE_MOCK === 'true');
