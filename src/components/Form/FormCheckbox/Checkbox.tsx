import MuiCheckbox, { CheckboxProps as MuiCheckboxProps } from '@mui/material/Checkbox';
import FormControl, { FormControlProps } from '@mui/material/FormControl';
import FormControlLabel, { FormControlLabelProps } from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormHelperText, { FormHelperTextProps } from '@mui/material/FormHelperText';

export type CheckboxProps = MuiCheckboxProps & {
  error?: FormControlProps['error'];
  helperText?: FormHelperTextProps['children'];
  label: FormControlLabelProps['label'];
};

export const Checkbox = ({
  checked,
  disabled,
  color,
  error,
  helperText,
  label,
  onChange,
  name,
}: CheckboxProps): JSX.Element => (
  <FormControl disabled={disabled} component="fieldset" error={error}>
    <FormGroup>
      <FormControlLabel
        control={<MuiCheckbox checked={checked} color={color} onChange={onChange} name={name} />}
        label={label}
      />
    </FormGroup>
    {helperText ? <FormHelperText>{helperText}</FormHelperText> : null}
  </FormControl>
);
