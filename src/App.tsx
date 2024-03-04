
import React from 'react';
import AppRoutes from './routes';
import {MantineProvider, Grid} from '@mantine/core';
import '@mantine/core/styles.css';


function App() {
  return (
    <MantineProvider >
      <AppRoutes />
    </MantineProvider>
  );
}

export default App;

