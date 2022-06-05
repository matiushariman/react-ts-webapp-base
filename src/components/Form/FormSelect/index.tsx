import { Controller } from 'react-hook-form';

import { Select, BaseSelectProps, SelectProps as DefaultSelectProps } from './Select';
import type { ControlledComponentProps } from '../types';

export type FormSelectProps = ControlledComponentProps & {
  SelectProps?: BaseSelectProps;
  options: DefaultSelectProps['options'];
};

export const FormSelect = ({
  name,
  control,
  options,
  SelectProps,
}: FormSelectProps): JSX.Element => (
  <Controller
    name={name}
    control={control}
    render={({ field }) => <Select {...field} options={options} {...SelectProps} />}
  />
);
