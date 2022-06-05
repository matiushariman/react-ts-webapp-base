import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Helmet } from 'react-helmet-async';
import { Routes, Route } from 'react-router-dom';

import ExamplePage from 'pages/ExamplePage';
import { NavigatorOnline } from 'services/NavigatorOnline';
import { Toast } from 'services/Toast';

const App = (): JSX.Element => (
  <>
    <Helmet titleTemplate="%s - My App" />
    <AppBar position="static" color="secondary">
      <Toolbar>
        <Typography>React App</Typography>
      </Toolbar>
    </AppBar>
    <Routes>
      <Route element={<ExamplePage />} path="/" />
    </Routes>
    <Toast />
    <NavigatorOnline />
  </>
);

export default App;
