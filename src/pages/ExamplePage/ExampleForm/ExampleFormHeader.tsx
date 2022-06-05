import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export const ExampleFormHeader = (): JSX.Element => (
  <Grid spacing={1} container>
    <Grid item xs={12}>
      <Typography variant="h3" color="primary">
        Bacon ipsum dolor amet
      </Typography>
    </Grid>
    <Grid item xs={12}>
      <Typography variant="body2">
        tail kevin frankfurter short loin boudin cow pastrami.
      </Typography>
    </Grid>
  </Grid>
);
