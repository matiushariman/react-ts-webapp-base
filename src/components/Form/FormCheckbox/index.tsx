import { Controller } from 'react-hook-form';

import { Checkbox, CheckboxProps as DefaultCheckboxProps } from './Checkbox';

import type { ControlledComponentProps } from '../types';

export type FormCheckboxProps = ControlledComponentProps & {
  CheckboxProps: DefaultCheckboxProps;
};

export const FormCheckbox = ({ control, name, CheckboxProps }: FormCheckboxProps): JSX.Element => (
  <Controller
    control={control}
    name={name}
    render={({ field }) => (
      <Checkbox
        {...CheckboxProps}
        checked={field.value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => field.onChange(e.target.checked)}
      />
    )}
  />
);
