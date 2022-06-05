import Slider, { SliderProps as MuiSliderProps } from '@mui/material/Slider';
import { Controller } from 'react-hook-form';

import type { ControlledComponentProps } from '../types';

export type FormSliderProps = ControlledComponentProps & {
  SliderProps?: MuiSliderProps;
};

export const FormSlider = ({ name, control, SliderProps = {} }: FormSliderProps): JSX.Element => (
  <Controller
    name={name}
    control={control}
    render={({ field }) => (
      <Slider
        value={field.value}
        onChange={(e, newValue) => field.onChange(newValue)}
        {...SliderProps}
      />
    )}
  />
);
