import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

import { Helmet } from 'components/Helmet';
import { ExampleForm } from './ExampleForm';
import { ExamplePageHeadline } from './ExamplePageHeadline';

const ExamplePageContainer = styled(Container)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
}));

const ExamplePage = (): JSX.Element => (
  <>
    <Helmet title="Example" />
    <Box display="flex" flexDirection="column" flexGrow={1}>
      <ExamplePageContainer>
        <Box paddingTop={3} paddingBottom={3}>
          <Grid alignItems="center" spacing={3} container>
            <Grid item xs={12} md={7}>
              <ExamplePageHeadline />
            </Grid>
            <Grid item xs={12} md={5}>
              <Box display="flex" justifyContent="center">
                <ExampleForm />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </ExamplePageContainer>
    </Box>
  </>
);

export default ExamplePage;
