import { TypedUseSelectorHook, useSelector as useAppSelector } from 'react-redux';

import type { RootState } from 'reducers';

export const useSelector: TypedUseSelectorHook<RootState> = useAppSelector;
