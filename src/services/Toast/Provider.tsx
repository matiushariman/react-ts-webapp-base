import { SnackbarProvider, SnackbarProviderProps } from 'notistack';

export type ToastProviderProps = SnackbarProviderProps;

export const ToastProvider = ({ children, ...rest }: ToastProviderProps): JSX.Element => (
  <SnackbarProvider
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    autoHideDuration={5000}
    {...rest}
  >
    {children}
  </SnackbarProvider>
);
