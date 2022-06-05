import Grid from '@mui/material/Grid';
import { useFormContext } from 'react-hook-form';

import { FormTextField, FormPasswordField } from 'components/Form';
import { hasOwnProperty } from 'utils/jsUtils';

import type { ExampleFormValuesProps } from '.';

export const PASSWORD_FIELD_TESTID = 'password-field';

export const ExampleFormFields = (): JSX.Element => {
  const {
    control,
    formState: { errors },
  } = useFormContext<ExampleFormValuesProps>();

  return (
    <Grid spacing={2} container>
      <Grid item xs={12}>
        <FormTextField
          TextFieldProps={{
            id: 'email-field',
            error: hasOwnProperty(errors, 'email'),
            helperText: errors?.email?.message,
            label: 'Email',
            fullWidth: true,
          }}
          control={control}
          name="email"
        />
      </Grid>
      <Grid item xs={12}>
        <FormPasswordField
          TextFieldProps={{
            id: 'password-field',
            error: hasOwnProperty(errors, 'password'),
            helperText: errors?.password?.message,
            label: 'Password',
            type: 'password',
            fullWidth: true,
            inputProps: {
              'data-testid': PASSWORD_FIELD_TESTID,
            },
          }}
          control={control}
          name="password"
        />
      </Grid>
    </Grid>
  );
};
