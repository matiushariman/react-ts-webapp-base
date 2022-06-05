import { useDispatch as useAppDispatch } from 'react-redux';

import type { AppDispatch } from 'configureStore';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useDispatch = () => useAppDispatch<AppDispatch>();
