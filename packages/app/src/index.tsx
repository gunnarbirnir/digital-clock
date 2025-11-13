import React from 'react';
import { createRoot } from 'react-dom/client';
import DigitalClock from '@gunnarbirnir/digital-clock';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <h1>Digital Clock App</h1>
    <DigitalClock />
  </React.StrictMode>
);
