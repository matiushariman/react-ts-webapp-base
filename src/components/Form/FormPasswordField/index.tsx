import { Controller } from 'react-hook-form';

import { PasswordInput, PasswordInputProps } from './PasswordInput';
import type { ControlledComponentProps } from '../types';

export type FormPasswordFieldProps = ControlledComponentProps & {
  TextFieldProps?: PasswordInputProps;
};

export const FormPasswordField = ({
  control,
  name,
  TextFieldProps,
}: FormPasswordFieldProps): JSX.Element => (
  <Controller
    name={name}
    control={control}
    render={({ field }) => <PasswordInput {...field} {...TextFieldProps} />}
  />
);
