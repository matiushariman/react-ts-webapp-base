import { createAction } from '@reduxjs/toolkit';

import type { VariantType, SnackbarKey } from 'notistack';

export const enqueueToast = createAction(
  'enqueueToast',
  function prepare({ message, variant = 'default' }: { message: string; variant?: VariantType }) {
    const key = new Date().getTime() + Math.random();

    return {
      payload: {
        notification: {
          message,
          key,
          options: {
            variant,
          },
        },
      },
    };
  },
);

export type RemoveToastProps = {
  key: SnackbarKey;
};

export const removeToast = createAction<RemoveToastProps>('removeToast');
