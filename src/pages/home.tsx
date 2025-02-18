

import { Grid, Stack, Typography } from '@mui/material';

const HomePage = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Typography variant="h2">Left</Typography>
          <Typography variant="h2">Sidebar</Typography>
        </Stack>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h2">Right</Typography>
      </Grid>
    </Grid>
  );
};

export default HomePage;
