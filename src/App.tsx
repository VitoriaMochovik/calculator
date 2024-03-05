
import React from 'react';
import AppRoutes from './routes';
import {MantineProvider} from '@mantine/core';
import '@mantine/core/styles.css';


function App() {
  return (
    <MantineProvider >
      <AppRoutes />
    </MantineProvider>
  );
}

export default App;

