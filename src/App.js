import React from 'react';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import './App.css';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import ScopedCssBaseline from '@mui/material/CssBaseline';

export default function App() {
  const defaultTheme = createTheme({
    
    palette: {
      mode: 'dark',
    },
  });
  debugger;
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <ScopedCssBaseline>
          <Grid container>
            <Grid xs={12}>
              <Typography variant="h4">Hello StackBlitz!</Typography>
              <Typography variant="body2">
                Start editing to see some magic happen :)
              </Typography>
              <ButtonComponent>Button</ButtonComponent>
            </Grid>
          </Grid>
        </ScopedCssBaseline>
      </ThemeProvider>
    </>
  );
}
