import React from 'react';
import { createRoot } from 'react-dom/client';
import AppContainer from './components/AppContainer';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <AppContainer />
  </React.StrictMode>
);
