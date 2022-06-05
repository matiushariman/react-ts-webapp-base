import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FormControl from '@mui/material/FormControl';
import FormHelperText, { FormHelperTextProps } from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import MenuItem, { MenuItemProps } from '@mui/material/MenuItem';
import MuiSelect, { SelectProps as MuiSelectProps } from '@mui/material/Select';

export type SelectOptionsProps = {
  label: MenuItemProps['children'];
  value: MenuItemProps['value'];
};

export type BaseSelectProps = MuiSelectProps & {
  helperText?: FormHelperTextProps['children'];
};

export type SelectProps = BaseSelectProps & {
  options: SelectOptionsProps[];
};

export const Select = ({
  disabled,
  error,
  helperText,
  label,
  labelId,
  variant,
  options,
  ...rest
}: SelectProps): JSX.Element => (
  <FormControl disabled={disabled} error={error} variant={variant}>
    {label ? <InputLabel id={labelId}>{label}</InputLabel> : null}
    <MuiSelect
      label={label}
      labelId={labelId}
      variant={variant}
      IconComponent={KeyboardArrowDownIcon}
      {...rest}
    >
      {options.map((option, i) => (
        <MenuItem
          key={typeof option.label === 'string' ? option.label : `option-${labelId}-${i + 1}`}
          value={option.value}
        >
          {option.label}
        </MenuItem>
      ))}
    </MuiSelect>
    {helperText ? <FormHelperText>{helperText}</FormHelperText> : null}
  </FormControl>
);
