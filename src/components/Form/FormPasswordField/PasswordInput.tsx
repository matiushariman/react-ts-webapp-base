import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { useState, forwardRef } from 'react';

export type PasswordInputProps = TextFieldProps;

// eslint-disable-next-line react/display-name
export const PasswordInput = forwardRef<HTMLDivElement, PasswordInputProps>(
  (props: PasswordInputProps, ref): JSX.Element => {
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
    const inputType = isPasswordVisible ? 'text' : 'password';

    const handleToggleInputType = () => {
      setIsPasswordVisible(!isPasswordVisible);
    };

    return (
      <TextField
        {...props}
        inputRef={ref}
        type={inputType}
        InputProps={{
          sx: {
            paddingRight: 0,
          },
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleToggleInputType}
                onMouseDown={handleToggleInputType}
                type="button"
              >
                {isPasswordVisible ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    );
  },
);
