import MuiTextField, { TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField';
import { Controller } from 'react-hook-form';

import type { ControlledComponentProps } from '../types';

export type FormTextFieldProps = ControlledComponentProps & {
  TextFieldProps?: MuiTextFieldProps;
};

export const FormTextField = ({
  control,
  name,
  TextFieldProps,
}: FormTextFieldProps): JSX.Element => (
  <Controller
    name={name}
    control={control}
    render={({ field }) => <MuiTextField {...field} {...TextFieldProps} />}
  />
);
