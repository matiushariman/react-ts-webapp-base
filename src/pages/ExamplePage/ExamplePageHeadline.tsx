import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export const ExamplePageHeadline = (): JSX.Element => (
  <Grid spacing={2} container>
    <Grid item xs={12}>
      <Typography color="primary" variant="h1">
        Bacon ipsum dolor amet
      </Typography>
    </Grid>
    <Grid item xs={12}>
      <Typography color="inherit" variant="h2">
        ground round swine turducken fatback bresaola
      </Typography>
    </Grid>
  </Grid>
);
