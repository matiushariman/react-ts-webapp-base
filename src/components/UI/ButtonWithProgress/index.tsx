import Box from '@mui/material/Box';
import Button, { ButtonProps } from '@mui/material/Button';
import CircularProgress, {
  CircularProgressProps as MuiCircularProgressProps,
} from '@mui/material/CircularProgress';

export type ButtonWithProgress = ButtonProps & {
  CircularProgressProps?: MuiCircularProgressProps;
  loading?: boolean;
};

export const ButtonWithProgress = ({
  children,
  CircularProgressProps = {},
  loading = false,
  ...rest
}: ButtonWithProgress): JSX.Element => (
  <Box sx={{ m: 1, position: 'relative' }}>
    <Button {...rest}>{children}</Button>
    {loading && (
      <CircularProgress
        size={24}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          marginTop: '-12px',
          marginLeft: '-12px',
        }}
        {...CircularProgressProps}
      />
    )}
  </Box>
);
