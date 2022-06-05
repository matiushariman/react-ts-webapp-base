import { useSnackbar } from 'notistack';
import { useEffect } from 'react';

import { useSelector, useDispatch } from 'hooks';

import { removeToast } from './actions';
import { selectToastData } from './selectors';

import type { ToastDataProps } from './reducer';

let displayed: ToastDataProps['key'][] = [];

export const Toast = (): null => {
  const dispatch = useDispatch();
  const data = useSelector(selectToastData);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const storeDisplayed = (id: ToastDataProps['key']) => {
    displayed = [...displayed, id];
  };

  const removeDisplayed = (id: ToastDataProps['key']) => {
    displayed = [...displayed.filter((key) => id !== key)];
  };

  useEffect(() => {
    data.forEach(({ key, message, options = {}, dismissed = false }) => {
      if (dismissed) {
        // dismiss snackbar using notistack
        closeSnackbar(key);
        return;
      }

      // do nothing if snackbar is already displayed
      if (displayed.includes(key)) return;

      // display snackbar using notistack
      enqueueSnackbar(message, {
        key,
        ...options,
        onClose: (event, reason, myKey) => {
          if ('onClose' in options) {
            if (options.onClose !== undefined) {
              options.onClose(event, reason, myKey);
            }
          }
        },
        onExited: (event, myKey) => {
          // removen this snackbar from redux store
          dispatch(removeToast({ key: myKey }));
          removeDisplayed(myKey);
        },
      });

      // keep track of snackbars that we've displayed
      storeDisplayed(key);
    });
  }, [data, closeSnackbar, enqueueSnackbar, dispatch]);

  return null;
};
