import { yupResolver } from '@hookform/resolvers/yup';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import * as Yup from 'yup';

import { ButtonWithProgress } from 'components/UI';
import { useDispatch, useSelector } from 'hooks';

import { ExampleFormFields } from './ExampleFormFields';
import { ExampleFormHeader } from './ExampleFormHeader';
import { submitCredentialRequest } from '../actions';
import {
  selectExamplePageIsCredentialAuthenticated,
  selectSubmitCredentialLoading,
} from '../selectors';

const ExampleFormContent = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(4),
  paddingTop: theme.spacing(3),
  '&:last-child': {
    paddingBottom: theme.spacing(4),
  },
}));

const examplePageFormSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

export type ExampleFormValuesProps = {
  email: string;
  password: string;
};

export const ExampleForm = (): JSX.Element => {
  const methods = useForm<ExampleFormValuesProps>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
    resolver: yupResolver(examplePageFormSchema),
  });
  const isBnDisabled = !methods.formState.isValid;

  const dispatch = useDispatch();
  const isCredentialAuthenticated = useSelector(selectExamplePageIsCredentialAuthenticated);
  const isLoading = useSelector(selectSubmitCredentialLoading);

  const onSubmit: SubmitHandler<ExampleFormValuesProps> = (values) => {
    dispatch(submitCredentialRequest(values));
  };

  return (
    <Card>
      <ExampleFormContent>
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            id="example-page-form"
            autoCapitalize="off"
            autoComplete="off"
          >
            <Grid spacing={4} container>
              <Grid item xs={12}>
                <ExampleFormHeader />
              </Grid>
              <Grid item xs={12}>
                <Box minHeight={225}>
                  <ExampleFormFields />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box display="flex" justifyContent="space-around">
                  <ButtonWithProgress
                    loading={isLoading}
                    disabled={isBnDisabled || isLoading}
                    type="submit"
                  >
                    Submit
                  </ButtonWithProgress>
                </Box>
              </Grid>
              {isCredentialAuthenticated ? (
                <Grid item xs={12}>
                  <Typography align="center">You are logged in!</Typography>
                </Grid>
              ) : null}
            </Grid>
          </form>
        </FormProvider>
      </ExampleFormContent>
    </Card>
  );
};
